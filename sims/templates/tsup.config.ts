import { node } from '@topplethenun/simc-profile-variants-tsup/node';
import { defineConfig } from 'tsup';

// eslint-disable-next-line import/no-default-export -- tsup config requires export default
export default defineConfig((overrideOptions) =>
  node({ ...overrideOptions, entry: ['src/index.ts'], dts: { resolve: true } }),
);
