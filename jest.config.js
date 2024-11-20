export default {
  verbose: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.m?js$': 'babel-jest'  // Ensuring it captures both .js and .mjs files
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'mjs']
};