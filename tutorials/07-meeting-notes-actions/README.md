# Build Your Own Meeting-Notes Action Tracker

Reference implementation: [foxhen-meeting-notes-action-lab](https://github.com/foxandhenllc/foxhen-meeting-notes-action-lab)  
Live demo: <https://foxhen-meeting-notes-action-lab.vercel.app/>

## Outcome

A notes-to-actions workspace that extracts decisions, owners, blockers, due dates, and follow-up copy from fictional meeting notes, then lets users correct everything before export.

## Recommended Stack

- React + TypeScript + Vite for the workspace.
- Rule-based extraction before AI.
- Editable action register for owner, due date, blocker, and status.
- Markdown and JSON exports for follow-up and workflow handoff.

## Data model

- `notes`: raw fictional transcript or bullet notes.
- `actions`: owner, task, deadline, blocker, status.
- `decisions`: decision, rationale, date.
- `followUp`: audience, subject, body.

## Build steps

1. Paste fictional meeting notes with decisions, vague owners, deadlines, blockers, and follow-up needs.
2. Extract candidate action items with rule-based patterns.
3. Extract decisions separately from tasks.
4. Let users edit owner, due date, status, and uncertainty flags.
5. Generate a follow-up email from confirmed decisions and actions.
6. Export Markdown for humans and JSON for downstream workflow tools.

## Sample Prompts

- “Create fictional meeting notes with decisions, action items, blockers, vague owners, and follow-up needs.”
- “Extract actions from these notes. Mark uncertain owners and dates instead of guessing.”
- “Draft a concise follow-up email from these decisions and actions with separate owner-needed flags.”

## Acceptance checks

- Users can correct extracted actions before export.
- Every action has an owner, due date, or explicit uncertainty flag.
- Follow-up copy is readable without exposing private notes.

## Client Version Path

Add AI extraction, calendar sync, and project-management sync only after the manual correction workflow is validated.
