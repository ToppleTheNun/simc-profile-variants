import { writeFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { SimcFileInDirectory } from "@topplethenun/simc-profile-variants-sims-utils/simc";
import { getSimcFilesInFlatDirectory } from "@topplethenun/simc-profile-variants-sims-utils/simc";
import { format } from "prettier";
import { dedent } from "ts-dedent";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directory = join(__dirname, "..", "src");

async function generateTypeScriptForSimcFile(
  simcFile: SimcFileInDirectory,
): Promise<void> {
  const formatted = await format(
    dedent`
    /* eslint-disable unicorn/filename-case -- Disabling because this needs to match simc. */
    import { dedent } from 'ts-dedent';
  
    /* eslint-disable camelcase -- Disabling because this needs to match simc. */
    export const ${simcFile.baseName} = dedent\` 
    ${simcFile.contents.trim()}
    \`;
    `,
    { parser: "typescript" },
  );
  const pathToTsFile = join(directory, `${simcFile.baseName}.ts`);

  await writeFile(pathToTsFile, formatted, { encoding: "utf-8" });
}

export async function generateTypeScriptForSimcFiles(): Promise<void> {
  const simcFiles = await getSimcFilesInFlatDirectory(directory);

  await Promise.all(simcFiles.map(generateTypeScriptForSimcFile));

  // Some of this bullshit is to trick rollup/TypeScript into letting us export
  // the constants that are going to be strings after bundling.
  const imports = simcFiles
    .map(
      (file) =>
        `import { ${file.baseName} as ${file.importName} } from './${file.baseName}.ts'`,
    )
    .join("\n");
  const exports = simcFiles
    .map(
      (file) => `export const ${file.baseName}: string = ${file.importName};`,
    )
    .join("\n");
  const names = simcFiles.map((file) => `'${file.baseName}'`).join(", ");
  const mapping = simcFiles.map((file) => `${file.baseName},`).join("\n");

  const rawContents = dedent`
import {
  type EncounterType,
  type Generator,
  getGeneratorByName,
  type GeneratorName,
  isGeneratorName,
} from '@topplethenun/simc-profile-variants-sims-generators';
import { type Profile } from '@topplethenun/simc-profile-variants-sims-profiles';
import { snakeToPascal } from '@topplethenun/simc-profile-variants-sims-utils/strings';
${imports}


/* eslint-disable camelcase -- Disabling because this needs to match simc. */
${exports}
/* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */

export const templates = [${names}] as const;
export type Template = (typeof templates)[number];
export const isTemplate = (s: unknown): s is Template =>
  templates.includes(s as Template);

const templateMapping: Record<Template, string> = {
  
  /* eslint-disable camelcase -- Disabling because this needs to match simc. */
  ${mapping}
  /* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */
};
export const getTemplateByName = (template: Template): string =>
  templateMapping[template];

interface GetTemplateParams {
  profile: Profile;
  encounterType: EncounterType;
  generator: Generator | GeneratorName;
}
export const getTemplate = (params: GetTemplateParams): string | undefined => {
  const generator = isGeneratorName(params.generator)
    ? getGeneratorByName(params.generator)
    : params.generator;
  const possibleTemplateName = \`\${params.profile}_\${
  generator.name
}_\${snakeToPascal(params.encounterType)}\`;
  if (!isTemplate(possibleTemplateName)) {
    return undefined;
  }
  return getTemplateByName(possibleTemplateName);
};
`;

  const formattedContents = await format(rawContents, { parser: "typescript" });
  writeFileSync(join(directory, "index.ts"), formattedContents, {
    encoding: "utf-8",
  });
}
