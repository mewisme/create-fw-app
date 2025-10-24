import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  CodeBlock,
} from '@/components/animate-ui/components/animate/code';

import { CodeTabs } from "@/components/animate-ui/components/animate/code-tabs";
import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  const packageManagers = [
    { name: "npm", command: "npx create-fw-app@latest my-app" },
    { name: "pnpm", command: "pnpm create framework-app@latest my-app" },
    { name: "yarn", command: "yarn create framework-app@latest my-app" },
    { name: "bun", command: "bun create framework-app@latest my-app" },
  ];

  const packageManagersAvailableCommands = [
    {
      name: "dev",
      commands: [
        { pm: "npm", command: "npm run dev", description: "Start development server" },
        { pm: "pnpm", command: "pnpm run dev", description: "Start development server" },
        { pm: "yarn", command: "yarn dev", description: "Start development server" },
        { pm: "bun", command: "bun dev", description: "Start development server" },
      ]
    },
    {
      name: "build",
      commands: [
        { pm: "npm", command: "npm run build", description: "Build the project" },
        { pm: "pnpm", command: "pnpm run build", description: "Build the project" },
        { pm: "yarn", command: "yarn build", description: "Build the project" },
        { pm: "bun", command: "bun run build", description: "Build the project" },
      ]
    },
    {
      name: "start",
      commands: [
        { pm: "npm", command: "npm run start", description: "Start the production server" },
        { pm: "pnpm", command: "pnpm run start", description: "Start the production server" },
        { pm: "yarn", command: "yarn start", description: "Start the production server" },
        { pm: "bun", command: "bun start", description: "Start the production server" },
      ]
    },
    {
      name: "lint",
      commands: [
        { pm: "npm", command: "npm run lint", description: "Lint the project" },
        { pm: "pnpm", command: "pnpm run lint", description: "Lint the project" },
        { pm: "yarn", command: "yarn lint", description: "Lint the project" },
        { pm: "bun", command: "bun lint", description: "Lint the project" },
      ]
    }
  ]

  const packageManagersAddCommands = [
    {
      pm: "npm",
      command: "npx shadcn@latest add [component]"
    },
    {
      pm: "pnpm",
      command: "pnpm dlx shadcn@latest add [component]"
    },
    {
      pm: "yarn",
      command: "yarn shadcn@latest add [component]"
    },
    {
      pm: "bun",
      command: "bunx --bun shadcn@latest add [component]"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto w-full max-w-6xl px-4 md:px-6 py-24">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to use FrameForge to scaffold your next project with a monochrome UI.
            </p>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Quick setup and installation guide</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Installation</h3>
                <CodeTabs
                  codes={Object.fromEntries(
                    packageManagers.map((pm) => [pm.name, pm.command])
                  )}
                  lang="bash"
                  copyButton
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Node.js 20+ or Bun</li>
                  <li>Package manager: pnpm, bun, or npm</li>
                  <li>Basic knowledge of React and Next.js</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Project Structure */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Project Structure</CardTitle>
              <CardDescription>Understanding the generated project layout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Code code=
                {`my-app/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Reusable components
│   │   └── ui/              # shadcn/ui components
│   ├── lib/                 # Utilities
│   └── styles/              # Global styles
├── public/                  # Static assets
├── components.json          # shadcn/ui config
└── package.json             # Dependencies`}>
                <CodeBlock lang="bash" />
              </Code>
              <div className="space-y-2">
                <h4 className="font-semibold">Key Directories</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><code>src/app/</code> - Next.js App Router pages and layouts</li>
                  <li><code>src/components/ui/</code> - shadcn/ui component library</li>
                  <li><code>src/lib/</code> - Utility functions and configurations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Commands */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Available Commands</CardTitle>
              <CardDescription>Development and build commands</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {packageManagersAvailableCommands.map((pm) => (
                <div key={pm.name}>
                  <h3 className="text-lg font-semibold mb-2">{pm.name.charAt(0).toUpperCase() + pm.name.slice(1)}</h3>
                  <CodeTabs
                    codes={Object.fromEntries(
                      pm.commands.map((command) => [command.pm, command.command])
                    )}
                    lang="bash"
                    copyButton
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Customization */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Customization</CardTitle>
              <CardDescription>Extending and customizing your project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Adding Components</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Use the shadcn/ui CLI to add new components:
                </p>
                <CodeTabs
                  codes={Object.fromEntries(
                    packageManagersAddCommands.map((pm) => [pm.pm, pm.command])
                  )}
                  lang="bash"
                  copyButton
                />
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Theme Customization</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The monochrome theme is configured in <code>src/styles/globals.css</code> and
                  can be customized through CSS variables.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Adding Pages</h3>
                <p className="text-sm text-muted-foreground">
                  Create new pages by adding files to the <code>src/app/</code> directory
                  following Next.js App Router conventions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Deployment */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Deployment</CardTitle>
              <CardDescription>Deploying your FrameForge project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Vercel (Recommended)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Deploy to Vercel with zero configuration:
                </p>
                <CodeTabs
                  codes={{ npm: "npx vercel", pnpm: "pnpm dlx vercel", yarn: "yarn vercel", bun: "bunx --bun vercel" }}
                  lang="bash"
                  copyButton
                />
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Other Platforms</h3>
                <p className="text-sm text-muted-foreground">
                  FrameForge projects work with any platform that supports Next.js,
                  including Netlify, Railway, and self-hosted solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
