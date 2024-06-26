import {
  encounterTypes,
  type EncounterType,
  generators,
  type Generator,
} from "@topplethenun/simc-profile-variants-generators";
import { type Profile } from "@topplethenun/simc-profile-variants-profiles";
import fastCartesian from "fast-cartesian";
import { type Draft, produce } from "immer";

export interface ConfigMatrix {
  encounterTypes: EncounterType[];
  generators: Generator[];
}
export interface ConfigMatrixItem {
  encounterType: EncounterType;
  generator: Generator;
  profile: Profile;
}
export interface Config {
  profile: Profile;
  matrix: ConfigMatrix;
}

const createDefaultConfigForProfile = (profile: Profile): Config => ({
  profile,
  matrix: {
    encounterTypes: [...encounterTypes],
    generators,
  },
});

/* eslint-disable camelcase -- Disabling because this needs to match simc. */
export const DF4_Demon_Hunter_Vengeance: Config = createDefaultConfigForProfile(
  "DF4_Demon_Hunter_Vengeance",
);
export const DF4_Demon_Hunter_Vengeance_no_crafted: Config =
  createDefaultConfigForProfile("DF4_Demon_Hunter_Vengeance_no_crafted");
/* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */

export type ConfigMapping = Record<Profile, Config>;
export const defaultConfigMapping: ConfigMapping = {
  /* eslint-disable camelcase -- Disabling because this needs to match simc. */
  DF4_Demon_Hunter_Vengeance,
  DF4_Demon_Hunter_Vengeance_no_crafted,
  /* eslint-enable camelcase -- Enabling because the rest does not need to match simc. */
};
export const getDefaultConfig = (profile: Profile): Config =>
  defaultConfigMapping[profile];

type ConfigProducerReturningConfig = (draft: Draft<Config>) => Config;
type ConfigProducerReturningVoid = (draft: Draft<Config>) => void;
export type ConfigProducer =
  | ConfigProducerReturningConfig
  | ConfigProducerReturningVoid;
export const getModifiedConfig = (
  config: Config,
  producer: ConfigProducer,
): Config => produce(config, producer);

type ConfigMappingProducerReturningConfig = (
  draft: Draft<ConfigMapping>,
) => ConfigMapping;
type ConfigMappingProducerReturningVoid = (draft: Draft<ConfigMapping>) => void;
export type ConfigMappingProducer =
  | ConfigMappingProducerReturningConfig
  | ConfigMappingProducerReturningVoid;
export const getModifiedConfigMapping = (
  config: ConfigMapping,
  producer: ConfigMappingProducer,
): ConfigMapping => produce(config, producer);

const toConfigMatrixItem = ([profile, encounterType, generator]: [
  Profile,
  EncounterType,
  Generator,
]): ConfigMatrixItem => ({ encounterType, generator, profile });
export const getMatrix = (config: Config): ConfigMatrixItem[] => {
  const profiles = [config.profile];
  const matrixEncounterTypes = config.matrix.encounterTypes;
  const matrixGenerators = config.matrix.generators;
  return fastCartesian([profiles, matrixEncounterTypes, matrixGenerators]).map(
    toConfigMatrixItem,
  );
};
