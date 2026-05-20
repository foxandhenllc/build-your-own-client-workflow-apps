import { describe, expect, it } from 'vitest';
import { tutorials } from '../data/tutorials';
import { createProjectBriefMarkdown, summarizeProgress } from './progress';

describe('tutorial progress helpers', () => {
  it('summarizes checked checklist items across all tutorials', () => {
    const progress = {
      'client-portal': ['client-portal-fixtures', 'client-portal-lanes'],
      'quote-tracker': ['quote-tracker-fixtures'],
    };

    const summary = summarizeProgress(tutorials, progress);

    expect(summary.completedSteps).toBe(3);
    expect(summary.totalSteps).toBeGreaterThan(20);
    expect(summary.percentComplete).toBeGreaterThan(0);
  });

  it('marks a tutorial complete only when all checklist items are checked', () => {
    const clientPortal = tutorials.find((tutorial) => tutorial.id === 'client-portal');
    expect(clientPortal).toBeDefined();

    const progress = {
      'client-portal': clientPortal!.checklist.map((item) => item.id),
    };

    const summary = summarizeProgress(tutorials, progress);

    expect(summary.completedTutorialIds).toEqual(['client-portal']);
  });

  it('exports a project brief with selected tutorial, checked work, and client scope', () => {
    const tutorial = tutorials[0];
    const markdown = createProjectBriefMarkdown(tutorial, ['client-portal-fixtures'], {
      projectName: 'Acme onboarding workspace',
      businessType: 'Local service business',
      workflowPain: 'Approvals and file requests are scattered across email.',
      currentTools: 'Email, Drive, spreadsheet tracker',
      successCriteria: 'Client can see blockers and next actions in under one minute.',
    });

    expect(markdown).toContain('# Acme onboarding workspace');
    expect(markdown).toContain(`Tutorial: ${tutorial.title}`);
    expect(markdown).toContain('- [x] Create fictional sample records.');
    expect(markdown).toContain('Export formats');
  });
});
