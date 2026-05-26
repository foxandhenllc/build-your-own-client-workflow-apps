import type { Tutorial } from '../data/tutorials';

export type ProgressState = Record<string, string[]>;

export interface ProgressSummary {
  totalSteps: number;
  completedSteps: number;
  percentComplete: number;
  completedTutorialIds: string[];
}

export interface ProjectBriefFields {
  projectName: string;
  businessType: string;
  workflowPain: string;
  currentTools: string;
  successCriteria: string;
}

export function summarizeProgress(tutorials: Tutorial[], progress: ProgressState): ProgressSummary {
  const totalSteps = tutorials.reduce((total, tutorial) => total + tutorial.checklist.length, 0);
  const completedSteps = tutorials.reduce((total, tutorial) => {
    const validIds = new Set(tutorial.checklist.map((item) => item.id));
    const completedForTutorial = new Set(progress[tutorial.id] ?? []);
    return total + [...completedForTutorial].filter((itemId) => validIds.has(itemId)).length;
  }, 0);

  const completedTutorialIds = tutorials
    .filter((tutorial) => {
      const completedForTutorial = new Set(progress[tutorial.id] ?? []);
      return tutorial.checklist.every((item) => completedForTutorial.has(item.id));
    })
    .map((tutorial) => tutorial.id);

  return {
    totalSteps,
    completedSteps,
    percentComplete: totalSteps === 0 ? 0 : Math.round((completedSteps / totalSteps) * 100),
    completedTutorialIds,
  };
}

export function createProjectBriefMarkdown(
  tutorial: Tutorial,
  completedItemIds: string[],
  brief: ProjectBriefFields,
  generatedAt = new Date().toISOString().slice(0, 10)
): string {
  const completedItems = new Set(completedItemIds);
  const projectName = brief.projectName.trim() || `${tutorial.shortTitle} project brief`;

  return [
    `# ${projectName}`,
    '',
    `Generated: ${generatedAt}`,
    `Tutorial: ${tutorial.title}`,
    `Source doc: ${tutorial.slug}`,
    `Source repo: ${tutorial.sourceRepo}`,
    `Live demo: ${tutorial.liveDemo}`,
    '',
    '## Business context',
    '',
    `- Business type: ${brief.businessType || 'Not set'}`,
    `- Workflow pain: ${brief.workflowPain || 'Not set'}`,
    `- Current tools: ${brief.currentTools || 'Not set'}`,
    `- Success criteria: ${brief.successCriteria || 'Not set'}`,
    '',
    '## Target app',
    '',
    `- Outcome: ${tutorial.outcome}`,
    `- Best for: ${tutorial.bestFor}`,
    `- Difficulty: ${tutorial.difficulty}`,
    `- Build time: ${tutorial.duration}`,
    '',
    '## Recommended stack',
    '',
    tutorial.recommendedStack.map((item) => `- ${item}`).join('\n'),
    '',
    '## Build guidance',
    '',
    tutorial.buildGuidance.map((item) => `- ${item}`).join('\n'),
    '',
    '## Sample prompts',
    '',
    tutorial.samplePrompts.map((prompt) => `- ${prompt}`).join('\n'),
    '',
    '## Checklist progress',
    '',
    tutorial.checklist
      .map((item) => `- [${completedItems.has(item.id) ? 'x' : ' '}] ${item.label}`)
      .join('\n'),
    '',
    '## Export formats',
    '',
    tutorial.exportFormats.map((format) => `- ${format}`).join('\n'),
    '',
    '## Acceptance checks',
    '',
    tutorial.acceptanceChecks.map((check) => `- ${check}`).join('\n'),
    '',
    '## Client version path',
    '',
    tutorial.clientVersionPath,
  ].join('\n');
}

export function parseSavedProgress(rawValue: string | null, tutorials: Tutorial[]): ProgressState {
  if (!rawValue) {
    return {};
  }

  try {
    const parsed = JSON.parse(rawValue);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {};
    }

    const validTutorials = new Map(
      tutorials.map((tutorial) => [tutorial.id, new Set(tutorial.checklist.map((item) => item.id))])
    );

    return Object.fromEntries(
      Object.entries(parsed)
        .filter(([tutorialId, itemIds]) => validTutorials.has(tutorialId) && Array.isArray(itemIds))
        .map(([tutorialId, itemIds]) => {
          const validItems = validTutorials.get(tutorialId)!;
          return [
            tutorialId,
            (itemIds as unknown[]).filter(
              (itemId): itemId is string => typeof itemId === 'string' && validItems.has(itemId)
            ),
          ];
        })
    );
  } catch {
    return {};
  }
}

export function parseSavedBrief(rawValue: string | null): ProjectBriefFields {
  const emptyBrief: ProjectBriefFields = {
    projectName: '',
    businessType: '',
    workflowPain: '',
    currentTools: '',
    successCriteria: '',
  };

  if (!rawValue) {
    return emptyBrief;
  }

  try {
    const parsed = JSON.parse(rawValue);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return emptyBrief;
    }

    return {
      projectName: typeof parsed.projectName === 'string' ? parsed.projectName : '',
      businessType: typeof parsed.businessType === 'string' ? parsed.businessType : '',
      workflowPain: typeof parsed.workflowPain === 'string' ? parsed.workflowPain : '',
      currentTools: typeof parsed.currentTools === 'string' ? parsed.currentTools : '',
      successCriteria: typeof parsed.successCriteria === 'string' ? parsed.successCriteria : '',
    };
  } catch {
    return emptyBrief;
  }
}
