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
yarn create fw-app@latest
# or
pnpm create fw-app@latest
# or
bun create fw-app@latest
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
| Next.js    | Next.js 15 + ShadCN/UI, Next.js 16 + ShadCN/UI |
| React.js   | React.js + Vite + ShadCN/UI |
| Vue.js     | Vue.js + Vite + ShadCN/UI |

### 🎨 Next.js Templates

- **Next.js 15 + ShadCN/UI**: Complete template with 50+ UI components, modern React 19, and latest Next.js features
- **Next.js 16 + ShadCN/UI**: Latest Next.js 16 with cutting-edge features and comprehensive UI component library

### ⚛️ React Templates

- **React.js + Vite + ShadCN/UI**: Fast development with Vite, TypeScript, and comprehensive UI components

### 🟢 Vue Templates

- **Vue.js + Vite + ShadCN/UI**: Modern Vue 3 with Vite, TypeScript, and beautiful UI components

> More templates are coming soon!

---

## ✨ Features

- 🚀 **Quick Setup**: Get started in seconds with pre-configured templates
- 🎨 **Modern UI**: Comprehensive ShadCN/UI component library with 50+ components
- 📱 **Responsive Design**: Built-in responsive layouts and mobile-first approach
- 🌙 **Dark Mode**: Automatic dark/light theme switching
- ⚡ **Performance**: Optimized for speed with latest framework features
- 🔧 **Developer Experience**: ESLint, Prettier, and TypeScript configured out of the box
- 📦 **Package Management**: Support for npm, yarn, pnpm, and bun

---

## 📁 Project Structure

After setup, your project will look like this (example with Next.js + ShadCN/UI):

```
my-app/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ... (50+ components)
│   └── hooks/
├── .gitignore
├── components.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📄 License

[MIT](LICENSE) © [mewisme](https://github.com/mewisme)

---
