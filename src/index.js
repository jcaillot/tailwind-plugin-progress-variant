const plugin = require('tailwindcss/plugin')

const progress = plugin(function ({addVariant, e}) {
  addVariant('progress-bar', ['&::-webkit-progress-bar', '&']);
  addVariant('progress-bar', ['&::-webkit-progress-bar', '&']);
  addVariant('progress-inner', ['&::-webkit-progress-inner-element']);
});

module.exports = progress
