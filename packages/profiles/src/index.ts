import { isPresent } from "@topplethenun/simc-profile-variants-utils/type-guards";
import { DF4_Demon_Hunter_Vengeance as DF4DemonHunterVengeance } from "./DF4_Demon_Hunter_Vengeance.ts";
import { DF4_Demon_Hunter_Vengeance_no_crafted as DF4DemonHunterVengeanceNoCrafted } from "./DF4_Demon_Hunter_Vengeance_no_crafted.ts";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance: string = DF4DemonHunterVengeance;
export const DF4_Demon_Hunter_Vengeance_no_crafted: string =
  DF4DemonHunterVengeanceNoCrafted;
/* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */

export const profiles = [
  "DF4_Demon_Hunter_Vengeance",
  "DF4_Demon_Hunter_Vengeance_no_crafted",
] as const;
export type Profile = (typeof profiles)[number];
export const isProfile = (s: unknown): s is Profile =>
  isPresent(s) && typeof s === "string" && profiles.includes(s as Profile);

const profileMapping: Record<Profile, string> = {
  /* eslint-disable camelcase -- Disabling because this needs to match simc. */
  DF4_Demon_Hunter_Vengeance,
  DF4_Demon_Hunter_Vengeance_no_crafted,
  /* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */
};
export const getProfile = (profile: Profile): string => profileMapping[profile];
