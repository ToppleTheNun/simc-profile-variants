import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { node } from '@topplethenun/simc-profile-variants-tsup/node';
import {
  all,
  touchFile,
} from '@topplethenun/simc-profile-variants-tsup/onsuccess';
import { defineConfig } from 'tsup';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line import/no-default-export -- tsup config requires export default
export default defineConfig((overrideOptions) =>
  node({
    ...overrideOptions,
    entry: ['src/index.ts'],
    onSuccess: all([
      touchFile(join(__dirname, '..', 'generators', 'src', 'index.ts')),
    ]),
  }),
);
