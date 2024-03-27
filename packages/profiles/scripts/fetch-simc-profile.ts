import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawProfileLinks: Record<string, string> = {
  T31_Demon_Hunter_Havoc:
    "https://raw.githubusercontent.com/simulationcraft/simc/dragonflight/profiles/generators/Tier31/T31_Generate_Demon_Hunter.simc",
  T31_Demon_Hunter_Vengeance:
    "https://raw.githubusercontent.com/simulationcraft/simc/dragonflight/profiles/generators/Tier31/T31_Generate_Demon_Hunter.simc",
};

const profilesToUpdate = Object.keys(rawProfileLinks);
const directory = join(__dirname, "..", "src");

const fetchCache: Record<string, string> = {};
async function fetchProfile(link: string): Promise<string> {
  const cached = fetchCache[link];
  if (cached) {
    return cached;
  }
  const response = await fetch(link);
  const toCache = await response.text();
  fetchCache[link] = toCache;
  return toCache;
}

async function fetchAndWriteProfile(profileToUpdate: string): Promise<void> {
  const profileToUpdateLink = rawProfileLinks[profileToUpdate];
  if (!profileToUpdateLink) {
    return;
  }

  const fetchedProfile = await fetchProfile(profileToUpdateLink);
  const fetchedProfileSplit = fetchedProfile.split("\n");

  const startingLine = fetchedProfileSplit.findIndex((line) =>
    line.includes(`="${profileToUpdate}"`),
  );
  const endingLine = fetchedProfileSplit.findIndex((line) =>
    line.includes(`save=${profileToUpdate}.simc`),
  );

  if (startingLine < 0 || endingLine < 0) {
    return;
  }

  const profile = fetchedProfileSplit
    .slice(startingLine, endingLine - 1)
    .join("\n");
  const simcFileName = join(directory, `${profileToUpdate}.simc`);

  await writeFile(simcFileName, profile, { encoding: "utf-8" });
}

export async function fetchAndUpdateSimcProfiles(): Promise<void> {
  return Promise.all(profilesToUpdate.map(fetchAndWriteProfile)).then(() => {
    // do nothing, just for having a singular void return type :)
  });
}
