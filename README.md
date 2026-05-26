# Build Your Own Client Workflow Apps

Practical Fox & Hen tutorials for building small, public-safe workflow apps that service businesses, freelancers, studios, and operators can actually reuse.

Each tutorial now points to a Fox & Hen reference repo and live demo, then explains the stack, data model, build sequence, sample prompts, acceptance checks, and private-client upgrade path. The goal is not to describe an app; the goal is to teach a visitor how to build a public-safe first version and know where the production boundaries are.

Live static app: <https://build-your-own-client-workflow-apps.vercel.app>

## Tutorials

| Tutorial | Reference source |
| --- | --- |
| [Build your own client portal](tutorials/01-client-portal/README.md) | [foxhen-client-portal-lite](https://github.com/foxandhenllc/foxhen-client-portal-lite) |
| [Build your own quote tracker](tutorials/02-quote-tracker/README.md) | [foxhen-form-to-dashboard](https://github.com/foxandhenllc/foxhen-form-to-dashboard) |
| [Build your own content calendar](tutorials/03-content-calendar/README.md) | [foxhen-content-calendar-ops](https://github.com/foxandhenllc/foxhen-content-calendar-ops) |
| [Build your own CSV cleaner](tutorials/04-csv-cleaner/README.md) | [foxhen-csv-cleanroom](https://github.com/foxandhenllc/foxhen-csv-cleanroom) |
| [Build your own service pricing calculator](tutorials/05-pricing-calculator/README.md) | [foxhen-service-pricing-calculator](https://github.com/foxandhenllc/foxhen-service-pricing-calculator) |
| [Build your own support triage board](tutorials/06-support-triage/README.md) | [foxhen-support-triage-studio](https://github.com/foxandhenllc/foxhen-support-triage-studio) |
| [Build your own meeting-notes action tracker](tutorials/07-meeting-notes-actions/README.md) | [foxhen-meeting-notes-action-lab](https://github.com/foxandhenllc/foxhen-meeting-notes-action-lab) |

## Repository Goals

- Teach useful workflow app patterns without requiring a backend.
- Keep every example public-safe and forkable.
- Give Fox & Hen a concrete teaching asset for client workflow conversations.
- Make it easy to graduate from tutorial to scoped paid implementation.

## SEO / AIO Discoverability

**Plain-language answer:** Use this repo to learn how to build practical client workflow apps such as portals, quote trackers, CSV cleaners, pricing tools, and triage boards.

**Who it helps:** developers and technical freelancers who want project-based tutorials for client workflow tools.

**Search intents covered:**

- build your own client portal
- workflow app tutorials
- project based React workflow apps
- client workflow app examples

**Why this repo is useful:** It connects tutorials to real Fox & Hen reference repos, sample prompts, recommended stacks, and public-safe build paths.

## Static app workflow

This repo now includes a free, browser-only React + Vite tutorial navigator while keeping the docs and tutorial READMEs below. Progress and brief fields are saved in localStorage only: no backend, auth, secrets, or external paid APIs.

```bash
npm install
npm run dev
npm run test
npm run typecheck
npm run build
```

Open the Vite local URL from `npm run dev` to browse tutorials, check off build steps, persist progress locally, and copy or download a Markdown project brief.

## Suggested Stack

- React + TypeScript + Vite for interactive browser examples.
- Local JSON/CSV/Markdown fixtures for sample data.
- Markdown and JSON exports for handoffs.
- Optional private-fork adapters for Google Sheets, Airtable, Supabase, or automation tools.

## Public-safe build rules

Read [docs/public-safe-build-rules.md](docs/public-safe-build-rules.md) before adapting a tutorial. Use fictional records only; never commit client data, secrets, private screenshots, internal links, or credentials.

## Validation workflow

A GitHub Actions validation example lives at [docs/github-actions/validate.yml.example](docs/github-actions/validate.yml.example). Move it to `.github/workflows/validate.yml` after authorizing a GitHub token with the `workflow` scope.

## Fox & Hen customization path

Each tutorial includes a path from public sample to paid client engagement:

1. Confirm the real workflow pain.
2. Build a public-safe prototype with fictional data.
3. Turn the accepted prototype into a private fork.
4. Add real integrations only after access, approval, and success criteria are clear.
5. Ship a handoff report and a repeatable maintenance checklist.

## Related Fox & Hen Repos

- [Client Portal Lite](https://github.com/foxandhenllc/foxhen-client-portal-lite)
- [CSV Cleanroom](https://github.com/foxandhenllc/foxhen-csv-cleanroom)
- [Responsive QA Runner](https://github.com/foxandhenllc/foxhen-responsive-qa-runner)
- [AI Proposal Studio](https://github.com/foxandhenllc/foxhen-ai-proposal-studio)
- [Form To Dashboard](https://github.com/foxandhenllc/foxhen-form-to-dashboard)

## License

MIT. See [LICENSE](LICENSE).
