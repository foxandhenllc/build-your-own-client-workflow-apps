# Build Your Own Content Calendar

Reference implementation: [foxhen-content-calendar-ops](https://github.com/foxandhenllc/foxhen-content-calendar-ops)  
Live demo: <https://foxhen-content-calendar-ops.vercel.app/>

## Outcome

A publishing planner that separates ideas from scheduled posts, tracks ownership and approvals, and exports a clean schedule for small teams.

## Recommended Stack

- React + TypeScript + Vite for the planning workspace.
- Local fixtures for ideas, posts, asset status, owners, platforms, and approvals.
- Filtered views for owner, platform, week, and blocker state.
- CSV schedule export and Markdown publishing brief export.

## Data model

- `ideas`: topic, audience, hook, source, priority.
- `posts`: platform, caption, CTA, asset status, publish date.
- `approvals`: reviewer, state, notes.

## Build steps

1. Create fictional idea records with topic, audience, hook, CTA, source, and priority.
2. Convert selected ideas into scheduled posts with platform, owner, asset status, approval state, and publish date.
3. Render weekly buckets so users can see what ships next.
4. Add blocker surfacing for missing assets, missing CTA, and pending approval.
5. Add filters for platform, owner, and readiness.
6. Export a spreadsheet-friendly schedule and a Markdown publishing brief.

## Sample Prompts

- “Create a two-week fictional content calendar for a local service business with owners, CTAs, and approval states.”
- “Audit this content calendar for missing assets, weak CTAs, unclear owners, and approval blockers.”
- “Turn these content ideas into scheduled posts with hooks, captions, CTAs, and review notes.”

## Acceptance checks

- Users can see what publishes next and what is blocked.
- Every scheduled post has owner, platform, CTA, asset status, and approval state.
- Exported schedule is spreadsheet-friendly.

## Client Version Path

Add private asset links, social account workflows, and scheduling integrations only after permissions and publishing approvals are explicit.
