<div align="center">
<h1 style="color: #06b6d4">Z-Indexify</h1>

[![NPM][npm-badge]][npm]
[![Build Status][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
[![Bundle Size][bundle-size-badge]][bundle-size]
[![Known Vulnerabilities][snyk-badge]][snyk]
[![CodeFactor][codefactor-badge]][codefactor]
[![OpenSSF Scorecard][openssf-badge]][openssf]
[![MIT License][license-badge]][license]


<p>A sane way to manage CSS z-indexes across application</p>

Works with [Styled Components](https://styled-components.com) and [TailwindCSS](https://tailwindcss.com/)

<hr />
</div>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)

## Install

```bash
# NPM
npm install --save z-indexify

# Yarn
yarn add z-indexify
```

## Usage
### With Styled Components

```js
// In your theme.ts used on ThemeProvider
import { zIndexify } from 'z-indexify';

const zIndex = zIndexify(['header', 'overlay', 'sidebar']);
const theme = {
  // others...
  zIndex,
};

// And on Styled
const Header = styled.header`
  z-index: ${({ theme }) => theme.zIndex.header}; /** z-index: 100; */
`;
```

### With TailwindCSS

```js
// In your tailwind.config.ts
import type { Config } from 'tailwindcss';
import { zIndexify } from 'z-indexify';

const zIndex = zIndexify(['header', 'overlay', 'sidebar'], {
  minIndex: 500,
});

const config: Config = {
  content: [...],
  theme: {
    extend: {
      // ...your configs
      zIndex,
    }
  },
};

export default config;
```

![image](/assets/intellisense.gif)

## API

- ### zIndexify(labels[, options]])

  - **labels**
    - Type: `array`
    - Name of your z-indexes _in asc order_.
    - To change order values, simple reorder the array values. e.g.:
      ```js
      ['foo', 'bar', 'baz'] //=> foo: 100, bar: 101, baz: 102
      ['bar', 'baz', 'foo'] //=> bar: 100, baz: 101, foo: 103
      ```
  - **options**
    - Type: `object`
    - Configuration options if you need

- ### options
  Param | Type | Description | Default | e.g.
  :--- | :--- | :--- | :--- | :---
  `minIndex`| `number` | Index starts of | `100` |  `{ minIndex: 300 }`  starts with: `z-index: 300`
  `inverse` | `boolean` | Invert array values order | `false` | `['foo', 'bar']` will produce: `{ foo: 101, bar: 100 } `
  `step` | `number` | The gap between number | `1` | `{ step: 10 }` creates: `{ 100, 110, 120, 130, ... }`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- GIT Variables -->
[node]: https://nodejs.org

[npm]: https://www.npmjs.com/package/z-indexify
[npm-badge]: https://img.shields.io/npm/v/z-indexify.svg

[build]: https://dl.circleci.com/status-badge/redirect/circleci/6tzhy4jF6JhkiZf8qsueZH/4JS5VCPifDN7KwCHmauWWR/tree/main
[build-badge]: https://dl.circleci.com/status-badge/img/circleci/6tzhy4jF6JhkiZf8qsueZH/4JS5VCPifDN7KwCHmauWWR/tree/main.svg?style=shield

[codecov]: https://codecov.io/gh/Zeindelf/z-indexify
[codecov-badge]: https://codecov.io/gh/Zeindelf/z-indexify/graph/badge.svg?token=XVB2P9OQ9L

[bundle-size]: https://bundlephobia.com/result?p=z-indexify
[bundle-size-badge]: https://badgen.net/bundlephobia/minzip/z-indexify

[snyk]: https://snyk.io/test/npm/z-indexify
[snyk-badge]: https://snyk.io/test/npm/z-indexify/badge.svg

[codefactor]: https://www.codefactor.io/repository/github/zeindelf/z-indexify
[codefactor-badge]: https://www.codefactor.io/repository/github/zeindelf/z-indexify/badge

[openssf]: https://securityscorecards.dev/viewer/?uri=github.com/zeindelf/z-indexify
[openssf-badge]: https://api.securityscorecards.dev/projects/github.com/zeindelf/z-indexify/badge

[license]: https://github.com/zeindelf/z-indexify/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/z-indexify.svg?style=flat-square