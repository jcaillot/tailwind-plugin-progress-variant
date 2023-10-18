# jcaillot/tailwind-plugin-progress-variant

A TailwindCSS plugin for adding a progress bar variant

![Static Badge](https://img.shields.io/badge/TailwindCSS-plugin-blue)

![GitHub](https://img.shields.io/github/license/jcaillot/tailwind-plugin-progress-variant)

## Installation

Install the plugin from npm:

  ```shell
npm install -D tailwind-plugin-progress-variant
```

or

```shell
yarn add -D tailwind-plugin-progress-variant
```

Then add the plugin to your tailwind.config.js file:

```JavaScript

// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-plugin-progress-variant'),
    // ...
  ],
}

```

## Examples

Default HTML progress in Chrome:

![default](img/chrome.png)

After Tailwind CSS reset:

![reset](img/tailwindcss-reset.png)

After adding custom TW classes using progress variant:

![style](img/styles.png)

## Basic usage

```HTML

<progress
  max="100"
  value="40"
  aria-label="completion"
  class="
            w-1/2
            h-[32px]
            
            progress-bar:bg-amber-100
            progress-bar:rounded-r-full
            progress-bar:shadow-inner

            progress-value:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
            progress-value:rounded-r-full
    "
>40%
</progress>
```

Note: Text placed between the element's tags is not an accessible label, it is
only recommended as a fallback for old browsers that do not support this
element.

## How to run test

```shell
jest --coverage
```

## Licence

This project is licensed under the [MIT License](./LICENSE).

## Authors

- [@jcaillot](http://chaman.ca)
