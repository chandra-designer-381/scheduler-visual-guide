import type { SchedulerJob, CardStyle, ViewMode } from '../types';

export function getCardStyle(job: SchedulerJob, viewMode: ViewMode): CardStyle {
  const isLive = job.type === 'live';
  const isDraft = job.type === 'draft';
  const isAuto = job.origin === 'auto';
  const exec = job.exec;

  let bg: string, border: string, borderStyle: string, opacity: number, textColor: string, subColor: string;

  if (exec === 'stale' && viewMode === 'execution') {
    bg = '#f0f0f0';
    border = '#bbb';
    borderStyle = 'dashed';
    opacity = 0.6;
    textColor = '#888';
    subColor = '#aaa';
  } else if (exec === 'in-progress') {
    bg = '#e0f2e9';
    border = '#27ae60';
    borderStyle = 'solid';
    opacity = 1;
    textColor = '#1a6b3c';
    subColor = '#27ae60';
  } else if (exec === 'overdue' && viewMode === 'execution') {
    bg = '#e0f2e9';
    border = '#27ae60';
    borderStyle = 'solid';
    opacity = 1;
    textColor = '#1a6b3c';
    subColor = '#27ae60';
  } else if (isDraft) {
    bg = 'repeating-linear-gradient(135deg, transparent, transparent 5px, rgba(66,153,225,0.08) 5px, rgba(66,153,225,0.08) 10px)';
    border = '#90c2f0';
    borderStyle = 'dashed';
    opacity = 0.85;
    textColor = '#4a7fb5';
    subColor = '#7baed4';
  } else {
    bg = '#e3f1fb';
    border = '#4a9eda';
    borderStyle = 'solid';
    opacity = 1;
    textColor = '#1a5276';
    subColor = '#4a7fb5';
  }

  return { bg, border, borderStyle, opacity, textColor, subColor, isAuto, exec, isDraft, isLive };
}
