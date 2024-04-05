module.exports = {
  '**/*.ts': [
    'npm run lint',
    'jest --verbose --bail --findRelatedTests',
  ],
};
