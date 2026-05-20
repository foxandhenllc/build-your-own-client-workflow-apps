# Build Your Own Meeting-Notes Action Tracker

## Outcome

Build a meeting-notes parser that extracts decisions, owners, blockers, deadlines, and a follow-up email draft from pasted notes.

## Data model

- `notes`: raw fictional transcript or bullet notes.
- `actions`: owner, task, deadline, blocker, status.
- `decisions`: decision, rationale, date.
- `followUp`: audience, subject, body.

## Build steps

1. Paste fictional meeting notes.
2. Extract candidate decisions and actions with rule-based patterns.
3. Let users edit owner, due date, and status.
4. Generate a follow-up email and action register.
5. Export Markdown and JSON.

## Acceptance checks

- Users can correct extracted actions before export.
- Every action has an owner or an explicit owner-needed flag.
- Follow-up copy is readable without exposing private notes.

## Client version path

Add private AI extraction, calendar integration, and project tool sync only after the public workflow is validated.
