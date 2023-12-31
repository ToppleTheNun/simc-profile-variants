import { isPresent } from "@topplethenun/simc-profile-variants-sims-utils";
import T31DemonHunterVengeance from "./T31_Demon_Hunter_Vengeance.simc";
import T31DemonHunterVengeance5p from "./T31_Demon_Hunter_Vengeance_5p.simc";
import T31DemonHunterVengeanceCrafted from "./T31_Demon_Hunter_Vengeance_Crafted.simc";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const T31_Demon_Hunter_Vengeance: string = T31DemonHunterVengeance;
export const T31_Demon_Hunter_Vengeance_5p: string = T31DemonHunterVengeance5p;
export const T31_Demon_Hunter_Vengeance_Crafted: string =
  T31DemonHunterVengeanceCrafted;
/* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */

export const profiles = [
  "T31_Demon_Hunter_Vengeance",
  "T31_Demon_Hunter_Vengeance_5p",
  "T31_Demon_Hunter_Vengeance_Crafted",
] as const;
export type Profile = (typeof profiles)[number];
export const isProfile = (s: unknown): s is Profile =>
  isPresent(s) && typeof s === "string" && profiles.includes(s as Profile);

const profileMapping: Record<Profile, string> = {
  /* eslint-disable camelcase -- Disabling because this needs to match simc. */
  T31_Demon_Hunter_Vengeance,
  T31_Demon_Hunter_Vengeance_5p,
  T31_Demon_Hunter_Vengeance_Crafted,
  /* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */
};
export const getProfile = (profile: Profile): string => profileMapping[profile];
