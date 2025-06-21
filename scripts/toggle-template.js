const fs = require('node:fs');
const path = require('node:path');

const arg = process.argv[2];
const toTemplate = arg === 'true';
const templatesDir = path.join(process.cwd(), 'templates');

fs.readdirSync(templatesDir, { withFileTypes: true }).forEach((entry) => {
  if (!entry.isDirectory()) return;

  const dir = path.join(templatesDir, entry.name);
  const from = path.join(dir, toTemplate ? 'package.json' : 'package-template.json');
  const to = path.join(dir, toTemplate ? 'package-template.json' : 'package.json');

  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
    console.log(`Renamed: ${path.relative(process.cwd(), from)} → ${path.relative(process.cwd(), to)}`);
  }
});
