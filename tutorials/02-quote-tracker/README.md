# Build Your Own Quote Tracker

## Outcome

Build a lightweight quote-request tracker that turns incoming project requests into scope bands, follow-up states, and a buyer-ready quote summary.

## Data model

- `requests`: buyer type, service need, budget range, urgency, missing info.
- `scopeBands`: starter, standard, rush, custom.
- `followUps`: owner, due date, channel, message summary.

## Build steps

1. Seed fictional quote requests.
2. Score each request by clarity, urgency, fit, and payment path.
3. Show a pipeline of new, needs-info, quoted, won, and declined.
4. Generate a quote summary with assumptions and exclusions.
5. Export CSV for CRM import.

## Acceptance checks

- Every quote has clear assumptions, exclusions, and next action.
- Missing information is visible before quoting.
- The export includes only fictional data.

## Client version path

Connect to a real form or CRM in a private fork and add approval before any outbound follow-up.
