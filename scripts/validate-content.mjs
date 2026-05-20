import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url);
const readme = readFileSync(new URL('README.md', root), 'utf8');
const packageJson = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
const tutorialsDir = path.join(root.pathname, 'tutorials');
const tutorials = readdirSync(tutorialsDir).filter((entry) =>
  statSync(path.join(tutorialsDir, entry)).isDirectory()
);

const required = [
  'Build your own client portal',
  'Build your own quote tracker',
  'Build your own content calendar',
  'Build your own CSV cleaner',
  'Build your own service pricing calculator',
  'Build your own support triage board',
  'Build your own meeting-notes action tracker',
  'Static app workflow',
  'npm run dev',
  'npm run build',
  'Public-safe build rules',
];
const requiredScripts = ['dev', 'build', 'typecheck', 'test', 'validate'];
const appFiles = ['index.html', 'src/App.tsx', 'src/data/tutorials.ts', 'src/lib/progress.ts'];

const missing = required.filter((term) => !readme.includes(term));
if (tutorials.length < 7) {
  console.error(`Expected at least 7 tutorial directories, found ${tutorials.length}.`);
  process.exit(1);
}

if (missing.length > 0) {
  console.error(`Missing required README sections: ${missing.join(', ')}`);
  process.exit(1);
}

const missingScripts = requiredScripts.filter((script) => !packageJson.scripts?.[script]);
if (missingScripts.length > 0) {
  console.error(`Missing required package scripts: ${missingScripts.join(', ')}`);
  process.exit(1);
}

const missingAppFiles = appFiles.filter((file) => !existsSync(new URL(file, root)));
if (missingAppFiles.length > 0) {
  console.error(`Missing static app files: ${missingAppFiles.join(', ')}`);
  process.exit(1);
}

for (const tutorial of tutorials) {
  const tutorialReadme = path.join(tutorialsDir, tutorial, 'README.md');
  const body = readFileSync(tutorialReadme, 'utf8');
  for (const term of ['Outcome', 'Data model', 'Build steps', 'Acceptance checks']) {
    if (!body.includes(term)) {
      console.error(`${tutorial}/README.md missing ${term}`);
      process.exit(1);
    }
  }
}

console.log(
  `Validated ${tutorials.length} tutorial outlines, ${requiredScripts.length} scripts, and ${appFiles.length} app files.`
);
