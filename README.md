# 🚀 Create App with Framework Variants

[![version](https://img.shields.io/npm/v/create-fw-app?style=flat)](https://www.npmjs.org/package/create-fw-app)  
![Build status](https://img.shields.io/github/actions/workflow/status/mewisme/create-fw-app/.github%2Fworkflows%2Fpublish.yaml?branch=main)  
[![downloads](https://img.shields.io/npm/dm/create-fw-app.svg?style=flat)](https://npm-stat.com/charts.html?package=create-fw-app)

The easiest way to get started with your favorite web framework is by using **create-fw-app**.  
This CLI tool lets you scaffold a new application with everything set up for you — using prebuilt templates for frameworks like Next.js, React.js, Vue.js, and more.

---

## 🧭 Quick Start

To get started, use the following command:

### Interactive Mode

```bash
npx create-fw-app@latest
# or
yarn create fw-app
# or
pnpm create fw-app
# or
bun create fw-app
```

You'll be prompted to choose:
- A framework (e.g., Next.js, Vue, etc.)
- A variant (e.g., TypeScript, Tailwind, etc.)
- The project name and directory

---

## 📦 Supported Frameworks

Currently supported frameworks and variants include:

| Framework  | Variants                         |
|------------|----------------------------------|
| Next.js    | TypeScript, Tailwind CSS, ShadCN/UI |
| React.js   | TypeScript, Tailwind CSS, ShadCN/UI |
| Vue.js     | TypeScript, Tailwind CSS, ShadCN/UI |

> More templates are coming soon!

---

## 📁 Project Structure

After setup, your project will look like this (example with Next.js + TypeScript):

```
my-app/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── styles/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📄 License

[MIT](LICENSE) © [mewisme](https://github.com/mewisme)

---
