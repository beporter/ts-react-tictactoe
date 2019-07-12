const { defaults } = require('jest-config');

module.exports = {...defaults,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>/build/",
    "<rootDir>/spec/",
    "<rootDir>/node_modules/",
    "src/index.tsx"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "coverageReporters": [
    "text"
  ],
  "setupFiles": [
    "react-app-polyfill/jsdom",
    "<rootDir>/spec/setupTests.tsx"
  ],
  "setupFilesAfterEnv": [
    "jest-enzyme"
  ],
  "testMatch": [
    "<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "testEnvironment": "enzyme",
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [],
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
