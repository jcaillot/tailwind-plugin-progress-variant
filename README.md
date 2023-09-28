# jcaillot/tailwind-plugin-progress-variant

A Tailwind plugin for adding a progress bar variant

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

Standard progress:

## Basic usage

```HTML
<progress 
  max="100" 
  value="40"
  aria-label="completion"
  class="
      progress-bar:bg-red-500
      progress-value:bg-red-200
      progress-value:rounded-r
    "
>40%</progress>
```

## How to run test

```shell
jest --coverage
```

## Licence

This project is licensed under the [MIT License](./LICENSE).

## Authors

- [@jcaillot](http://chaman.ca)
