import { dedent } from "ts-dedent";

export const encounterTypes = [
  "singleTargetRaid",
  "councilRaid",
  "mythicPlusSmallPack",
  "mythicPlusLargePack",
] as const;
export type EncounterType = (typeof encounterTypes)[number];
export const isEncounterType = (s: string): s is EncounterType =>
  encounterTypes.includes(s as EncounterType);

const headersWithTargetAndTime = (
  targets: number,
  time: number,
): string => dedent`
  iterations=10000
  desired_targets=${targets}
  max_time=${time}
  calculate_scale_factors=0
  scale_only=strength,intellect,agility,crit,mastery,vers,haste,weapon_dps,weapon_offhand_dps
  override.bloodlust=1
  override.arcane_intellect=1
  override.power_word_fortitude=1
  override.battle_shout=1
  override.mystic_touch=1
  override.chaos_brand=1
  override.windfury_totem=1
  override.mark_of_the_wild=1
  override.bleeding=1
  report_details=1
  single_actor_batch=1
  optimize_expressions=1
  target_error=0.05
`;

const headers: Record<EncounterType, string> = {
  councilRaid: headersWithTargetAndTime(4, 300),
  mythicPlusLargePack: headersWithTargetAndTime(10, 60),
  mythicPlusSmallPack: headersWithTargetAndTime(6, 40),
  singleTargetRaid: headersWithTargetAndTime(1, 300),
};
export const header = (encounterType: EncounterType): string =>
  headers[encounterType];
