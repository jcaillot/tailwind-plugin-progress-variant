const plugin = require('tailwindcss/plugin')

const progress = plugin(function ({addVariant, e}) {
  addVariant('progress-bar', ['&::-webkit-progress-bar', '&']);
  addVariant('progress-value', ['&::-webkit-progress-value', '&::-moz-progress-bar']);
});

module.exports = progress
