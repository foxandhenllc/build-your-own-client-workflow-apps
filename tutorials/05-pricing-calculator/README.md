# Build Your Own Service Pricing Calculator

## Outcome

Build an embeddable service quote calculator with packages, add-ons, rush fees, maintenance options, and a client-friendly summary.

## Data model

- `packages`: name, base price, included deliverables.
- `addons`: label, price, compatibility notes.
- `constraints`: timeline, complexity, approval requirements.

## Build steps

1. Define package and add-on fixtures.
2. Build a selectable quote form.
3. Calculate totals and delivery range.
4. Generate assumptions, exclusions, and next-step copy.
5. Export a Markdown quote summary.

## Acceptance checks

- Pricing logic is transparent.
- Rush and complexity modifiers are visible.
- Quote summary includes assumptions and exclusions.

## Client version path

Replace sample packages with real services, connect quote requests to a CRM, and add approval before sending.
