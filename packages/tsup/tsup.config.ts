import { defineConfig } from 'tsup';

// eslint-disable-next-line import/no-default-export -- tsup config requires export default
export default defineConfig((overrideOptions) => ({
  entry: ['src/node.ts', 'src/onsuccess.ts'],
  splitting: false,
  sourcemap: true,
  clean: !overrideOptions.watch,
  dts: true,
  format: ['esm'],
  platform: 'node',
  target: 'node20',
}));
