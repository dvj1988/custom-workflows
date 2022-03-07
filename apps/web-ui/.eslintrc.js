const baseConfig = require("config/eslint/react");

module.exports = {
  ...baseConfig,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: `${__dirname}/tsconfig.json`,
      },
    },
  },
};
