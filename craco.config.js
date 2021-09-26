/*const path = require("path");*/
const CracoAlias = require("craco-alias");

module.exports = () => {
  return {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "tsconfig",
          baseUrl: ".",
          tsConfigPath: "./tsconfig.paths.json"
        }
      }
    ],
   /* webpack: {
      alias: {
        '@components': path.resolve(__dirname, "src/components/"),
        '@pages': path.resolve(__dirname, "src/pages/"),
        '@styledUtils': path.resolve(__dirname, "src/helpers/styledUtils"),
      },
    },*/
  }
};
