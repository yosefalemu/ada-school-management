const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    (filenames) => `prettier --write ${filenames.join(' ')}`,
    buildEslintCommand,
  ],
  '*.{css,scss,md}': [(filenames) => `prettier --write ${filenames.join(' ')}`],
};
