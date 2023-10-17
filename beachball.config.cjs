let hasRunUpdate = false;
const postbump = () =>
  import('execa').then(({ execa }) => {
    if (hasRunUpdate) {
      return;
    }
    hasRunUpdate = true;
    return execa('pnpm', ['run', 'update'], { cwd: __dirname });
  });

/**
 * @type {import('beachball').BeachballConfig}
 */
const config = {
  hooks: {
    postbump,
  },
};

module.exports = config;
