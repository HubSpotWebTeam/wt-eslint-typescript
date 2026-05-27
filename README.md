> [!WARNING]
> **⚠️ This package is deprecated.** TypeScript ESLint support is now built into [`@hs-web-team/eslint-config-node`](https://www.npmjs.com/package/@hs-web-team/eslint-config-node) for both Node.js and browser/React projects. Please migrate — see the [migration guide](#migrating-to-eslint-config-node) below.

---

# Hubspot Marketing WebTeam ESLint rules for TypeScript

This is a list of TypeScript rules that are recommended for use with Hubspot Marketing WebTeam projects.

https://www.npmjs.com/package/@hs-web-team/eslint-config-ts

<!-- index-start -->
## Index

- [Introduction](#introduction)
- [Setup](#setup)
- [Migrating from an exisiting .eslint config](#migrating-from-an-existing-eslint-config)
- [Where to use it](#where-to-use-it)
- [Migrating to eslint-config-node](#migrating-to-eslint-config-node)
<!-- index-end -->

## Introduction

This is a set of ESLint rules that are recommended for use with Hubspot Marketing WebTeam projects, and can be used in conjunction with the **[browser](https://www.npmjs.com/package/@hs-web-team/eslint-config-browser)** or **[node](https://www.npmjs.com/package/@hs-web-team/eslint-config-node)** linting packages.

Note that this package will only apply rules to TypeScript files (`.ts` and `.tsx`). It will not apply rules to JavaScript files (`.js` and `.jsx`). You must use the **[browser](https://www.npmjs.com/package/@hs-web-team/eslint-config-browser)** or **[node](https://www.npmjs.com/package/@hs-web-team/eslint-config-node)** linting packages to use ESLint rules for vanilla JavaScript files.

## Setup

1. Install as dev dependency

```sh
npm i -D @hs-web-team/eslint-config-ts
```

2. Add to `.eslintrc` in project root directory

```json
{
  "extends": "@hs-web-team/eslint-config-ts"
}
```

or when used with the browser/node rules:

```json
{
  "extends": [
    "@hs-web-team/eslint-config-browser", // or "@hs-web-team/eslint-config-node"
    "@hs-web-team/eslint-config-ts"
  ],
}
```

## Migrating from an existing .eslint config

1. Remove `node_modules`
2. Delete `package-lock.json`
3. `npm install`
4. Re open your vscode/editor workspace
5. Check if `ts` linting is working


## References

[Shareable ESLint Configs Reference](https://eslint.org/docs/developer-guide/shareable-configs)

## Where to use it

This package is intended to be used in projects that use TypeScript, in conjunction with either the Node or Browser linting packages.

---

## Migrating to eslint-config-node

TypeScript ESLint support is now built directly into [`@hs-web-team/eslint-config-node`](https://www.npmjs.com/package/@hs-web-team/eslint-config-node) — you no longer need a separate TypeScript config package.

> **Note:** If your project also uses `@hs-web-team/eslint-config-browser`, that package is also deprecated. The replacement is the `/browser` export from `@hs-web-team/eslint-config-node`.

Follow these steps to migrate, or see [MIGRATION-V3.md](https://github.com/HubSpotWebTeam/wt-eslint-node/blob/main/docs/MIGRATION-V3.md) for the full guide:

### For Node.js projects

```sh
npm uninstall @hs-web-team/eslint-config-ts
npm install -D @hs-web-team/eslint-config-node@latest
```

```js
// eslint.config.mjs
import wtConfig from '@hs-web-team/eslint-config-node';

export default [
  ...wtConfig,
];
```

### For browser/React projects

```sh
npm uninstall @hs-web-team/eslint-config-browser @hs-web-team/eslint-config-ts
npm install -D @hs-web-team/eslint-config-node@latest
```

```js
// eslint.config.mjs
import wtBrowserConfig from '@hs-web-team/eslint-config-node/browser';

export default [
  ...wtBrowserConfig,
];
```

See the [wt-eslint-node README](https://github.com/HubSpotWebTeam/wt-eslint-node) for full setup instructions.
