# Build Your Own Client Portal

## Outcome

Build a static client workspace with milestones, approvals, decision log, questions, file requests, and a closeout report.

## Data model

- `milestones`: title, owner, status, due date, acceptance criteria.
- `approvals`: request, approver, state, blocker.
- `decisions`: date, decision, owner, follow-up.
- `requests`: asset or access request, urgency, status.

## Build steps

1. Create fictional sample records.
2. Render milestone and approval lanes.
3. Add a selected-detail panel.
4. Add public-safe mode that hides contact-like fields.
5. Export Markdown and JSON status reports.

## Acceptance checks

- The app works without auth, backend, or secrets.
- A client can understand the current project state within one minute.
- Exported reports contain milestones, approvals, blockers, and next actions.

## Client version path

Add private authentication, real file links, notification hooks, and branded client-facing pages in a private fork only after permissions are clear.
