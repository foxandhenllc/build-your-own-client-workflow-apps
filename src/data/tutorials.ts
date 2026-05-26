export interface ChecklistItem {
  id: string;
  label: string;
  phase: 'Plan' | 'Build' | 'Verify' | 'Export';
}

export interface Tutorial {
  id: string;
  slug: string;
  sourceRepo: string;
  liveDemo: string;
  title: string;
  shortTitle: string;
  outcome: string;
  bestFor: string;
  duration: string;
  difficulty: 'Starter' | 'Intermediate';
  recommendedStack: string[];
  buildGuidance: string[];
  samplePrompts: string[];
  dataModel: string[];
  checklist: ChecklistItem[];
  acceptanceChecks: string[];
  exportFormats: string[];
  clientVersionPath: string;
}

export const tutorials: Tutorial[] = [
  {
    id: 'client-portal',
    slug: 'tutorials/01-client-portal/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-client-portal-lite',
    liveDemo: 'https://foxhen-client-portal-lite.vercel.app/',
    title: 'Build your own client portal',
    shortTitle: 'Client portal',
    outcome:
      'Static client workspace with milestones, approvals, decision log, questions, file requests, and closeout report.',
    bestFor: 'Freelancers, studios, consultants',
    duration: '2–3 focused sessions',
    difficulty: 'Starter',
    recommendedStack: [
      'React + TypeScript + Vite for a static, forkable UI.',
      'Local TypeScript fixtures for milestones, approvals, decisions, and requests.',
      'Markdown and JSON exporters for handoff reports.',
      'Optional private adapters later: auth, Drive links, Slack/email notifications.',
    ],
    buildGuidance: [
      'Start by writing the exact questions a client asks during delivery: what is done, what needs approval, what is blocked, and what is next.',
      'Model each question as visible UI state before adding visual polish.',
      'Keep the public version static and fictional; add real files, accounts, and private messages only in a private fork.',
      'Treat the export as the product: the report should make the current project state obvious without requiring a login.',
    ],
    samplePrompts: [
      'Turn this service project into fictional milestones, approvals, blockers, and client questions. Keep all names and links fake.',
      'Review this client portal UI plan. What information would a non-technical client need in the first 60 seconds?',
      'Draft a Markdown status report from these fictional milestones and approvals. Separate next actions, blockers, and decisions.',
    ],
    dataModel: [
      'milestones: title, owner, status, due date, acceptance criteria',
      'approvals: request, approver, state, blocker',
      'decisions: date, decision, owner, follow-up',
      'requests: asset or access request, urgency, status',
    ],
    checklist: [
      { id: 'client-portal-fixtures', label: 'Create fictional sample records.', phase: 'Plan' },
      { id: 'client-portal-lanes', label: 'Render milestone and approval lanes.', phase: 'Build' },
      { id: 'client-portal-detail', label: 'Add a selected-detail panel.', phase: 'Build' },
      { id: 'client-portal-public-safe', label: 'Hide contact-like fields in public-safe mode.', phase: 'Verify' },
      { id: 'client-portal-export', label: 'Export Markdown and JSON status reports.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Works without auth, backend, or secrets.',
      'Client can understand current project state within one minute.',
      'Exports include milestones, approvals, blockers, and next actions.',
    ],
    exportFormats: ['Markdown status report', 'JSON status snapshot'],
    clientVersionPath:
      'Add private authentication, real file links, notification hooks, and branded pages in a private fork.',
  },
  {
    id: 'quote-tracker',
    slug: 'tutorials/02-quote-tracker/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-form-to-dashboard',
    liveDemo: 'https://foxhen-form-to-dashboard.vercel.app/',
    title: 'Build your own quote tracker',
    shortTitle: 'Quote tracker',
    outcome:
      'Lightweight quote-request tracker for scope bands, follow-up states, and buyer-ready quote summaries.',
    bestFor: 'Service businesses and sales ops',
    duration: '2 focused sessions',
    difficulty: 'Starter',
    recommendedStack: [
      'React + TypeScript + Vite for the tracker UI.',
      'Local JSON fixtures for quote requests, score rules, and pipeline stages.',
      'CSV export for CRM import and Markdown export for quote summaries.',
      'Optional private adapters later: form webhook, CRM row sync, quote approval queue.',
    ],
    buildGuidance: [
      'Define the minimum information needed before a quote is safe to send.',
      'Score quote requests for clarity, urgency, fit, and payment path before showing price ranges.',
      'Make missing information more prominent than the final price; this prevents weak proposals.',
      'Export assumptions and exclusions so the buyer understands scope boundaries.',
    ],
    samplePrompts: [
      'Create five fictional quote requests for a small service business. Include budget, urgency, missing information, and fit risks.',
      'Given this quote request, identify assumptions, exclusions, next questions, and a safe price range.',
      'Turn this quote tracker state into a client-friendly Markdown quote summary without overpromising.',
    ],
    dataModel: [
      'requests: buyer type, service need, budget range, urgency, missing info',
      'scopeBands: starter, standard, rush, custom',
      'followUps: owner, due date, channel, message summary',
    ],
    checklist: [
      { id: 'quote-tracker-fixtures', label: 'Seed fictional quote requests.', phase: 'Plan' },
      { id: 'quote-tracker-score', label: 'Score clarity, urgency, fit, and payment path.', phase: 'Build' },
      { id: 'quote-tracker-pipeline', label: 'Show new, needs-info, quoted, won, and declined stages.', phase: 'Build' },
      { id: 'quote-tracker-summary', label: 'Generate assumptions and exclusions for each quote.', phase: 'Verify' },
      { id: 'quote-tracker-export', label: 'Export CSV for CRM import.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Every quote has assumptions, exclusions, and next action.',
      'Missing information is visible before quoting.',
      'Export includes only fictional data.',
    ],
    exportFormats: ['CSV quote pipeline', 'Markdown quote summary'],
    clientVersionPath: 'Connect to a real form or CRM in a private fork and add approval before outbound follow-up.',
  },
  {
    id: 'content-calendar',
    slug: 'tutorials/03-content-calendar/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-content-calendar-ops',
    liveDemo: 'https://foxhen-content-calendar-ops.vercel.app/',
    title: 'Build your own content calendar',
    shortTitle: 'Content calendar',
    outcome: 'Publishing planner with ideas, assignments, captions, approvals, and schedule export.',
    bestFor: 'Marketing teams and local businesses',
    duration: '2–3 focused sessions',
    difficulty: 'Starter',
    recommendedStack: [
      'React + TypeScript + Vite for the calendar workspace.',
      'Local fixtures for ideas, posts, approval state, and platform constraints.',
      'CSV export for schedule handoff and Markdown export for publishing briefs.',
      'Optional private adapters later: asset storage, social scheduler, approval notifications.',
    ],
    buildGuidance: [
      'Separate raw ideas from scheduled posts so the calendar does not become a dumping ground.',
      'Track owner, platform, asset status, CTA, and approval state for every scheduled item.',
      'Surface blocked posts at the top; a calendar that hides blockers is not operationally useful.',
      'Use export formats a small business can actually use: CSV for a spreadsheet and Markdown for review.',
    ],
    samplePrompts: [
      'Create a fictional two-week content calendar for a local service business with platform, owner, CTA, and approval state.',
      'Audit this content calendar for missing assets, weak CTAs, unclear owners, and approval blockers.',
      'Turn these content ideas into scheduled posts with hooks, captions, CTAs, and review notes.',
    ],
    dataModel: [
      'ideas: topic, audience, hook, source, priority',
      'posts: platform, caption, CTA, asset status, publish date',
      'approvals: reviewer, state, notes',
    ],
    checklist: [
      { id: 'content-calendar-queue', label: 'Create a fictional content queue.', phase: 'Plan' },
      { id: 'content-calendar-filters', label: 'Add platform, owner, and approval filters.', phase: 'Build' },
      { id: 'content-calendar-week', label: 'Render weekly calendar buckets.', phase: 'Build' },
      { id: 'content-calendar-readiness', label: 'Check approvals and asset readiness.', phase: 'Verify' },
      { id: 'content-calendar-export', label: 'Export CSV and Markdown publishing briefs.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Users can see what publishes next and what is blocked.',
      'Every scheduled post has owner, platform, CTA, and approval state.',
      'Exported schedule is spreadsheet-friendly.',
    ],
    exportFormats: ['CSV schedule', 'Markdown publishing brief'],
    clientVersionPath: 'Add private asset links, social account workflow, and scheduling integrations after approval.',
  },
  {
    id: 'csv-cleaner',
    slug: 'tutorials/04-csv-cleaner/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-csv-cleanroom',
    liveDemo: 'https://foxhen-csv-cleanroom.vercel.app/',
    title: 'Build your own CSV cleaner',
    shortTitle: 'CSV cleaner',
    outcome: 'Browser CSV cleaner with parsing, validation, duplicate detection, issue summary, and cleaned export.',
    bestFor: 'Data cleanup and import prep',
    duration: '3 focused sessions',
    difficulty: 'Intermediate',
    recommendedStack: [
      'React + TypeScript + Vite for the browser app.',
      'Small local parser/cleaner module shared by UI and CLI.',
      'Fixture CSV files for tests and smoke checks.',
      'Node CLI for local files: parse, validate, clean, report.',
    ],
    buildGuidance: [
      'Start with transparent validation before cleanup; users need to trust what changed.',
      'Keep bad rows visible in the issue report instead of silently dropping them.',
      'Separate profiles from parser logic so the same tool can clean email lists, CRM exports, or URL inventories.',
      'Export cleaned CSV plus JSON/Markdown reports so the cleanup is auditable.',
    ],
    samplePrompts: [
      'Design a CSV validation profile for an email import with required columns, duplicate keys, and safe transforms.',
      'Review this dirty CSV sample. Identify likely validation errors and what a safe cleaned export should change.',
      'Draft user-facing copy for a CSV cleaner that explains local-only processing in one sentence.',
    ],
    dataModel: [
      'rows: parsed CSV rows',
      'profile: required columns and validation rules',
      'issues: row, column, severity, message, suggested fix',
    ],
    checklist: [
      { id: 'csv-cleaner-parse', label: 'Parse pasted or uploaded CSV text.', phase: 'Build' },
      { id: 'csv-cleaner-validate', label: 'Validate emails, URLs, dates, phones, and required columns.', phase: 'Build' },
      { id: 'csv-cleaner-duplicates', label: 'Detect duplicate keys.', phase: 'Build' },
      { id: 'csv-cleaner-transforms', label: 'Apply safe cleanup transforms.', phase: 'Verify' },
      { id: 'csv-cleaner-export', label: 'Export cleaned CSV and JSON issue report.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Bad rows remain visible instead of silently disappearing.',
      'Cleaned export preserves source columns unless renamed intentionally.',
      'Issue report explains each change.',
    ],
    exportFormats: ['Cleaned CSV', 'JSON issue report'],
    clientVersionPath: 'Add private import profiles and custom validation rules for a real business process.',
  },
  {
    id: 'pricing-calculator',
    slug: 'tutorials/05-pricing-calculator/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-service-pricing-calculator',
    liveDemo: 'https://foxhen-service-pricing-calculator.vercel.app/',
    title: 'Build your own service pricing calculator',
    shortTitle: 'Pricing calculator',
    outcome: 'Embeddable service quote calculator with packages, add-ons, rush fees, and client-friendly summary.',
    bestFor: 'Freelancers and agencies',
    duration: '2 focused sessions',
    difficulty: 'Starter',
    recommendedStack: [
      'React + TypeScript + Vite for the calculator.',
      'Local pricing fixtures for packages, add-ons, and complexity rules.',
      'Pure calculation functions with unit tests.',
      'Markdown export for quote summaries and scope assumptions.',
    ],
    buildGuidance: [
      'Make the pricing formula visible enough that buyers understand what changed the quote.',
      'Separate package selection, add-ons, rush fees, and complexity modifiers.',
      'Generate assumptions and exclusions automatically so the quote is not just a number.',
      'Keep contact capture optional in the public demo; add lead capture only in a private client version.',
    ],
    samplePrompts: [
      'Create three fictional service packages with deliverables, base prices, timeline ranges, and exclusions.',
      'Given these selected add-ons and urgency, calculate a transparent quote summary with assumptions.',
      'Audit this pricing calculator for hidden fees, confusing labels, and scope-creep risks.',
    ],
    dataModel: [
      'packages: name, base price, included deliverables',
      'addons: label, price, compatibility notes',
      'constraints: timeline, complexity, approval requirements',
    ],
    checklist: [
      { id: 'pricing-calculator-fixtures', label: 'Define package and add-on fixtures.', phase: 'Plan' },
      { id: 'pricing-calculator-form', label: 'Build a selectable quote form.', phase: 'Build' },
      { id: 'pricing-calculator-totals', label: 'Calculate totals and delivery range.', phase: 'Build' },
      { id: 'pricing-calculator-copy', label: 'Generate assumptions, exclusions, and next-step copy.', phase: 'Verify' },
      { id: 'pricing-calculator-export', label: 'Export a Markdown quote summary.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Pricing logic is transparent.',
      'Rush and complexity modifiers are visible.',
      'Quote summary includes assumptions and exclusions.',
    ],
    exportFormats: ['Markdown quote summary'],
    clientVersionPath: 'Replace sample packages with real services, connect quote requests to CRM, and add approval before sending.',
  },
  {
    id: 'support-triage',
    slug: 'tutorials/06-support-triage/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-support-triage-studio',
    liveDemo: 'https://foxhen-support-triage-studio.vercel.app/',
    title: 'Build your own support triage board',
    shortTitle: 'Support triage',
    outcome: 'Support triage tool that clusters issues, scores urgency, drafts responses, and prepares a fix queue.',
    bestFor: 'Customer support and web QA',
    duration: '3 focused sessions',
    difficulty: 'Intermediate',
    recommendedStack: [
      'React + TypeScript + Vite for the triage board.',
      'Local ticket fixtures and deterministic scoring rules.',
      'Markdown export for support summaries and fix queues.',
      'Optional private adapters later: helpdesk CSV imports, inbox labeling, project tracker sync.',
    ],
    buildGuidance: [
      'Split customer communication from technical fix work; each needs different language and ownership.',
      'Score urgency using impact, repetition, deadline, and workaround availability.',
      'Cluster tickets into operational themes so the team can fix root causes instead of chasing symptoms.',
      'Keep response drafts review-only; do not auto-send from the public tool.',
    ],
    samplePrompts: [
      'Create eight fictional support tickets for a website launch with severity, customer type, deadline, and status.',
      'Cluster these tickets into themes and recommend which issue should be fixed first.',
      'Draft a polite support response and a separate internal engineering fix card for this ticket.',
    ],
    dataModel: [
      'tickets: subject, customer type, channel, severity, status',
      'clusters: theme, count, owner, recommended action',
      'responses: tone, next step, escalation path',
    ],
    checklist: [
      { id: 'support-triage-tickets', label: 'Seed fictional tickets.', phase: 'Plan' },
      { id: 'support-triage-urgency', label: 'Score urgency by impact, repetition, and deadline.', phase: 'Build' },
      { id: 'support-triage-clusters', label: 'Group tickets into operational themes.', phase: 'Build' },
      { id: 'support-triage-responses', label: 'Draft response summaries and fix cards.', phase: 'Verify' },
      { id: 'support-triage-export', label: 'Export a triage report.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Highest-risk issues are easy to identify.',
      'Report separates customer communication from technical fixes.',
      'No real customer data appears in fixtures.',
    ],
    exportFormats: ['Markdown triage report', 'Fix queue snapshot'],
    clientVersionPath: 'Connect to helpdesk exports or inbox triage only in a private fork with explicit access approval.',
  },
  {
    id: 'meeting-notes-actions',
    slug: 'tutorials/07-meeting-notes-actions/README.md',
    sourceRepo: 'https://github.com/foxandhenllc/foxhen-meeting-notes-action-lab',
    liveDemo: 'https://foxhen-meeting-notes-action-lab.vercel.app/',
    title: 'Build your own meeting-notes action tracker',
    shortTitle: 'Meeting actions',
    outcome: 'Meeting-notes parser that extracts decisions, owners, blockers, deadlines, and follow-up email draft.',
    bestFor: 'Operators and PMs',
    duration: '2–3 focused sessions',
    difficulty: 'Intermediate',
    recommendedStack: [
      'React + TypeScript + Vite for the notes workspace.',
      'Rule-based extraction first, with fictional meeting-note fixtures.',
      'Editable action register before export.',
      'Optional private adapters later: AI extraction, calendar sync, project-management sync.',
    ],
    buildGuidance: [
      'Build the manual correction flow before adding AI; extracted actions are not useful if users cannot fix them.',
      'Require every action to have an owner, deadline, or explicit “needs owner” flag.',
      'Keep decisions separate from tasks so the follow-up email is readable.',
      'Export both Markdown for humans and JSON for downstream workflow tools.',
    ],
    samplePrompts: [
      'Create fictional meeting notes with decisions, action items, blockers, vague owners, and follow-up needs.',
      'Extract actions from these notes. Mark uncertain owners and dates instead of guessing.',
      'Draft a concise follow-up email from these decisions and actions, with separate owner-needed flags.',
    ],
    dataModel: [
      'notes: raw fictional transcript or bullet notes',
      'actions: owner, task, deadline, blocker, status',
      'decisions: decision, rationale, date',
      'followUp: audience, subject, body',
    ],
    checklist: [
      { id: 'meeting-notes-sample', label: 'Paste fictional meeting notes.', phase: 'Plan' },
      { id: 'meeting-notes-extract', label: 'Extract candidate decisions and actions with rule-based patterns.', phase: 'Build' },
      { id: 'meeting-notes-edit', label: 'Let users edit owner, due date, and status.', phase: 'Build' },
      { id: 'meeting-notes-email', label: 'Generate a follow-up email and action register.', phase: 'Verify' },
      { id: 'meeting-notes-export', label: 'Export Markdown and JSON.', phase: 'Export' },
    ],
    acceptanceChecks: [
      'Users can correct extracted actions before export.',
      'Every action has an owner or explicit owner-needed flag.',
      'Follow-up copy is readable without exposing private notes.',
    ],
    exportFormats: ['Markdown follow-up', 'JSON action register'],
    clientVersionPath: 'Add private AI extraction, calendar integration, and project tool sync only after validation.',
  },
];
