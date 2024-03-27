import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { isPresent } from "@topplethenun/simc-profile-variants-sims-utils/type-guards";
import { format } from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directory = join(__dirname, "..");

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && isPresent(value);
}

async function getExports() {
  const directoryContents = await readdir(join(directory, "src"));
  return directoryContents
    .filter((item) => item.endsWith(".ts"))
    .map((file) => ({ fileName: file, baseName: file.replace(".ts", "") }))
    .map((file) => ({
      path: `./src/${file.fileName}`,
      exportName: file.baseName === "index" ? "." : `./${file.baseName}`,
    }));
}

export async function updatePackageJson() {
  const exports = await getExports();

  const packageJsonContents = await readFile(join(directory, "package.json"), {
    encoding: "utf-8",
  });
  const packageJson = JSON.parse(packageJsonContents);
  if (!isRecord(packageJson)) {
    throw new Error("Unable to modify package.json exports");
  }
  packageJson["exports"] = packageJson["exports"] = exports.reduce(
    (acc, curr) => ({ ...acc, [curr.exportName]: curr.path }),
    {},
  );

  const formatted = await format(JSON.stringify(packageJson), {
    parser: "json",
    plugins: ["prettier-plugin-pkg"],
  });
  await writeFile(join(directory, "package.json"), formatted, {
    encoding: "utf-8",
  });
}

export async function updateJsrJson() {
  const exports = await getExports();

  const packageJsonContents = await readFile(join(directory, "jsr.json"), {
    encoding: "utf-8",
  });
  const packageJson = JSON.parse(packageJsonContents);
  if (!isRecord(packageJson)) {
    throw new Error("Unable to modify jsr.json exports");
  }
  packageJson["exports"] = packageJson["exports"] = exports.reduce(
    (acc, curr) => ({ ...acc, [curr.exportName]: curr.path }),
    {},
  );

  const formatted = await format(JSON.stringify(packageJson), {
    parser: "json",
  });
  await writeFile(join(directory, "jsr.json"), formatted, {
    encoding: "utf-8",
  });
}
