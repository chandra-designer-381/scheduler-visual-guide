import type { ViewMode } from '../types';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onToggle: (mode: ViewMode) => void;
}

export default function ViewModeToggle({ viewMode, onToggle }: ViewModeToggleProps) {
  return (
    <>
      <div className="flex gap-2 mb-3 flex-wrap">
        <button
          onClick={() => onToggle('planning')}
          className={`px-3.5 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
            viewMode === 'planning'
              ? 'bg-st-dark text-white border-none'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Planning View (Default)
        </button>
        <button
          onClick={() => onToggle('execution')}
          className={`px-3.5 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-colors ${
            viewMode === 'execution'
              ? 'bg-st-dark text-white border-none'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Execution Health View
        </button>
      </div>

      {viewMode === 'planning' && (
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
          Default mode. Color = lifecycle status. Opacity/hatching = draft vs live. Small badge =
          auto-scheduled origin. Clean and scannable.
        </p>
      )}
      {viewMode === 'execution' && (
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
          Execution health overlay. Surfaces variance on today/past jobs: overdue completion,
          stale/incomplete, late starts. Like Salesforce palette switching — replaces the default lens
          temporarily.
        </p>
      )}
    </>
  );
}
