import { type Profile, getProfile } from '@topplethenun/simc-profile-variants-sims-profiles';
import { isPresent } from '@topplethenun/simc-profile-variants-sims-utils';
import {
  type EncounterType,
  encounterTypes,
  isEncounterType,
  header,
} from './headers';
import { profilesets as profilesetsEmbellishments } from './profilesets/embellishments';
import { profilesets as profilesetsRings } from './profilesets/rings';
import { profilesets as profilesetsTrinkets } from './profilesets/trinkets';
import { profilesets as profilesetsWeapons } from './profilesets/weapons';

export interface GenerateDataParams {
  profile: Profile;
  encounterType: EncounterType;
  profileOverride?: (profile: string) => string;
}
export interface GeneratedData {
  header: string;

  actor: string;

  profilesets: string;
}
export type GenerateFn = (params: GenerateDataParams) => GeneratedData;
export type GenerateAsStringFn = (params: GenerateDataParams) => string;

export const generatorNames = [
  'embellishments',
  'rings',
  'trinkets',
  'weapons',
] as const;
export type GeneratorName = (typeof generatorNames)[number];
export const isGeneratorName = (s: unknown): s is GeneratorName =>
  isPresent(s) &&
  typeof s === 'string' &&
  generatorNames.includes(s as GeneratorName);

export interface Generator {
  name: GeneratorName;
  generate: GenerateFn;
  generateAsString: GenerateAsStringFn;
}

const generateData =
  (profilesets: string): GenerateFn =>
  ({ profile, encounterType, profileOverride }) => {
    const baseActor = getProfile(profile);
    const actor = profileOverride?.(baseActor) ?? baseActor;

    return {
      header: header(encounterType),
      actor,
      profilesets,
    };
  };

const stringifyGeneratedData =
  (fn: GenerateFn) =>
  (params: GenerateDataParams): string => {
    const data = fn(params);
    return [data.header, data.actor, data.profilesets].join('\n\n');
  };

export const embellishmentsFn = generateData(profilesetsEmbellishments);

export const embellishmentsAsStringFn =
  stringifyGeneratedData(embellishmentsFn);
export const embellishments: Generator = {
  name: 'embellishments',
  generate: embellishmentsFn,
  generateAsString: embellishmentsAsStringFn,
};

export const ringsFn = generateData(profilesetsRings);
export const ringsAsStringFn = stringifyGeneratedData(ringsFn);
export const rings: Generator = {
  name: 'rings',
  generate: ringsFn,
  generateAsString: ringsAsStringFn,
};

export const trinketsFn = generateData(profilesetsTrinkets);
export const trinketsAsStringFn = stringifyGeneratedData(trinketsFn);
export const trinkets: Generator = {
  name: 'trinkets',
  generate: trinketsFn,
  generateAsString: trinketsAsStringFn,
};

export const weaponsFn = generateData(profilesetsWeapons);
export const weaponsAsStringFn = stringifyGeneratedData(weaponsFn);
export const weapons: Generator = {
  name: 'weapons',
  generate: weaponsFn,
  generateAsString: weaponsAsStringFn,
};

const generatorMapping: Record<GeneratorName, Generator> = {
  embellishments,
  rings,
  trinkets,
  weapons,
};
export const generators = Object.values(generatorMapping);
export const getGeneratorByName = (name: GeneratorName): Generator =>
  generatorMapping[name];

export { type EncounterType, encounterTypes, isEncounterType };
