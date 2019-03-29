// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: false,
  reporters: ["default"],
  // globals: {},
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  moduleNameMapper: {},
  testEnvironment: "node",
  testMatch: [  
    "<rootDir>/**/__tests__/**/*.(js|jsx|ts|tsx)",
    "<rootDir>/**/?(*.)+(spec|test).(js|jsx|ts|tsx)"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
};