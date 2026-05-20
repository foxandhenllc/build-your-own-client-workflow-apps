# Public-Safe Build Rules

Every tutorial in this repo is designed to be useful without private data.

## Use

- Fictional customers, tickets, form submissions, invoices, and project names.
- Local JSON, CSV, or Markdown fixtures.
- Clear comments showing where a private fork would add real integrations.

## Avoid

- Real client names, screenshots, customer exports, internal URLs, secrets, API tokens, payment records, or mailbox content.
- Hidden SaaS credentials or “just paste your key here” setup paths.
- Unbounded outbound automation, scraping, spam flows, or unsafe account actions.

## Client Adaptation Pattern

1. Build the static public-safe tutorial version.
2. Replace sample data in a private fork.
3. Add authentication only when the real users and permissions are known.
4. Add integrations behind explicit approval and environment variables.
