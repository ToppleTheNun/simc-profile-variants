import { join } from 'node:path';
import { node } from '@topplethenun/simc-profile-variants-tsup/node';
import {
  all,
  touchFile,
} from '@topplethenun/simc-profile-variants-tsup/onsuccess';
import { defineConfig } from 'tsup';

// eslint-disable-next-line import/no-default-export -- tsup config requires export default
export default defineConfig((overrideOptions) =>
  node({
    ...overrideOptions,
    entry: ['src/index.ts'],
    onSuccess: all([
      touchFile(join(__dirname, '..', 'templates', 'src', 'index.ts')),
    ]),
  }),
);
