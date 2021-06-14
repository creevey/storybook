// eslint-disable-next-line no-underscore-dangle
process.env.__CREEVEY_STORYBOOK_FRAMEWORK__ = 'react';
// eslint-disable-next-line no-underscore-dangle
process.env.__CREEVEY_STORYBOOK_VERSION__ = require('./package.json').version;

/** @type {import("creevey").CreeveyConfig } */
module.exports = {
  storybookDir: process.cwd(),
};
