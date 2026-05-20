import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = new URL('..', import.meta.url);
const readme = readFileSync(new URL('README.md', root), 'utf8');
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
  'Public-safe build rules',
];

const missing = required.filter((term) => !readme.includes(term));
if (tutorials.length < 7) {
  console.error(`Expected at least 7 tutorial directories, found ${tutorials.length}.`);
  process.exit(1);
}

if (missing.length > 0) {
  console.error(`Missing required README sections: ${missing.join(', ')}`);
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

console.log(`Validated ${tutorials.length} tutorial outlines.`);
