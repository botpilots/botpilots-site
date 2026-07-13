# BotPilots website

React + TypeScript + Vite site for [botpilots.com](https://botpilots.com).

## Development

```bash
npm install
npm run dev
npm run build
```

## Releases

Releases are driven by `version` in `package.json`. GitHub Actions creates a tag and
GitHub release when that version lands on `master` and no release exists yet.

### Recommended: release via PR

1. Bump `version` in `package.json` and run `npm install` to sync the lockfile.
2. Open and merge a PR to `master`.
3. CI reads `package.json`, creates `vX.Y.Z`, and publishes the release with a build
   artifact.

Do **not** push release tags from a feature branch before merge. Tag pushes trigger the
release workflow immediately, before the commit is on `master`.

### Direct release on `master` (no PR)

From a clean `master` checkout:

```bash
npm run release:patch   # 1.0.0 -> 1.0.1
npm run release:minor   # 1.0.0 -> 1.1.0
npm run release:major   # 1.0.0 -> 2.0.0
```

Each command bumps `package.json`, commits, pushes `master`, and lets CI create the tag
and release.

### Fallback: push tag manually

If CI missed a release but `package.json` on `master` already has the right version:

```bash
npm run release:tag
```

This pushes `v<package.json version>` and triggers the release workflow.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
