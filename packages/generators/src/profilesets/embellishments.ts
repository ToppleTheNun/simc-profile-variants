import {
  pairedGearCombinations,
  stringifyGearCombinations,
} from "../combinations/combinations.ts";
import { gear } from "../gear/embellishments.ts";

export const profilesetsGearPairs = pairedGearCombinations(gear);
export const profilesets = stringifyGearCombinations(profilesetsGearPairs);
