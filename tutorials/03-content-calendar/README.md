# Build Your Own Content Calendar

## Outcome

Build a publishing planner with ideas, assignments, platform-specific captions, approvals, and schedule export.

## Data model

- `ideas`: topic, audience, hook, source, priority.
- `posts`: platform, caption, CTA, asset status, publish date.
- `approvals`: reviewer, state, notes.

## Build steps

1. Create a fictional content queue.
2. Add filters for platform, owner, and approval state.
3. Render weekly calendar buckets.
4. Add approval and asset-readiness checks.
5. Export CSV and Markdown publishing briefs.

## Acceptance checks

- Users can see what publishes next and what is blocked.
- Every scheduled post has an owner, platform, CTA, and approval state.
- Exported schedule is spreadsheet-friendly.

## Client version path

Add private asset links, social account workflow, and scheduling integrations only after approval.
