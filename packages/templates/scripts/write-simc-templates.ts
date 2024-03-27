import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type {
  ConfigMapping,
  ConfigMatrixItem,
} from "@topplethenun/simc-profile-variants-sims-config";
import {
  defaultConfigMapping,
  getMatrix,
  getModifiedConfigMapping,
} from "@topplethenun/simc-profile-variants-sims-config";
import { getGeneratorByName } from "@topplethenun/simc-profile-variants-sims-generators";
import { snakeToPascal } from "@topplethenun/simc-profile-variants-sims-utils/strings";
import { isPresent } from "@topplethenun/simc-profile-variants-sims-utils/type-guards";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configMapping: ConfigMapping = getModifiedConfigMapping(
  defaultConfigMapping,
  (mapping) => {
    mapping.T31_Demon_Hunter_Vengeance.matrix.generators =
      mapping.T31_Demon_Hunter_Vengeance.matrix.generators.filter(
        (generator) => generator.name !== "embellishments",
      );
    mapping.T31_Demon_Hunter_Vengeance_Crafted.matrix.generators = [
      getGeneratorByName("embellishments"),
      getGeneratorByName("weapons"),
    ];
    mapping.T31_Demon_Hunter_Vengeance_5p.matrix.generators = [
      getGeneratorByName("embellishments"),
    ];
  },
);

const matrix = Object.values(configMapping).flatMap(getMatrix);
const directory = join(__dirname, "..", "src");

async function writeTemplateToFile(
  matrixItem: ConfigMatrixItem,
): Promise<void> {
  const { encounterType, generator, profile } = matrixItem;
  const templateName = `${profile}_${generator.name}_${snakeToPascal(
    encounterType,
  )}`;
  const fileName = join(directory, `${templateName}.simc`);

  const generated = generator.generateAsString({
    encounterType,
    profile,
  });
  const templateContents = [profile.includes("T32") ? "ptr=1" : null, generated]
    .filter(isPresent)
    .join("\n\n");

  await writeFile(fileName, templateContents, { encoding: "utf-8" });
}

export async function writeTemplatesToFile(): Promise<void> {
  await Promise.all(matrix.map(writeTemplateToFile));
}
