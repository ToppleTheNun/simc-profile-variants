import { fetchAndUpdateSimcProfiles } from "./fetch-simc-profile.ts";
import { generateTypeScriptForSimcFiles } from "./generate-typescript-for-simc-files.ts";
import { updateJsrJson, updatePackageJson } from "./update-package-json.ts";

await fetchAndUpdateSimcProfiles();
await generateTypeScriptForSimcFiles();
await updatePackageJson();
await updateJsrJson();
