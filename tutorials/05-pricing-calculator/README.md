# Build Your Own Service Pricing Calculator

Reference implementation: [foxhen-service-pricing-calculator](https://github.com/foxandhenllc/foxhen-service-pricing-calculator)  
Live demo: <https://foxhen-service-pricing-calculator.vercel.app/>

## Outcome

A transparent quote calculator for service packages, add-ons, rush fees, complexity modifiers, assumptions, exclusions, and a Markdown quote summary.

## Recommended Stack

- React + TypeScript + Vite for the calculator.
- Local fixtures for packages, add-ons, modifiers, and rules.
- Pure calculation functions with tests.
- Markdown export for quote summaries.

## Data model

- `packages`: name, base price, included deliverables.
- `addons`: label, price, compatibility notes.
- `constraints`: timeline, complexity, approval requirements.

## Build steps

1. Define service packages with included deliverables, base prices, and delivery ranges.
2. Add compatible add-ons and explain what each add-on changes.
3. Add rush and complexity modifiers as visible line items.
4. Calculate subtotal, modifiers, total, and estimated delivery range.
5. Generate assumptions, exclusions, and next-step copy from the selected options.
6. Export a Markdown quote summary that can be reviewed before sending.

## Sample Prompts

- “Create three fictional service packages with deliverables, base prices, timeline ranges, and exclusions.”
- “Given these add-ons and urgency, calculate a transparent quote summary with assumptions.”
- “Audit this pricing calculator for hidden fees, confusing labels, and scope-creep risks.”

## Acceptance checks

- Pricing logic is visible and understandable.
- Rush and complexity modifiers are clearly separated.
- Quote export includes assumptions and exclusions.

## Client Version Path

Replace sample packages with real services and connect quote capture only after pricing, review, and approval rules are agreed.
