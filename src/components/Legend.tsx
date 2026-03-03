import type { ViewMode } from '../types';

interface LegendProps {
  viewMode: ViewMode;
}

export default function Legend({ viewMode }: LegendProps) {
  return (
    <div className="mt-3 p-3 px-4 bg-gray-50 border border-gray-300 rounded-lg">
      <div className="text-xs font-semibold text-gray-700 mb-2">Legend</div>
      <div className="flex gap-5 flex-wrap">
        {/* Live */}
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-[18px] rounded-sm bg-job-live-bg border-[1.5px] border-solid border-job-live-border" />
          <span className="text-[11px] text-gray-500">Live / Dispatched</span>
        </div>

        {/* Draft */}
        <div className="flex items-center gap-1.5">
          <div
            className="w-8 h-[18px] rounded-sm border-[1.5px] border-dashed border-job-draft-border"
            style={{
              background:
                'repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(66,153,225,0.1) 4px, rgba(66,153,225,0.1) 8px)',
            }}
          />
          <span className="text-[11px] text-gray-500">Draft (not dispatched)</span>
        </div>

        {/* Auto badge */}
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-st-scout-purple flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">S</span>
          </div>
          <span className="text-[11px] text-gray-500">Scout auto-scheduled</span>
        </div>

        {/* In Progress */}
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-[18px] rounded-sm bg-job-progress-bg border-[1.5px] border-solid border-job-progress-border" />
          <span className="text-[11px] text-gray-500">In Progress</span>
        </div>

        {/* Execution-only indicators */}
        {viewMode === 'execution' && (
          <>
            <div className="flex items-center gap-1.5">
              <span className="text-[13px]">⚠️</span>
              <span className="text-[11px] text-gray-500">Overdue / Variance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-[18px] rounded-sm bg-job-stale-bg border-[1.5px] border-dashed border-job-stale-border opacity-60" />
              <span className="text-[11px] text-gray-500">Stale / Incomplete</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
