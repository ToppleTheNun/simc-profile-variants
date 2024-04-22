import {
  type EncounterType,
  type Generator,
  getGeneratorByName,
  type GeneratorName,
  isGeneratorName,
} from "@topplethenun/simc-profile-variants-generators";
import { type Profile } from "@topplethenun/simc-profile-variants-profiles";
import { snakeToPascal } from "@topplethenun/simc-profile-variants-utils/strings";
import { DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_CouncilRaid as DF4DemonHunterVengeanceNoCraftedEmbellishmentsCouncilRaid } from "./DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_CouncilRaid.ts";
import { DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusLargePack as DF4DemonHunterVengeanceNoCraftedEmbellishmentsMythicPlusLargePack } from "./DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusLargePack.ts";
import { DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusSmallPack as DF4DemonHunterVengeanceNoCraftedEmbellishmentsMythicPlusSmallPack } from "./DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusSmallPack.ts";
import { DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_SingleTargetRaid as DF4DemonHunterVengeanceNoCraftedEmbellishmentsSingleTargetRaid } from "./DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_SingleTargetRaid.ts";
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

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_CouncilRaid: string =
  DF4DemonHunterVengeanceNoCraftedEmbellishmentsCouncilRaid;
export const DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusLargePack: string =
  DF4DemonHunterVengeanceNoCraftedEmbellishmentsMythicPlusLargePack;
export const DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusSmallPack: string =
  DF4DemonHunterVengeanceNoCraftedEmbellishmentsMythicPlusSmallPack;
export const DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_SingleTargetRaid: string =
  DF4DemonHunterVengeanceNoCraftedEmbellishmentsSingleTargetRaid;
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
/* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */

export const templates = [
  "DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_CouncilRaid",
  "DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusLargePack",
  "DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusSmallPack",
  "DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_SingleTargetRaid",
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
] as const;
export type Template = (typeof templates)[number];
export const isTemplate = (s: unknown): s is Template =>
  templates.includes(s as Template);

const templateMapping: Record<Template, string> = {
  /* eslint-disable camelcase -- Disabling because this needs to match simc. */
  DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_CouncilRaid,
  DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusLargePack,
  DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_MythicPlusSmallPack,
  DF4_Demon_Hunter_Vengeance_no_crafted_embellishments_SingleTargetRaid,
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
