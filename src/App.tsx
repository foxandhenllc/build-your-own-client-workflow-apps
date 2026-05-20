import { useEffect, useMemo, useState } from 'react';
import { tutorials, type Tutorial } from './data/tutorials';
import {
  createProjectBriefMarkdown,
  parseSavedBrief,
  parseSavedProgress,
  summarizeProgress,
  type ProgressState,
  type ProjectBriefFields,
} from './lib/progress';
import './styles.css';

const progressStorageKey = 'foxhen-client-workflow-progress-v1';
const briefStorageKey = 'foxhen-client-workflow-brief-v1';

function App() {
  const [activeTutorialId, setActiveTutorialId] = useState(tutorials[0].id);
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === 'undefined') {
      return {};
    }

    return parseSavedProgress(window.localStorage.getItem(progressStorageKey), tutorials);
  });
  const [brief, setBrief] = useState<ProjectBriefFields>(() => {
    if (typeof window === 'undefined') {
      return parseSavedBrief(null);
    }

    return parseSavedBrief(window.localStorage.getItem(briefStorageKey));
  });
  const [copyStatus, setCopyStatus] = useState('Ready to export');

  useEffect(() => {
    window.localStorage.setItem(progressStorageKey, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    window.localStorage.setItem(briefStorageKey, JSON.stringify(brief));
  }, [brief]);

  const activeTutorial = tutorials.find((tutorial) => tutorial.id === activeTutorialId) ?? tutorials[0];
  const summary = useMemo(() => summarizeProgress(tutorials, progress), [progress]);
  const activeCompletedIds = progress[activeTutorial.id] ?? [];
  const activePercent = Math.round((activeCompletedIds.length / activeTutorial.checklist.length) * 100);
  const projectBrief = useMemo(
    () => createProjectBriefMarkdown(activeTutorial, activeCompletedIds, brief),
    [activeCompletedIds, activeTutorial, brief]
  );

  const toggleChecklistItem = (tutorialId: string, itemId: string) => {
    setProgress((current) => {
      const currentIds = new Set(current[tutorialId] ?? []);
      if (currentIds.has(itemId)) {
        currentIds.delete(itemId);
      } else {
        currentIds.add(itemId);
      }

      return { ...current, [tutorialId]: [...currentIds] };
    });
  };

  const updateBrief = (field: keyof ProjectBriefFields, value: string) => {
    setBrief((current) => ({ ...current, [field]: value }));
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(projectBrief);
      setCopyStatus('Copied project brief Markdown');
    } catch {
      setCopyStatus('Copy failed; use download instead');
    }
  };

  const downloadBrief = () => {
    const url = URL.createObjectURL(new Blob([projectBrief], { type: 'text/markdown' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${activeTutorial.id}-project-brief.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main>
      <section className="hero">
        <div>
          <h1>Navigate the tutorial path and leave with a client-ready brief.</h1>
          <p>
            Pick a workflow app tutorial, check off build steps in localStorage, and export a public-safe
            project brief when the prototype is ready for a private fork.
          </p>
        </div>
        <div className="progress-card" aria-label="Overall progress">
          <span>{summary.percentComplete}% complete</span>
          <div className="meter" aria-hidden="true">
            <div style={{ width: `${summary.percentComplete}%` }} />
          </div>
          <p>
            {summary.completedSteps} of {summary.totalSteps} checklist items done
          </p>
          <strong>{summary.completedTutorialIds.length} tutorials completed</strong>
        </div>
      </section>

      <section className="workspace">
        <aside className="tutorial-nav" aria-label="Tutorial navigator">
          <div className="panel-heading">
            <p>Tutorial navigator</p>
            <h2>{tutorials.length} browser-only builds</h2>
          </div>
          <div className="tutorial-list">
            {tutorials.map((tutorial) => (
              <TutorialButton
                key={tutorial.id}
                tutorial={tutorial}
                isActive={tutorial.id === activeTutorial.id}
                completedCount={(progress[tutorial.id] ?? []).length}
                onClick={() => setActiveTutorialId(tutorial.id)}
              />
            ))}
          </div>
        </aside>

        <section className="tutorial-detail" aria-label="Selected tutorial detail">
          <div className="detail-header">
            <div>
              <p>{activeTutorial.difficulty} tutorial</p>
              <h2>{activeTutorial.title}</h2>
            </div>
            <a href={activeTutorial.slug}>Open docs</a>
          </div>

          <p className="outcome">{activeTutorial.outcome}</p>

          <div className="detail-grid">
            <InfoBlock label="Best for" value={activeTutorial.bestFor} />
            <InfoBlock label="Build time" value={activeTutorial.duration} />
            <InfoBlock label="Progress" value={`${activeCompletedIds.length}/${activeTutorial.checklist.length} done`} />
          </div>

          <section className="checklist">
            <div className="checklist__header">
              <div>
                <p>Checklist</p>
                <h3>{activePercent}% complete</h3>
              </div>
              <button
                type="button"
                className="ghost-button"
                onClick={() => setProgress((current) => ({ ...current, [activeTutorial.id]: [] }))}
              >
                Reset tutorial
              </button>
            </div>

            {activeTutorial.checklist.map((item) => (
              <label className="checklist-item" key={item.id}>
                <input
                  type="checkbox"
                  checked={activeCompletedIds.includes(item.id)}
                  onChange={() => toggleChecklistItem(activeTutorial.id, item.id)}
                />
                <span>
                  <strong>{item.label}</strong>
                  <em>{item.phase}</em>
                </span>
              </label>
            ))}
          </section>

          <div className="reference-grid">
            <ReferenceList title="Data model" items={activeTutorial.dataModel} />
            <ReferenceList title="Acceptance checks" items={activeTutorial.acceptanceChecks} />
            <ReferenceList title="Export formats" items={activeTutorial.exportFormats} />
          </div>
        </section>

        <aside className="brief-panel" aria-label="Exportable project brief">
          <div className="panel-heading">
            <p>Project brief</p>
            <h2>Export scope</h2>
          </div>

          <BriefField
            label="Project name"
            value={brief.projectName}
            onChange={(value) => updateBrief('projectName', value)}
            placeholder="Acme onboarding workspace"
          />
          <BriefField
            label="Business type"
            value={brief.businessType}
            onChange={(value) => updateBrief('businessType', value)}
            placeholder="Local service business"
          />
          <BriefField
            label="Workflow pain"
            value={brief.workflowPain}
            onChange={(value) => updateBrief('workflowPain', value)}
            placeholder="Approvals and requests are scattered"
          />
          <BriefField
            label="Current tools"
            value={brief.currentTools}
            onChange={(value) => updateBrief('currentTools', value)}
            placeholder="Email, Drive, spreadsheets"
          />
          <label className="brief-field">
            <span>Success criteria</span>
            <textarea
              value={brief.successCriteria}
              onChange={(event) => updateBrief('successCriteria', event.target.value)}
              placeholder="What must be true for this app to be useful?"
            />
          </label>

          <div className="client-path">
            <h3>Client version path</h3>
            <p>{activeTutorial.clientVersionPath}</p>
          </div>

          <div className="export-actions">
            <button className="primary-button" type="button" onClick={copyBrief}>
              Copy brief
            </button>
            <button className="ghost-button" type="button" onClick={downloadBrief}>
              Download .md
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyStatus}
          </p>
        </aside>
      </section>
    </main>
  );
}

interface TutorialButtonProps {
  tutorial: Tutorial;
  isActive: boolean;
  completedCount: number;
  onClick: () => void;
}

function TutorialButton({ tutorial, isActive, completedCount, onClick }: TutorialButtonProps) {
  const percent = Math.round((completedCount / tutorial.checklist.length) * 100);

  return (
    <button className={isActive ? 'tutorial-button tutorial-button--active' : 'tutorial-button'} type="button" onClick={onClick}>
      <span>
        <strong>{tutorial.shortTitle}</strong>
        <em>{tutorial.bestFor}</em>
      </span>
      <small>{percent}%</small>
    </button>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-block">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ReferenceList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="reference-list">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function BriefField({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="brief-field">
      <span>{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </label>
  );
}

export default App;
