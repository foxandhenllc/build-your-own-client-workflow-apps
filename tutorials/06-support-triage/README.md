# Build Your Own Support Triage Board

Reference implementation: [foxhen-support-triage-studio](https://github.com/foxandhenllc/foxhen-support-triage-studio)  
Live demo: <https://foxhen-support-triage-studio.vercel.app/>

## Outcome

A support triage board that groups tickets into themes, scores urgency, separates customer responses from technical fixes, and exports a fix queue.

## Recommended Stack

- React + TypeScript + Vite for the board.
- Local ticket fixtures and deterministic scoring rules.
- Editable response drafts and fix cards.
- Markdown export for support summary and engineering queue.

## Data model

- `tickets`: subject, customer type, channel, severity, status.
- `clusters`: theme, count, owner, recommended action.
- `responses`: tone, next step, escalation path.

## Build steps

1. Seed fictional support tickets with channel, severity, customer type, deadline, workaround, and status.
2. Score urgency with impact, repetition, deadline, and workaround availability.
3. Cluster tickets by operational theme.
4. Render separate lanes for urgent customer response, technical fix, waiting on customer, and monitor.
5. Draft response summaries, but keep them review-only.
6. Export a triage report with top risks, response needs, and fix cards.

## Sample Prompts

- “Create eight fictional support tickets for a website launch with severity, customer type, deadline, and status.”
- “Cluster these tickets into themes and recommend what should be fixed first.”
- “Draft a polite customer response and a separate internal engineering fix card for this ticket.”

## Acceptance checks

- Highest-risk issues are easy to identify.
- Customer communication is separated from technical fixes.
- No real customer data appears in fixtures or exports.

## Client Version Path

Connect helpdesk exports, inbox triage, or project tracker sync only in a private fork with explicit access approval.
