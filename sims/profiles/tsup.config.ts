import { node } from '@topplethenun/simc-profile-variants-tsup/node';
import { defineConfig } from 'tsup';

export default defineConfig((overrideOptions) =>
  node({
    ...overrideOptions,
    entry: ['src/index.ts'],
  }),
);
