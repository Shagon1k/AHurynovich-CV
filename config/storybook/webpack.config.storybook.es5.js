// As we need to use ES6 modules, Babel Register usage here is required to transform ES6 -> ES5
require('@babel/register'); // eslint-disable-line no-undef

module.exports = require('../webpack/storybook/webpack.config.storybook').default; // eslint-disable-line no-undef
