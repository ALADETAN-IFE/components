# Contributing to the Components library

Thank you for considering contributing to the `components` library maintained in this repository.  
We welcome all kinds of contributions, including bug reports, feature requests, and code improvements.

---

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Code Contributions](#code-contributions)
- [Development Workflow](#development-workflow)
- [Branch Naming Rules](#branch-naming-rules)
- [Commit Message Rules](#commit-message-rules)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

---

## Getting Started

1. **Fork the repository.**
2. **Clone your forked repository:**
   ```sh
   git clone https://github.com/ALADETAN-IFE/components.git
   ```
3. **Navigate to the project directory:**
   ```sh
   cd components
   ```
4. **Install dependencies:**
   ```sh
   npm install
   ```
5. **Start the local server (if available):**
   ```sh
   npm run dev
   ```

Note: this repository contains UI component source files and does not include a `package.json`, build scripts, or automated tests. These files are intended to be imported into an application (for example, an existing React + TypeScript + Tailwind project).

If you want to run or preview the components locally, you have two common options:

- Add the component files to an existing app/workspace that already has a `package.json` and the required dependencies (React, TypeScript, Tailwind CSS). This is the simplest option if you already have a development project.

- Create a small local playground using a Vite React TypeScript template and copy the component files into it. Example steps:

   ```bash
   # create a playground
   npm create vite@latest components-playground -- --template react-ts
   cd components-playground
   npm install

   # copy component .tsx and style files from this repo into the playground src/ folder
   # (for example, copy button.tsx input.tsx textarea.tsx typography.tsx style.css)

   # add Tailwind CSS to the playground (follow Tailwind + Vite setup instructions)

   # run the dev server
   npm run dev
   ```

Notes:
- If you add a `package.json` or tests to this repository, please describe your changes in the PR and include any new scripts in the `package.json` so other contributors can run them.
- There are currently no automated tests in this repository. If you add tests, include instructions to run them in `CONTRIBUTING.md` and `README.md`.

---

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on [GitHub Issues](https://github.com/ALADETAN-IFE/components/issues) and include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Logs or screenshots

### Suggesting Features

If you have a feature idea, open an issue and describe:

- What the feature should do
- Why it is useful
- How you imagine it working

### Code Contributions

All code contributions should be done on your fork of the repository.

---

## Development Workflow

1. **Create a new branch for your work:**
   ```sh
   git checkout -b feat/HNG-2145-your-feature-name
   ```

---

## Branch Naming Rules

Branch names should follow this structure:

```
<prefix>/<TICKET-ID>-<description>
```

### Allowed Prefixes

- `feat/` — new feature
- `fix/` — bug fix
- `refactor/` — code restructuring
- `chore/` — routine tasks
- `docs/` — documentation changes

### Rules

- Include ticket or issue number when available (e.g., `HNG-2145`)
- Description should be lowercase and short
- If no ticket exists, omit the ticket number

### Examples

```
feat/HNG-1234-create-login-page
fix/HNG-5678-profile-update-bug
chore/remove-unused-variables
```

---

## Commit Message Rules

Commit messages follow this style:

```
type: commit message
```

Or, when including a ticket:

```
type(TICKET-ID): commit message
```

### Allowed Types

- `feat`
- `fix`
- `refactor`
- `chore`
- `docs`

### Examples

```
feat: add signup form
fix(HNG-1234): resolve login crash
refactor: simplify formData state logic
```

### Important

Use imperative tense:

- ✔️ "add login validation"
- ❌ "added login validation"
- ❌ "I added login validation"

---

## Submitting Pull Requests

1. **Make sure your branch is up to date with your remote main:**
   ```sh
   git checkout main
   git pull origin main
   git checkout <your-branch>
   git rebase main
   ```

2. **Sync your fork frequently with upstream to avoid conflicts.**

3. **Run tests before submitting:**
   ```sh
   npm test
   ```

4. **Open a pull request to the upstream repository.**

5. **In your PR description, include:**
   - What you changed
   - Why you changed it

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

Please report unacceptable behavior at:

```
email@example.com
```

---

## License

By contributing, you agree that your contributions will be licensed under the project's license (see the `LICENSE` file). This repository uses the MIT License.