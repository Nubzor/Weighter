module.exports = {
    transform: {
      "^.+\\.svelte$": "jest-transform-svelte",
      "^.+\\.js$": "babel-jest",
      ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    moduleFileExtensions: ["js", "svelte"],
    testPathIgnorePatterns: ["node_modules"],
    bail: false,
    verbose: true,
    transformIgnorePatterns: ["node_modules"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };