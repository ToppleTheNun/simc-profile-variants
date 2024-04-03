import type { Gear } from "../combinations/combinations.ts";

export function sophicWafting(gear: Gear[]): Gear[] {
  return gear
    .map((it) => [
      {
        ...it,
        name: `${it.name} (SD3)`,
        options: `${it.options},enchant=sophic_devotion_3`,
      },
      {
        ...it,
        name: `${it.name} (WD3)`,
        options: `${it.options},enchant=wafting_devotion_3`,
      },
    ])
    .flatMap((it) => it);
}

export function ringEnchants(gear: Gear[]): Gear[] {
  return gear
    .map((it) => [
      {
        ...it,
        name: `${it.name} (DCS3)`,
        options: `${it.options},enchant=devotion_of_critical_strike_3`,
      },
      {
        ...it,
        name: `${it.name} (DH3)`,
        options: `${it.options},enchant=devotion_of_haste_3`,
      },
      {
        ...it,
        name: `${it.name} (DM3)`,
        options: `${it.options},enchant=devotion_of_mastery_3`,
      },
      {
        ...it,
        name: `${it.name} (DV3)`,
        options: `${it.options},enchant=devotion_of_versatility_3`,
      },
    ])
    .flatMap((it) => it);
}
