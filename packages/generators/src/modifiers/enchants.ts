import { Gear } from "../combinations/combinations.js";

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
