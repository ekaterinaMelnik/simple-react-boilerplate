const path = require('path');

const MAIN = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src/'),
  dist: path.resolve(__dirname, '../dist/')
};

const ALIASES = {
  config: path.resolve(__dirname, ''),
  actions: path.resolve(__dirname, '../src/actions/'),
  reducers: path.resolve(__dirname, '../src/reducers/'),
  components: path.resolve(__dirname, '../src/components/'),
  images: path.resolve(__dirname, '../src/images/'),
  constants: path.resolve(__dirname, '../src/constants/'),
  fonts: path.resolve(__dirname, '../src/fonts/'),

  // features
  App: path.resolve(__dirname, '../src/components/App')
};

module.exports = {
  paths: {
    ...MAIN,
    ...ALIASES
  },
  aliases: ALIASES
};
