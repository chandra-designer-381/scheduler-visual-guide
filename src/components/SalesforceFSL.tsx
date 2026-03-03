import { SF_STATUSES } from '../constants/data';

const RESOURCES = ['James Clifton', 'Maria Lopez', 'Sam Chen'];
const TIME_SLOTS = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'];

export default function SalesforceFSL() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-[#00A1E0] flex items-center justify-center">
          <span className="text-white font-bold text-[11px]">SF</span>
        </div>
        <h3 className="text-base font-semibold m-0">
          Salesforce Field Service — Dispatcher Console Gantt
        </h3>
      </div>
      <p className="text-[13px] text-gray-500 mt-1 mb-3 leading-relaxed">
        Color encodes <strong>lifecycle status only</strong>. Auto-scheduled jobs (via Enhanced
        Optimization) land as standard "Scheduled" — no visual distinction from manual. Palette
        overlays (e.g. color by due date) <em>replace</em> status colors temporarily; they don't
        stack.
      </p>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 overflow-x-auto">
        <div className="flex min-w-[600px]">
          {/* Resource column */}
          <div className="w-[140px] shrink-0 border-r border-gray-300 pr-3">
            <div className="text-[11px] text-gray-400 mb-2">Resources</div>
            {RESOURCES.map((n) => (
              <div
                key={n}
                className="h-12 flex items-center text-xs text-gray-700 border-b border-gray-100"
              >
                {n}
              </div>
            ))}
          </div>

          {/* Gantt area */}
          <div className="flex-1 pl-3">
            <div className="flex mb-1">
              {TIME_SLOTS.map((t) => (
                <div key={t} className="flex-1 text-[10px] text-gray-400 text-center">
                  {t}
                </div>
              ))}
            </div>

            {/* Row 1 */}
            <div className="h-12 relative border-b border-gray-100 flex items-center">
              <div
                className="absolute left-0 w-1/4 h-8 rounded flex items-center px-2"
                style={{ background: SF_STATUSES[1].color }}
              >
                <span className="text-[10px] font-semibold" style={{ color: SF_STATUSES[1].text }}>
                  SA-1001 Dispatched
                </span>
              </div>
              <div
                className="absolute left-1/2 w-[37%] h-8 rounded flex items-center px-2"
                style={{ background: SF_STATUSES[2].color }}
              >
                <span className="text-[10px] font-semibold" style={{ color: SF_STATUSES[2].text }}>
                  SA-1005 In Progress
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="h-12 relative border-b border-gray-100 flex items-center">
              <div
                className="absolute left-[12%] w-1/4 h-8 rounded flex items-center px-2"
                style={{ background: SF_STATUSES[0].color }}
              >
                <span className="text-[10px] font-semibold" style={{ color: SF_STATUSES[0].text }}>
                  SA-1002 Scheduled
                </span>
              </div>
              <div
                className="absolute left-[62%] w-1/4 h-8 rounded flex items-center px-2"
                style={{ background: SF_STATUSES[3].color }}
              >
                <span className="text-[10px] font-semibold" style={{ color: SF_STATUSES[3].text }}>
                  SA-1008 Completed
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="h-12 relative border-b border-gray-100 flex items-center">
              <div
                className="absolute left-0 w-1/2 h-8 rounded flex items-center px-2"
                style={{ background: SF_STATUSES[4].color }}
              >
                <span className="text-[10px] font-semibold" style={{ color: SF_STATUSES[4].text }}>
                  SA-1003 Cannot Complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-3 mt-3 flex-wrap">
          {SF_STATUSES.map((s) => (
            <div key={s.label} className="flex items-center gap-1">
              <div className="w-3.5 h-3.5 rounded-sm" style={{ background: s.color }} />
              <span className="text-[11px] text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 px-3 py-2 bg-callout-blue rounded-md text-xs text-job-live-text leading-relaxed">
        <strong>Key pattern:</strong> Auto-scheduled appointments look identical to manually
        scheduled ones. No purple, no badge, no visual distinction. The scheduling engine's output is
        normalized.
      </div>
    </div>
  );
}
