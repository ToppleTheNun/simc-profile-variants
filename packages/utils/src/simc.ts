import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

import { snakeToPascal } from "./strings.ts";

export interface SimcFileInDirectory {
  baseName: string;
  importName: string;
  fileName: string;
  contents: string;
}

// Some of this bullshit is to trick rollup/TypeScript into letting us export

// the constants that are going to be strings after bundling.
export async function getSimcFilesInFlatDirectory(
  directory: string,
): Promise<SimcFileInDirectory[]> {
  const directoryContents = await readdir(directory);
  const simcFilesInDirectory = directoryContents.filter((item) =>
    item.endsWith(".simc"),
  );
  return Promise.all(
    simcFilesInDirectory.map(
      async (file) =>
        ({
          baseName: file.replace(".simc", ""),
          importName: snakeToPascal(file.replace(".simc", "")),
          fileName: file,
          contents: await readFile(join(directory, file), {
            encoding: "utf-8",
          }),
        }) satisfies SimcFileInDirectory,
    ),
  );
}
