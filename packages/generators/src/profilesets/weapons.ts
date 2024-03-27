import {
  pairedGearCombinations,
  stringifyGearCombinations,
} from "../combinations/combinations.ts";
import { gear } from "../gear/weapons.ts";

export const profilesetsGearPairs = pairedGearCombinations(gear, true);
export const profilesets = stringifyGearCombinations(profilesetsGearPairs);
