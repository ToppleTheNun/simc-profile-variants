import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type {
  ConfigMapping,
  ConfigMatrixItem,
} from "@topplethenun/simc-profile-variants-config";
import {
  defaultConfigMapping,
  getMatrix,
  getModifiedConfigMapping,
} from "@topplethenun/simc-profile-variants-config";
import { snakeToPascal } from "@topplethenun/simc-profile-variants-utils/strings";
import { isPresent } from "@topplethenun/simc-profile-variants-utils/type-guards";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configMapping: ConfigMapping = getModifiedConfigMapping(
  defaultConfigMapping,
  (mapping) => {
    // this is for later
    mapping.DF4_Demon_Hunter_Vengeance.matrix.generators =
      mapping.DF4_Demon_Hunter_Vengeance.matrix.generators.filter(
        (generator) => generator.name !== "embellishments",
      );
    mapping.DF4_Demon_Hunter_Vengeance_no_crafted.matrix.generators =
      mapping.DF4_Demon_Hunter_Vengeance_no_crafted.matrix.generators.filter(
        (generator) => generator.name === "embellishments",
      );
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
  const templateContents = [profile.includes("DF4") ? "ptr=1" : null, generated]
    .filter(isPresent)
    .join("\n\n");

  await writeFile(fileName, templateContents, { encoding: "utf-8" });
}

export async function writeTemplatesToFile(): Promise<void> {
  await Promise.all(matrix.map(writeTemplateToFile));
}
