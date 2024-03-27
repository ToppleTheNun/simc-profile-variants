import { generateTypeScriptForSimcFiles } from "./generate-typescript-for-simc-files.ts";
import { updateJsrJson, updatePackageJson } from "./update-package-json.ts";
import { writeTemplatesToFile } from "./write-simc-templates.ts";

await writeTemplatesToFile();
await generateTypeScriptForSimcFiles();
await updatePackageJson();
await updateJsrJson();
