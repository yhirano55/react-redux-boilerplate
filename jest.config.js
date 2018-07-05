module.exports = {
  'setupTestFrameworkScriptFile': './setupTestFramework.js',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  'transform': {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  'modulePaths': [
    './src'
  ],
  'testMatch': [
    '**/**/*.(test|spec).+(ts|tsx|js)'
  ]
};
