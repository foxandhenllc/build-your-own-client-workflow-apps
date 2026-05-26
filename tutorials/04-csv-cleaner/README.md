# Build Your Own CSV Cleaner

Reference implementation: [foxhen-csv-cleanroom](https://github.com/foxandhenllc/foxhen-csv-cleanroom)  
Live demo: <https://foxhen-csv-cleanroom.vercel.app/>

## Outcome

A browser and CLI CSV cleaner that parses local files, validates fields, detects duplicates, previews safe fixes, and exports cleaned rows plus an auditable issue report.

## Recommended Stack

- React + TypeScript + Vite for the browser tool.
- A shared parser/cleaner module used by UI and Node CLI.
- Fixture CSV files for smoke tests.
- Exporters for cleaned CSV, JSON issue reports, and Markdown handoffs.

## Data model

- `rows`: parsed CSV rows.
- `profile`: required columns, duplicate keys, exported columns, and validation rules.
- `issues`: row, column, severity, message, suggested fix.

## Build steps

1. Start with parsing only: paste CSV text, detect headers, and render raw rows.
2. Define validation profiles for email list, CRM contacts, and URL inventory.
3. Add required-column checks before row-level validation.
4. Validate email, URL, date, phone, and duplicate-key fields.
5. Apply safe transforms such as trimming whitespace, lowercasing email, normalizing dates, and adding URL schemes.
6. Keep invalid rows visible in the issue report instead of silently dropping them.
7. Export cleaned CSV and JSON/Markdown issue reports.
8. Add a CLI command that runs the same cleaner against a local CSV fixture.

## Sample Prompts

- “Design a CSV validation profile for an email import with required columns, duplicate keys, and safe transforms.”
- “Review this dirty CSV sample. Identify validation errors and what a safe cleaned export should change.”
- “Draft one-sentence UI copy that explains local-only CSV processing without sounding like marketing fluff.”

## Acceptance checks

- Bad rows remain visible in the issue report.
- Cleaned export preserves source columns unless intentionally changed by the selected profile.
- Browser and CLI outputs agree for the same fixture.

## Client Version Path

Add private import profiles, account-specific validation rules, and system-specific exports only in a private fork.
