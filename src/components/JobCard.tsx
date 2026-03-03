import type { SchedulerJob, ViewMode } from '../types';
import { getCardStyle } from '../constants/styles';

interface JobCardProps {
  job: SchedulerJob;
  viewMode: ViewMode;
}

export default function JobCard({ job, viewMode }: JobCardProps) {
  const s = getCardStyle(job, viewMode);

  return (
    <div
      className="rounded-[5px] relative min-h-[40px] px-[7px] py-[5px]"
      style={{
        border: `1.5px ${s.borderStyle} ${s.border}`,
        background: s.bg,
        opacity: s.opacity,
      }}
    >
      {/* Scout auto badge */}
      {s.isAuto && (
        <span
          className="absolute top-[3px] right-[3px] w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] text-white font-bold"
          style={{
            background: s.isDraft ? 'rgba(108,99,255,0.7)' : 'rgba(108,99,255,0.9)',
          }}
        >
          S
        </span>
      )}

      {/* Overdue icon */}
      {s.exec === 'overdue' && viewMode === 'execution' && (
        <span
          className="absolute top-[3px] text-[11px]"
          style={{ right: s.isAuto ? 20 : 3 }}
        >
          ⚠️
        </span>
      )}

      {/* Stale icon */}
      {s.exec === 'stale' && viewMode === 'execution' && (
        <span className="absolute top-[3px] right-[3px] text-[10px]">🌙</span>
      )}

      <div
        className="text-[11px] font-semibold"
        style={{ color: s.textColor, paddingRight: s.isAuto ? 18 : 0 }}
      >
        {job.label}
      </div>
      <div className="text-[9px] mt-[1px]" style={{ color: s.subColor }}>
        {job.sub}
      </div>

      {job.type === 'draft' && (
        <div className="mt-[3px]">
          <input
            type="checkbox"
            className="w-3 h-3 accent-st-teal"
            readOnly
          />
        </div>
      )}
    </div>
  );
}
