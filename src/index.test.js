const postcss = require('postcss')
const tailwindcss = require('tailwindcss')
const progress = require('./index.js')
const path = require("path");


describe('progress', () => {

  const expectedOutput = `
    .progress-bar\\:bg-black ::-webkit-progress-bar {
      --tw-bg-opacity: 1;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity))
    }
    .progress-bar\\:bg-black  {
      --tw-bg-opacity: 1;
      background-color: rgb(0 0 0 / var(--tw-bg-opacity))
    }
    .progress-value\\:bg-white::-webkit-progress-value {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity))
    }
    .progress-value\\:bg-white::-moz-progress-bar {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity))
    }
`;

  it('generates the expected class', async () => {
    willRunTailwindCss().then((css) => {
      expect(css).toContainCss(expectedOutput)
    });
  })
});


const willRunTailwindCss = () => {
  const {currentTestName, testPath} = expect.getState();
  return postcss(tailwindcss({
    // disabling everything but our plugin;
    corePlugins: {preflight: false},
    plugins: [progress],
    // making it thru tailwind tree shaking:
    content: [{raw: String.raw`<progess class="progress-bar:bg-black progress-value:bg-white"></progess>`}],
  })).process(['@tailwind base', '@tailwind components', '@tailwind utilities'].join(';\n'), {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
    .then((result) => result.css)
}

expect.extend({
  toContainCss: (received, argument) => {
    const stripped = str => str.replace(/[;\s]/g, '');
    if (stripped(received).includes(stripped(argument))) {
      return {
        message: () => `expected CSS not to contain CSS: ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected CSS \n\n-***********\n${received}\n\n-***********\n to contain CSS: ${argument}`,
        pass: false,
      };
    }
  },
})
