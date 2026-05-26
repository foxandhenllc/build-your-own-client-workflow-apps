# Build Your Own Client Portal

Reference implementation: [foxhen-client-portal-lite](https://github.com/foxandhenllc/foxhen-client-portal-lite)  
Live demo: <https://foxhen-client-portal-lite.vercel.app/>

## Outcome

A static client workspace that makes project state obvious: milestones, approvals, decisions, questions, file requests, blockers, and a closeout report. The public version uses fictional data only and does not need auth, a database, or file storage.

## Recommended Stack

- React + TypeScript + Vite for a static app.
- Local TypeScript fixtures in `src/data`.
- Reusable components for milestone lanes, approval cards, decision logs, and request tables.
- Markdown + JSON exporters for status reports.

## Data model

- `milestones`: title, owner, status, due date, acceptance criteria.
- `approvals`: request, approver, state, blocker.
- `decisions`: date, decision, owner, follow-up.
- `requests`: asset or access request, urgency, status.

## Build steps

1. Write the client questions the app must answer: what is done, what needs approval, what is blocked, and what happens next.
2. Create fictional records for `milestones`, `approvals`, `decisions`, and `requests`.
3. Render a summary strip with active milestone, blocked approvals, open questions, and closeout readiness.
4. Build milestone and approval lanes before adding any decorative UI.
5. Add a selected-detail panel so clicking a card shows acceptance criteria, owner, blocker, and next action.
6. Add a public-safe mode that hides email-like fields, links, and contact names.
7. Export a Markdown report and JSON snapshot with milestones, approvals, blockers, decisions, and next actions.

## Sample Prompts

- “Turn this fictional website project into milestones, approvals, blockers, and client questions. Keep all names and links fake.”
- “Review this client portal data model. What would a non-technical client need to understand in the first 60 seconds?”
- “Draft a Markdown project status report from these fictional milestones and approvals. Separate decisions, blockers, and next actions.”

## Acceptance checks

- The app works without auth, backend, secrets, or real files.
- A client can understand current project state within one minute.
- Exported reports contain milestones, approvals, blockers, decisions, and next actions.

## Client Version Path

Move real files, private links, account names, notifications, and authentication into a private fork only after access and approval are clear.
