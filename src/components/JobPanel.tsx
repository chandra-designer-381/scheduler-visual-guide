import { QUEUE_JOBS } from '../constants/data';

export default function JobPanel() {
  return (
    <div className="w-[200px] border-r border-gray-300 shrink-0 bg-[#fafafa]">
      <div className="p-2 px-3 border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-700">Jobs</span>
        <div className="mt-1 px-2 py-1 bg-white border border-gray-300 rounded text-[11px] text-gray-400">
          Search Jobs...
        </div>
      </div>
      <div className="max-h-[500px] overflow-auto">
        {QUEUE_JOBS.map((j) => (
          <div key={j.id} className="p-2 px-3 border-b border-gray-100 cursor-grab">
            <div className="text-[10px] text-job-live-border font-semibold">
              {j.id} · {j.status}
            </div>
            <div className="text-[11px] font-semibold text-gray-700 mt-0.5">{j.name}</div>
            <div className="text-[10px] text-gray-500 mt-[1px]">{j.site}</div>
            <div className="flex gap-[3px] mt-1 flex-wrap">
              {j.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] px-[5px] py-[1px] bg-[#eef3f8] rounded-sm text-gray-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
