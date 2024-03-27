import fastCartesian from "fast-cartesian";

export type Slot =
  | "head"
  | "neck"
  | "shoulder"
  | "shoulders"
  | "back"
  | "chest"
  | "wrist"
  | "wrists"
  | "hand"
  | "hands"
  | "waist"
  | "leg"
  | "legs"
  | "feet"
  | "finger1"
  | "finger2"
  | "trinket1"
  | "trinket2"
  | "main_hand"
  | "off_hand";

export interface Gear {
  name: string;
  slot: Slot;
  options: string;
  uniqueId?: number | string;
}
export interface GearPair {
  slot1: Gear;
  slot2: Gear;
}

export const areNotSameUnique = (gearPair: GearPair): boolean => {
  if (!gearPair.slot1.uniqueId && !gearPair.slot2.uniqueId) {
    return true;
  }
  if (!gearPair.slot1.uniqueId && gearPair.slot2.uniqueId) {
    return true;
  }
  if (gearPair.slot1.uniqueId && !gearPair.slot2.uniqueId) {
    return true;
  }
  return gearPair.slot1.uniqueId !== gearPair.slot2.uniqueId;
};

const areNotSameSlot = (gearPair: GearPair): boolean =>
  gearPair.slot1.slot !== gearPair.slot2.slot;

const getGearPairName = (gearPair: GearPair): string =>
  [gearPair.slot1.name, gearPair.slot2.name].toSorted().join(":");

const isNotDuplicate =
  (includeDuplicates: boolean) =>
  (gearPair: GearPair, idx: number, equipment: GearPair[]): boolean => {
    if (includeDuplicates) {
      return true;
    }
    const stringifiedName = getGearPairName(gearPair);
    const stringifiedEquipment = equipment.map(getGearPairName);
    return stringifiedEquipment.indexOf(stringifiedName) === idx;
  };

const enforceSlot1 = (slot: Slot): Slot => {
  switch (slot) {
    case "finger2":
      return "finger1";
    case "trinket2":
      return "trinket1";
    case "off_hand":
      return "main_hand";
    default:
      return slot;
  }
};

const enforceSlot2 = (slot: Slot): Slot => {
  switch (slot) {
    case "finger1":
      return "finger2";
    case "trinket1":
      return "trinket2";
    case "main_hand":
      return "off_hand";
    default:
      return slot;
  }
};

const makeGearSlot1 = (gear: Gear): Gear => ({
  ...gear,
  slot: enforceSlot1(gear.slot),
});

const makeGearSlot2 = (gear: Gear): Gear => ({
  ...gear,
  slot: enforceSlot2(gear.slot),
});

export const pairedGearCombinations = (
  equipment: Gear[],
  includeDuplicatePairs = false,
): GearPair[] => {
  return fastCartesian([equipment, equipment])
    .map<GearPair>(([slot1, slot2]) => ({
      slot1: makeGearSlot1(slot1),
      slot2: makeGearSlot2(slot2),
    }))
    .filter(areNotSameSlot)
    .filter(areNotSameUnique)
    .filter(isNotDuplicate(includeDuplicatePairs));
};

const stringifySlot1 = (gear: Gear): string =>
  `${gear.slot}=${gear.options}`
    .replace("trinket2", "trinket1")
    .replace("finger2", "finger1")
    .replace("off_hand", "main_hand");
const stringifySlot2 = (gear: Gear): string =>
  `${gear.slot}=${gear.options}`
    .replace("trinket1", "trinket2")
    .replace("finger1", "finger2")
    .replace("main_hand", "off_hand");

export const stringifyGearPair = (gearPair: GearPair): string => {
  const profilesetName = [gearPair.slot1.name, gearPair.slot2.name].join(" / ");
  const slot1 = stringifySlot1(gearPair.slot1);
  const slot2 = stringifySlot2(gearPair.slot2);
  return [
    `profileset."${profilesetName}"+=${slot1}`,
    `profileset."${profilesetName}"+=${slot2}`,
  ].join("\n");
};

export const stringifyGearCombinations = (gearPairs: GearPair[]): string =>
  gearPairs.map(stringifyGearPair).join("\n\n");

export const stringifiedPairedGearCombinations = (equipment: Gear[]): string =>
  stringifyGearCombinations(pairedGearCombinations(equipment));
