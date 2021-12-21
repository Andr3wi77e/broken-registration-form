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
  }
};
