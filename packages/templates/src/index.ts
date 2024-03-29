import {
  type EncounterType,
  type Generator,
  getGeneratorByName,
  type GeneratorName,
  isGeneratorName,
} from "@topplethenun/simc-profile-variants-generators";
import { type Profile } from "@topplethenun/simc-profile-variants-profiles";
import { snakeToPascal } from "@topplethenun/simc-profile-variants-utils/strings";
import { DF4_Demon_Hunter_Vengeance_embellishments_CouncilRaid as DF4DemonHunterVengeanceEmbellishmentsCouncilRaid } from "./DF4_Demon_Hunter_Vengeance_embellishments_CouncilRaid.ts";
import { DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusLargePack as DF4DemonHunterVengeanceEmbellishmentsMythicPlusLargePack } from "./DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusLargePack.ts";
import { DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusSmallPack as DF4DemonHunterVengeanceEmbellishmentsMythicPlusSmallPack } from "./DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusSmallPack.ts";
import { DF4_Demon_Hunter_Vengeance_embellishments_SingleTargetRaid as DF4DemonHunterVengeanceEmbellishmentsSingleTargetRaid } from "./DF4_Demon_Hunter_Vengeance_embellishments_SingleTargetRaid.ts";
import { DF4_Demon_Hunter_Vengeance_rings_CouncilRaid as DF4DemonHunterVengeanceRingsCouncilRaid } from "./DF4_Demon_Hunter_Vengeance_rings_CouncilRaid.ts";
import { DF4_Demon_Hunter_Vengeance_rings_MythicPlusLargePack as DF4DemonHunterVengeanceRingsMythicPlusLargePack } from "./DF4_Demon_Hunter_Vengeance_rings_MythicPlusLargePack.ts";
import { DF4_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack as DF4DemonHunterVengeanceRingsMythicPlusSmallPack } from "./DF4_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack.ts";
import { DF4_Demon_Hunter_Vengeance_rings_SingleTargetRaid as DF4DemonHunterVengeanceRingsSingleTargetRaid } from "./DF4_Demon_Hunter_Vengeance_rings_SingleTargetRaid.ts";
import { DF4_Demon_Hunter_Vengeance_trinkets_CouncilRaid as DF4DemonHunterVengeanceTrinketsCouncilRaid } from "./DF4_Demon_Hunter_Vengeance_trinkets_CouncilRaid.ts";
import { DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack as DF4DemonHunterVengeanceTrinketsMythicPlusLargePack } from "./DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack.ts";
import { DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack as DF4DemonHunterVengeanceTrinketsMythicPlusSmallPack } from "./DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack.ts";
import { DF4_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid as DF4DemonHunterVengeanceTrinketsSingleTargetRaid } from "./DF4_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid.ts";
import { DF4_Demon_Hunter_Vengeance_weapons_CouncilRaid as DF4DemonHunterVengeanceWeaponsCouncilRaid } from "./DF4_Demon_Hunter_Vengeance_weapons_CouncilRaid.ts";
import { DF4_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack as DF4DemonHunterVengeanceWeaponsMythicPlusLargePack } from "./DF4_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack.ts";
import { DF4_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack as DF4DemonHunterVengeanceWeaponsMythicPlusSmallPack } from "./DF4_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack.ts";
import { DF4_Demon_Hunter_Vengeance_weapons_SingleTargetRaid as DF4DemonHunterVengeanceWeaponsSingleTargetRaid } from "./DF4_Demon_Hunter_Vengeance_weapons_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Havoc_embellishments_CouncilRaid as T31DemonHunterHavocEmbellishmentsCouncilRaid } from "./T31_Demon_Hunter_Havoc_embellishments_CouncilRaid.ts";
import { T31_Demon_Hunter_Havoc_embellishments_MythicPlusLargePack as T31DemonHunterHavocEmbellishmentsMythicPlusLargePack } from "./T31_Demon_Hunter_Havoc_embellishments_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Havoc_embellishments_MythicPlusSmallPack as T31DemonHunterHavocEmbellishmentsMythicPlusSmallPack } from "./T31_Demon_Hunter_Havoc_embellishments_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Havoc_embellishments_SingleTargetRaid as T31DemonHunterHavocEmbellishmentsSingleTargetRaid } from "./T31_Demon_Hunter_Havoc_embellishments_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Havoc_rings_CouncilRaid as T31DemonHunterHavocRingsCouncilRaid } from "./T31_Demon_Hunter_Havoc_rings_CouncilRaid.ts";
import { T31_Demon_Hunter_Havoc_rings_MythicPlusLargePack as T31DemonHunterHavocRingsMythicPlusLargePack } from "./T31_Demon_Hunter_Havoc_rings_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Havoc_rings_MythicPlusSmallPack as T31DemonHunterHavocRingsMythicPlusSmallPack } from "./T31_Demon_Hunter_Havoc_rings_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Havoc_rings_SingleTargetRaid as T31DemonHunterHavocRingsSingleTargetRaid } from "./T31_Demon_Hunter_Havoc_rings_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Havoc_trinkets_CouncilRaid as T31DemonHunterHavocTrinketsCouncilRaid } from "./T31_Demon_Hunter_Havoc_trinkets_CouncilRaid.ts";
import { T31_Demon_Hunter_Havoc_trinkets_MythicPlusLargePack as T31DemonHunterHavocTrinketsMythicPlusLargePack } from "./T31_Demon_Hunter_Havoc_trinkets_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Havoc_trinkets_MythicPlusSmallPack as T31DemonHunterHavocTrinketsMythicPlusSmallPack } from "./T31_Demon_Hunter_Havoc_trinkets_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Havoc_trinkets_SingleTargetRaid as T31DemonHunterHavocTrinketsSingleTargetRaid } from "./T31_Demon_Hunter_Havoc_trinkets_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Havoc_weapons_CouncilRaid as T31DemonHunterHavocWeaponsCouncilRaid } from "./T31_Demon_Hunter_Havoc_weapons_CouncilRaid.ts";
import { T31_Demon_Hunter_Havoc_weapons_MythicPlusLargePack as T31DemonHunterHavocWeaponsMythicPlusLargePack } from "./T31_Demon_Hunter_Havoc_weapons_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Havoc_weapons_MythicPlusSmallPack as T31DemonHunterHavocWeaponsMythicPlusSmallPack } from "./T31_Demon_Hunter_Havoc_weapons_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Havoc_weapons_SingleTargetRaid as T31DemonHunterHavocWeaponsSingleTargetRaid } from "./T31_Demon_Hunter_Havoc_weapons_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_5p_embellishments_CouncilRaid as T31DemonHunterVengeance5pEmbellishmentsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_5p_embellishments_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusLargePack as T31DemonHunterVengeance5pEmbellishmentsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusSmallPack as T31DemonHunterVengeance5pEmbellishmentsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_5p_embellishments_SingleTargetRaid as T31DemonHunterVengeance5pEmbellishmentsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_5p_embellishments_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_embellishments_CouncilRaid as T31DemonHunterVengeanceCraftedEmbellishmentsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_Crafted_embellishments_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusLargePack as T31DemonHunterVengeanceCraftedEmbellishmentsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusSmallPack as T31DemonHunterVengeanceCraftedEmbellishmentsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_embellishments_SingleTargetRaid as T31DemonHunterVengeanceCraftedEmbellishmentsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_Crafted_embellishments_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_weapons_CouncilRaid as T31DemonHunterVengeanceCraftedWeaponsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_Crafted_weapons_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusLargePack as T31DemonHunterVengeanceCraftedWeaponsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusSmallPack as T31DemonHunterVengeanceCraftedWeaponsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_Crafted_weapons_SingleTargetRaid as T31DemonHunterVengeanceCraftedWeaponsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_Crafted_weapons_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_rings_CouncilRaid as T31DemonHunterVengeanceRingsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_rings_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_rings_MythicPlusLargePack as T31DemonHunterVengeanceRingsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_rings_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack as T31DemonHunterVengeanceRingsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_rings_SingleTargetRaid as T31DemonHunterVengeanceRingsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_rings_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_talents_CouncilRaid as T31DemonHunterVengeanceTalentsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_talents_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_talents_MythicPlusLargePack as T31DemonHunterVengeanceTalentsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_talents_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_talents_MythicPlusSmallPack as T31DemonHunterVengeanceTalentsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_talents_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_talents_SingleTargetRaid as T31DemonHunterVengeanceTalentsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_talents_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_trinkets_CouncilRaid as T31DemonHunterVengeanceTrinketsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_trinkets_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack as T31DemonHunterVengeanceTrinketsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack as T31DemonHunterVengeanceTrinketsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid as T31DemonHunterVengeanceTrinketsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid.ts";
import { T31_Demon_Hunter_Vengeance_weapons_CouncilRaid as T31DemonHunterVengeanceWeaponsCouncilRaid } from "./T31_Demon_Hunter_Vengeance_weapons_CouncilRaid.ts";
import { T31_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack as T31DemonHunterVengeanceWeaponsMythicPlusLargePack } from "./T31_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack.ts";
import { T31_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack as T31DemonHunterVengeanceWeaponsMythicPlusSmallPack } from "./T31_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack.ts";
import { T31_Demon_Hunter_Vengeance_weapons_SingleTargetRaid as T31DemonHunterVengeanceWeaponsSingleTargetRaid } from "./T31_Demon_Hunter_Vengeance_weapons_SingleTargetRaid.ts";

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance_embellishments_CouncilRaid: string =
  DF4DemonHunterVengeanceEmbellishmentsCouncilRaid;
export const DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusLargePack: string =
  DF4DemonHunterVengeanceEmbellishmentsMythicPlusLargePack;
export const DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusSmallPack: string =
  DF4DemonHunterVengeanceEmbellishmentsMythicPlusSmallPack;
export const DF4_Demon_Hunter_Vengeance_embellishments_SingleTargetRaid: string =
  DF4DemonHunterVengeanceEmbellishmentsSingleTargetRaid;
export const DF4_Demon_Hunter_Vengeance_rings_CouncilRaid: string =
  DF4DemonHunterVengeanceRingsCouncilRaid;
export const DF4_Demon_Hunter_Vengeance_rings_MythicPlusLargePack: string =
  DF4DemonHunterVengeanceRingsMythicPlusLargePack;
export const DF4_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack: string =
  DF4DemonHunterVengeanceRingsMythicPlusSmallPack;
export const DF4_Demon_Hunter_Vengeance_rings_SingleTargetRaid: string =
  DF4DemonHunterVengeanceRingsSingleTargetRaid;
export const DF4_Demon_Hunter_Vengeance_trinkets_CouncilRaid: string =
  DF4DemonHunterVengeanceTrinketsCouncilRaid;
export const DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack: string =
  DF4DemonHunterVengeanceTrinketsMythicPlusLargePack;
export const DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack: string =
  DF4DemonHunterVengeanceTrinketsMythicPlusSmallPack;
export const DF4_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid: string =
  DF4DemonHunterVengeanceTrinketsSingleTargetRaid;
export const DF4_Demon_Hunter_Vengeance_weapons_CouncilRaid: string =
  DF4DemonHunterVengeanceWeaponsCouncilRaid;
export const DF4_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack: string =
  DF4DemonHunterVengeanceWeaponsMythicPlusLargePack;
export const DF4_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack: string =
  DF4DemonHunterVengeanceWeaponsMythicPlusSmallPack;
export const DF4_Demon_Hunter_Vengeance_weapons_SingleTargetRaid: string =
  DF4DemonHunterVengeanceWeaponsSingleTargetRaid;
export const T31_Demon_Hunter_Havoc_embellishments_CouncilRaid: string =
  T31DemonHunterHavocEmbellishmentsCouncilRaid;
export const T31_Demon_Hunter_Havoc_embellishments_MythicPlusLargePack: string =
  T31DemonHunterHavocEmbellishmentsMythicPlusLargePack;
export const T31_Demon_Hunter_Havoc_embellishments_MythicPlusSmallPack: string =
  T31DemonHunterHavocEmbellishmentsMythicPlusSmallPack;
export const T31_Demon_Hunter_Havoc_embellishments_SingleTargetRaid: string =
  T31DemonHunterHavocEmbellishmentsSingleTargetRaid;
export const T31_Demon_Hunter_Havoc_rings_CouncilRaid: string =
  T31DemonHunterHavocRingsCouncilRaid;
export const T31_Demon_Hunter_Havoc_rings_MythicPlusLargePack: string =
  T31DemonHunterHavocRingsMythicPlusLargePack;
export const T31_Demon_Hunter_Havoc_rings_MythicPlusSmallPack: string =
  T31DemonHunterHavocRingsMythicPlusSmallPack;
export const T31_Demon_Hunter_Havoc_rings_SingleTargetRaid: string =
  T31DemonHunterHavocRingsSingleTargetRaid;
export const T31_Demon_Hunter_Havoc_trinkets_CouncilRaid: string =
  T31DemonHunterHavocTrinketsCouncilRaid;
export const T31_Demon_Hunter_Havoc_trinkets_MythicPlusLargePack: string =
  T31DemonHunterHavocTrinketsMythicPlusLargePack;
export const T31_Demon_Hunter_Havoc_trinkets_MythicPlusSmallPack: string =
  T31DemonHunterHavocTrinketsMythicPlusSmallPack;
export const T31_Demon_Hunter_Havoc_trinkets_SingleTargetRaid: string =
  T31DemonHunterHavocTrinketsSingleTargetRaid;
export const T31_Demon_Hunter_Havoc_weapons_CouncilRaid: string =
  T31DemonHunterHavocWeaponsCouncilRaid;
export const T31_Demon_Hunter_Havoc_weapons_MythicPlusLargePack: string =
  T31DemonHunterHavocWeaponsMythicPlusLargePack;
export const T31_Demon_Hunter_Havoc_weapons_MythicPlusSmallPack: string =
  T31DemonHunterHavocWeaponsMythicPlusSmallPack;
export const T31_Demon_Hunter_Havoc_weapons_SingleTargetRaid: string =
  T31DemonHunterHavocWeaponsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_5p_embellishments_CouncilRaid: string =
  T31DemonHunterVengeance5pEmbellishmentsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusLargePack: string =
  T31DemonHunterVengeance5pEmbellishmentsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusSmallPack: string =
  T31DemonHunterVengeance5pEmbellishmentsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_5p_embellishments_SingleTargetRaid: string =
  T31DemonHunterVengeance5pEmbellishmentsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_Crafted_embellishments_CouncilRaid: string =
  T31DemonHunterVengeanceCraftedEmbellishmentsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusLargePack: string =
  T31DemonHunterVengeanceCraftedEmbellishmentsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusSmallPack: string =
  T31DemonHunterVengeanceCraftedEmbellishmentsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_Crafted_embellishments_SingleTargetRaid: string =
  T31DemonHunterVengeanceCraftedEmbellishmentsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_Crafted_weapons_CouncilRaid: string =
  T31DemonHunterVengeanceCraftedWeaponsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusLargePack: string =
  T31DemonHunterVengeanceCraftedWeaponsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusSmallPack: string =
  T31DemonHunterVengeanceCraftedWeaponsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_Crafted_weapons_SingleTargetRaid: string =
  T31DemonHunterVengeanceCraftedWeaponsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_rings_CouncilRaid: string =
  T31DemonHunterVengeanceRingsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_rings_MythicPlusLargePack: string =
  T31DemonHunterVengeanceRingsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack: string =
  T31DemonHunterVengeanceRingsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_rings_SingleTargetRaid: string =
  T31DemonHunterVengeanceRingsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_talents_CouncilRaid: string =
  T31DemonHunterVengeanceTalentsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_talents_MythicPlusLargePack: string =
  T31DemonHunterVengeanceTalentsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_talents_MythicPlusSmallPack: string =
  T31DemonHunterVengeanceTalentsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_talents_SingleTargetRaid: string =
  T31DemonHunterVengeanceTalentsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_trinkets_CouncilRaid: string =
  T31DemonHunterVengeanceTrinketsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack: string =
  T31DemonHunterVengeanceTrinketsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack: string =
  T31DemonHunterVengeanceTrinketsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid: string =
  T31DemonHunterVengeanceTrinketsSingleTargetRaid;
export const T31_Demon_Hunter_Vengeance_weapons_CouncilRaid: string =
  T31DemonHunterVengeanceWeaponsCouncilRaid;
export const T31_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack: string =
  T31DemonHunterVengeanceWeaponsMythicPlusLargePack;
export const T31_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack: string =
  T31DemonHunterVengeanceWeaponsMythicPlusSmallPack;
export const T31_Demon_Hunter_Vengeance_weapons_SingleTargetRaid: string =
  T31DemonHunterVengeanceWeaponsSingleTargetRaid;
/* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */

export const templates = [
  "DF4_Demon_Hunter_Vengeance_embellishments_CouncilRaid",
  "DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusLargePack",
  "DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusSmallPack",
  "DF4_Demon_Hunter_Vengeance_embellishments_SingleTargetRaid",
  "DF4_Demon_Hunter_Vengeance_rings_CouncilRaid",
  "DF4_Demon_Hunter_Vengeance_rings_MythicPlusLargePack",
  "DF4_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack",
  "DF4_Demon_Hunter_Vengeance_rings_SingleTargetRaid",
  "DF4_Demon_Hunter_Vengeance_trinkets_CouncilRaid",
  "DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack",
  "DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack",
  "DF4_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid",
  "DF4_Demon_Hunter_Vengeance_weapons_CouncilRaid",
  "DF4_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack",
  "DF4_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack",
  "DF4_Demon_Hunter_Vengeance_weapons_SingleTargetRaid",
  "T31_Demon_Hunter_Havoc_embellishments_CouncilRaid",
  "T31_Demon_Hunter_Havoc_embellishments_MythicPlusLargePack",
  "T31_Demon_Hunter_Havoc_embellishments_MythicPlusSmallPack",
  "T31_Demon_Hunter_Havoc_embellishments_SingleTargetRaid",
  "T31_Demon_Hunter_Havoc_rings_CouncilRaid",
  "T31_Demon_Hunter_Havoc_rings_MythicPlusLargePack",
  "T31_Demon_Hunter_Havoc_rings_MythicPlusSmallPack",
  "T31_Demon_Hunter_Havoc_rings_SingleTargetRaid",
  "T31_Demon_Hunter_Havoc_trinkets_CouncilRaid",
  "T31_Demon_Hunter_Havoc_trinkets_MythicPlusLargePack",
  "T31_Demon_Hunter_Havoc_trinkets_MythicPlusSmallPack",
  "T31_Demon_Hunter_Havoc_trinkets_SingleTargetRaid",
  "T31_Demon_Hunter_Havoc_weapons_CouncilRaid",
  "T31_Demon_Hunter_Havoc_weapons_MythicPlusLargePack",
  "T31_Demon_Hunter_Havoc_weapons_MythicPlusSmallPack",
  "T31_Demon_Hunter_Havoc_weapons_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_5p_embellishments_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_5p_embellishments_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_Crafted_embellishments_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_Crafted_embellishments_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_Crafted_weapons_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_Crafted_weapons_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_rings_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_rings_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_rings_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_talents_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_talents_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_talents_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_talents_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_trinkets_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid",
  "T31_Demon_Hunter_Vengeance_weapons_CouncilRaid",
  "T31_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack",
  "T31_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack",
  "T31_Demon_Hunter_Vengeance_weapons_SingleTargetRaid",
] as const;
export type Template = (typeof templates)[number];
export const isTemplate = (s: unknown): s is Template =>
  templates.includes(s as Template);

const templateMapping: Record<Template, string> = {
  /* eslint-disable camelcase -- Disabling because this needs to match simc. */
  DF4_Demon_Hunter_Vengeance_embellishments_CouncilRaid,
  DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusLargePack,
  DF4_Demon_Hunter_Vengeance_embellishments_MythicPlusSmallPack,
  DF4_Demon_Hunter_Vengeance_embellishments_SingleTargetRaid,
  DF4_Demon_Hunter_Vengeance_rings_CouncilRaid,
  DF4_Demon_Hunter_Vengeance_rings_MythicPlusLargePack,
  DF4_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack,
  DF4_Demon_Hunter_Vengeance_rings_SingleTargetRaid,
  DF4_Demon_Hunter_Vengeance_trinkets_CouncilRaid,
  DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack,
  DF4_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack,
  DF4_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid,
  DF4_Demon_Hunter_Vengeance_weapons_CouncilRaid,
  DF4_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack,
  DF4_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack,
  DF4_Demon_Hunter_Vengeance_weapons_SingleTargetRaid,
  T31_Demon_Hunter_Havoc_embellishments_CouncilRaid,
  T31_Demon_Hunter_Havoc_embellishments_MythicPlusLargePack,
  T31_Demon_Hunter_Havoc_embellishments_MythicPlusSmallPack,
  T31_Demon_Hunter_Havoc_embellishments_SingleTargetRaid,
  T31_Demon_Hunter_Havoc_rings_CouncilRaid,
  T31_Demon_Hunter_Havoc_rings_MythicPlusLargePack,
  T31_Demon_Hunter_Havoc_rings_MythicPlusSmallPack,
  T31_Demon_Hunter_Havoc_rings_SingleTargetRaid,
  T31_Demon_Hunter_Havoc_trinkets_CouncilRaid,
  T31_Demon_Hunter_Havoc_trinkets_MythicPlusLargePack,
  T31_Demon_Hunter_Havoc_trinkets_MythicPlusSmallPack,
  T31_Demon_Hunter_Havoc_trinkets_SingleTargetRaid,
  T31_Demon_Hunter_Havoc_weapons_CouncilRaid,
  T31_Demon_Hunter_Havoc_weapons_MythicPlusLargePack,
  T31_Demon_Hunter_Havoc_weapons_MythicPlusSmallPack,
  T31_Demon_Hunter_Havoc_weapons_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_5p_embellishments_CouncilRaid,
  T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_5p_embellishments_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_5p_embellishments_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_Crafted_embellishments_CouncilRaid,
  T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_Crafted_embellishments_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_Crafted_embellishments_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_Crafted_weapons_CouncilRaid,
  T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_Crafted_weapons_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_Crafted_weapons_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_rings_CouncilRaid,
  T31_Demon_Hunter_Vengeance_rings_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_rings_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_rings_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_talents_CouncilRaid,
  T31_Demon_Hunter_Vengeance_talents_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_talents_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_talents_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_trinkets_CouncilRaid,
  T31_Demon_Hunter_Vengeance_trinkets_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_trinkets_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_trinkets_SingleTargetRaid,
  T31_Demon_Hunter_Vengeance_weapons_CouncilRaid,
  T31_Demon_Hunter_Vengeance_weapons_MythicPlusLargePack,
  T31_Demon_Hunter_Vengeance_weapons_MythicPlusSmallPack,
  T31_Demon_Hunter_Vengeance_weapons_SingleTargetRaid,
  /* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */
};
export const getTemplateByName = (template: Template): string =>
  templateMapping[template];

interface GetTemplateParams {
  profile: Profile;
  encounterType: EncounterType;
  generator: Generator | GeneratorName;
}
export const getTemplate = (params: GetTemplateParams): string | undefined => {
  const generator = isGeneratorName(params.generator)
    ? getGeneratorByName(params.generator)
    : params.generator;
  const possibleTemplateName = `${params.profile}_${
    generator.name
  }_${snakeToPascal(params.encounterType)}`;
  if (!isTemplate(possibleTemplateName)) {
    return undefined;
  }
  return getTemplateByName(possibleTemplateName);
};
