// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
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
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|scss|sass|less)$": "<rootDir>/test/__mocks__/objectMock.js",
  },
  testEnvironment: "node",
  testMatch: [  
    "<rootDir>/**/__tests__/**/*.(js|jsx",
    "<rootDir>/**/?(*.)+(spec|test).(js|jsx)"
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