# codeql-caller-demo

A demo repository that gets **full CodeQL code scanning with zero local policy**. Every setting
(query suites, path exclusions, query filters) is owned centrally in
**[`callmegreg-demo-org/codeql-central-config`](https://github.com/callmegreg-demo-org/codeql-central-config)**.

## What's here

- [`.github/workflows/codeql.yml`](.github/workflows/codeql.yml) — the *entire* integration. It just
  calls the central reusable workflow:
  ```yaml
  jobs:
    codeql:
      uses: callmegreg-demo-org/codeql-central-config/.github/workflows/codeql-reusable.yml@main
      with:
        language: javascript-typescript
      secrets: inherit
  ```
- [`src/app.js`](src/app.js) — a tiny app with one **intentional** vulnerability (`eval` of request
  input) so the scan produces a real alert.

## Run it

Go to the **Actions** tab → **CodeQL** → **Run workflow**, or push a commit. Results appear under
**Security → Code scanning**.

## Setup / prerequisites

This repo is **private**, so it relies on a few org/repo settings documented in the central repo:
Actions reuse access, the **`CODEQL_CONFIG_APP_CLIENT_ID` / `CODEQL_CONFIG_APP_PRIVATE_KEY`** org secrets
(from a minimal-permission GitHub App), and GitHub Advanced Security. See
**[codeql-central-config → Required configuration](https://github.com/callmegreg-demo-org/codeql-central-config#required-configuration-️)**.
