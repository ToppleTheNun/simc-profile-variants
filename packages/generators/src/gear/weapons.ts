import { defineGear } from "../combinations/combinations.ts";
import { sophicWafting } from "../modifiers/enchants.js";

export const gear = sophicWafting(
  defineGear([
    {
      name: "Thorncaller",
      slot: "main_hand",
      options: "thorncaller_claw,id=207784,bonus_id=10359/1488",
      uniqueId: 207784,
    },
    {
      name: "Gholak",
      slot: "main_hand",
      options: "gholak_the_final_conflagration,id=207786,bonus_id=10359/1488",
      uniqueId: 207786,
    },
    {
      name: "Stormslash",
      slot: "main_hand",
      options: "stormslash,id=193688,bonus_id=10359/1488",
    },
    {
      name: "Crafted",
      slot: "main_hand",
      options:
        "primal_molten_warglaive,id=190508,bonus_id=10359/1485,crafted_stats=36/32",
    },
    {
      name: "Double Time",
      slot: "main_hand",
      options: "double_time,id=207991,bonus_id=10359/1478",
    },
  ]),
);
