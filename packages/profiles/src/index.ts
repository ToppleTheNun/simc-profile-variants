import { isPresent } from "@topplethenun/simc-profile-variants-sims-utils/type-guards";

import { DF4_Demon_Hunter_Vengeance as DF4DemonHunterVengeance } from "./DF4_Demon_Hunter_Vengeance.ts";
import { T31_Demon_Hunter_Havoc as T31DemonHunterHavoc } from "./T31_Demon_Hunter_Havoc.ts";
import { T31_Demon_Hunter_Vengeance as T31DemonHunterVengeance } from "./T31_Demon_Hunter_Vengeance.ts";
import { T31_Demon_Hunter_Vengeance_5p as T31DemonHunterVengeance5p } from "./T31_Demon_Hunter_Vengeance_5p.ts";
import { T31_Demon_Hunter_Vengeance_Crafted as T31DemonHunterVengeanceCrafted } from "./T31_Demon_Hunter_Vengeance_Crafted.ts";

export const DF4_Demon_Hunter_Vengeance: string = DF4DemonHunterVengeance;
export const T31_Demon_Hunter_Havoc: string = T31DemonHunterHavoc;
export const T31_Demon_Hunter_Vengeance: string = T31DemonHunterVengeance;
export const T31_Demon_Hunter_Vengeance_5p: string = T31DemonHunterVengeance5p;
export const T31_Demon_Hunter_Vengeance_Crafted: string =
  T31DemonHunterVengeanceCrafted;

export const profiles = [
  "DF4_Demon_Hunter_Vengeance",
  "T31_Demon_Hunter_Havoc",
  "T31_Demon_Hunter_Vengeance",
  "T31_Demon_Hunter_Vengeance_5p",
  "T31_Demon_Hunter_Vengeance_Crafted",
] as const;
export type Profile = (typeof profiles)[number];
export const isProfile = (s: unknown): s is Profile =>
  isPresent(s) && typeof s === "string" && profiles.includes(s as Profile);

const profileMapping: Record<Profile, string> = {
  DF4_Demon_Hunter_Vengeance,
  T31_Demon_Hunter_Havoc,
  T31_Demon_Hunter_Vengeance,
  T31_Demon_Hunter_Vengeance_5p,
  T31_Demon_Hunter_Vengeance_Crafted,
};
export const getProfile = (profile: Profile): string => profileMapping[profile];
