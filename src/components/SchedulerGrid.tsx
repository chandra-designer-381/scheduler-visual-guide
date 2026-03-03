import type { ViewMode } from '../types';
import { DAYS, RESOURCES } from '../constants/data';
import JobCard from './JobCard';

interface SchedulerGridProps {
  viewMode: ViewMode;
}

export default function SchedulerGrid({ viewMode }: SchedulerGridProps) {
  return (
    <div className="flex-1 overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Day headers */}
        <div className="flex border-b-2 border-gray-300">
          <div className="w-[150px] shrink-0 p-2 px-3 border-r border-gray-100">
            <span className="text-[11px] text-gray-400">Resources</span>
          </div>
          {DAYS.map((d, i) => (
            <div
              key={d}
              className={`flex-1 p-2 px-2 text-center text-[11px] font-semibold border-r border-gray-100 ${
                i === 0 ? 'bg-st-teal text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Resource rows */}
        {RESOURCES.map((r) => (
          <div key={r.name} className="flex border-b border-gray-100">
            <div className="w-[150px] shrink-0 p-2.5 px-3 border-r border-gray-100">
              <div className="text-xs font-semibold text-st-teal">{r.name}</div>
              <div className="text-[10px] text-gray-500 mt-[1px]">{r.role}</div>
              <div className="text-[10px] text-gray-400">{r.skills}</div>
            </div>
            {DAYS.map((_, di) => {
              const dayJobs = r.jobs.filter((j) => j.day === di);
              return (
                <div
                  key={di}
                  className="flex-1 p-1 px-[3px] border-r border-gray-50 min-h-[70px] flex flex-col gap-[3px]"
                >
                  {dayJobs.map((job, ji) => (
                    <JobCard key={ji} job={job} viewMode={viewMode} />
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
