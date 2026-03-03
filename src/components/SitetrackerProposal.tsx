import { useState } from 'react';
import type { ViewMode } from '../types';
import ViewModeToggle from './ViewModeToggle';
import DraftBanner from './DraftBanner';
import JobPanel from './JobPanel';
import SchedulerGrid from './SchedulerGrid';
import Legend from './Legend';
import DesignPrinciples from './DesignPrinciples';

export default function SitetrackerProposal() {
  const [viewMode, setViewMode] = useState<ViewMode>('planning');

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-st-dark flex items-center justify-center">
          <span className="text-[#4ecdc4] font-bold text-[8px]">ST</span>
        </div>
        <h3 className="text-base font-semibold m-0">Sitetracker — Proposed Visual System</h3>
      </div>

      <ViewModeToggle viewMode={viewMode} onToggle={setViewMode} />

      {/* Banner */}
      <DraftBanner />

      {/* Main scheduler area */}
      <div className="bg-white border border-gray-300 border-t-0 rounded-b-lg flex overflow-hidden">
        <JobPanel />
        <SchedulerGrid viewMode={viewMode} />
      </div>

      <Legend viewMode={viewMode} />
      <DesignPrinciples />
    </div>
  );
}
