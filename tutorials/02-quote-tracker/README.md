# Build Your Own Quote Tracker

Reference implementation: [foxhen-form-to-dashboard](https://github.com/foxandhenllc/foxhen-form-to-dashboard)  
Live demo: <https://foxhen-form-to-dashboard.vercel.app/>

## Outcome

A lightweight request-to-quote workspace that turns form submissions into scope bands, missing-information checks, follow-up states, and buyer-ready quote summaries.

## Recommended Stack

- React + TypeScript + Vite for the browser UI.
- Local JSON fixtures for request rows, scoring rules, and pipeline stages.
- Pure functions for clarity, urgency, fit, and payment-path scoring.
- CSV export for CRM import and Markdown export for quote summaries.

## Data model

- `requests`: buyer type, service need, budget range, urgency, missing info.
- `scopeBands`: starter, standard, rush, custom.
- `followUps`: owner, due date, channel, message summary.

## Build steps

1. Define the minimum safe quoting fields: service need, deadline, budget range, decision maker, missing info, and preferred contact path.
2. Seed fictional quote requests with a mix of clear, risky, incomplete, and rush jobs.
3. Score each row for clarity, urgency, fit, and payment path.
4. Render pipeline stages: new, needs info, scoped, quoted, won, declined.
5. Generate assumptions, exclusions, and next questions before displaying price ranges.
6. Add exports for CRM-style CSV and a client-friendly Markdown quote summary.

## Sample Prompts

- “Create five fictional quote requests for a small service business. Include budget, urgency, missing information, and fit risks.”
- “Given this quote request, identify assumptions, exclusions, next questions, and a safe price range.”
- “Turn this quote tracker state into a buyer-friendly summary without overpromising timeline or scope.”

## Acceptance checks

- Every quote has assumptions, exclusions, and a next action.
- Missing information is visible before quoting.
- Exported rows use fictional data only.

## Client Version Path

Connect to a real form, CRM, or email intake only in a private fork, and require human approval before any outbound follow-up.
