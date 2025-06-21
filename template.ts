import type { FrameworkTemplate, InstallTemplateArgs } from "./types";
import { bold, cyan } from "picocolors";

import { copy } from "./helpers/copy";
import fs from "fs/promises";
import { install } from "./helpers/install";
import os from "os";
import path from "path";

/**
 * Install a Next.js internal template to a given `root` directory.
 */
export const installTemplate = async ({
  appName,
  root,
  packageManager,
  isOnline,
  template,
  skipInstall,
}: InstallTemplateArgs): Promise<boolean> => {

  console.log(bold(`Using ${packageManager}.`));

  /**
   * Copy the template files to the target directory.
   */
  console.log("\nInitializing project with template:", template);
  const templatePath = path.join(__dirname, "templates", template);
  const copySource = ["**"];

  await copy(copySource, root, {
    parents: true,
    cwd: templatePath,
    rename(name) {
      switch (name) {
        case "gitignore": {
          return `.${name}`;
        }
        case "README-template.md": {
          return "README.md";
        }
        case "package-template.json": {
          return "package.json";
        }
        default: {
          return name;
        }
      }
    },
  });

  const packageString = await fs.readFile(path.join(root, "package.json"), 'utf-8')
  const packageJson = JSON.parse(packageString)

  packageJson.name = appName

  const devDeps = Object.keys(packageJson.devDependencies).length;
  if (!devDeps) delete packageJson.devDependencies;

  await fs.writeFile(
    path.join(root, "package.json"),
    JSON.stringify(packageJson, null, 2) + os.EOL,
  );

  if (skipInstall) return true;

  console.log("\nInstalling dependencies:");
  for (const dependency in packageJson.dependencies)
    console.log(`- ${cyan(dependency)}`);

  if (devDeps) {
    console.log("\nInstalling devDependencies:");
    for (const dependency in packageJson.devDependencies)
      console.log(`- ${cyan(dependency)}`);
  }

  console.log();

  await install(packageManager, isOnline);

  return true
};

export const templates: FrameworkTemplate = {
  next: [
    {
      title: "Next.js 15 + Shadcn/UI",
      value: "next-15-shadcn",
    }
  ],
  react: [
    {
      title: "React.js + Vite + Shadcn/UI",
      value: "react-vite-shadcn",
    }
  ],
  vue: [
    {
      title: "Vue.js + Vite + Shadcn/UI",
      value: "vue-vite-shadcn",
    }
  ]
}

export * from "./types";

