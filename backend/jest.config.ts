export default {
  modulePathIgnorePatterns: ["dist"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./setTestEnvVars.js'],
};
