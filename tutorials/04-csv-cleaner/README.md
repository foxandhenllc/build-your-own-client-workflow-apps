# Build Your Own CSV Cleaner

## Outcome

Build a browser CSV cleaner with parsing, validation, duplicate detection, issue summary, cleaned preview, and export.

## Data model

- `rows`: parsed CSV rows.
- `profile`: required columns and validation rules.
- `issues`: row, column, severity, message, suggested fix.

## Build steps

1. Parse pasted or uploaded CSV text.
2. Validate emails, URLs, dates, phones, and required columns.
3. Detect duplicate keys.
4. Apply safe cleanup transforms.
5. Export cleaned CSV and JSON issue report.

## Acceptance checks

- Bad rows remain visible instead of silently disappearing.
- Cleaned export preserves source columns unless renamed intentionally.
- Issue report explains each change.

## Client version path

Add private import profiles and custom validation rules for a real business process.
