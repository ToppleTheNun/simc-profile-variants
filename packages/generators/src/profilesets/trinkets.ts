import {
  pairedGearCombinations,
  stringifyGearCombinations,
} from "../combinations/combinations.ts";
import { gear } from "../gear/trinkets.ts";

export const profilesetsGearPairs = pairedGearCombinations(gear);
export const profilesets = stringifyGearCombinations(profilesetsGearPairs);
