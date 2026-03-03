export default function Dynamics365() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-[#002050] flex items-center justify-center">
          <span className="text-white font-bold text-[9px]">D365</span>
        </div>
        <h3 className="text-base font-semibold m-0">
          Dynamics 365 Field Service — Schedule Board
        </h3>
      </div>
      <p className="text-[13px] text-gray-500 mt-1 mb-3 leading-relaxed">
        Booking statuses are configurable records, each with a color. Left-edge stripe = status.
        Sub-statuses like <strong>"Scheduled – Proposed" vs "Scheduled – Confirmed"</strong> use
        shade variations within the same color family. RSO (auto-scheduler) output uses standard
        booking statuses.
      </p>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
        <div className="text-[11px] text-gray-400 mb-2">Booking card anatomy:</div>
        <div className="flex gap-5 flex-wrap">
          {/* Confirmed */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-[180px] h-[52px] rounded bg-[#e8f0fe] border border-[#c5d9f0] flex overflow-hidden">
              <div className="w-[5px] bg-[#4A90D9] shrink-0" />
              <div className="p-1.5 px-2.5 flex-1">
                <div className="text-[11px] font-semibold text-gray-700">WO-4521 Install</div>
                <div className="text-[10px] text-gray-500">9:00 AM – 11:00 AM</div>
              </div>
            </div>
            <span className="text-[10px] text-[#4A90D9] font-semibold">Scheduled – Confirmed</span>
          </div>

          {/* Proposed */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-[180px] h-[52px] rounded bg-[#f0f5ff] border border-dashed border-[#b0c8e8] flex overflow-hidden">
              <div className="w-[5px] bg-[#a4c4e8] shrink-0" />
              <div className="p-1.5 px-2.5 flex-1">
                <div className="text-[11px] font-semibold text-gray-500">WO-4522 Repair</div>
                <div className="text-[10px] text-gray-400">1:00 PM – 3:00 PM</div>
              </div>
            </div>
            <span className="text-[10px] text-[#a4c4e8] font-semibold">Scheduled – Proposed</span>
          </div>

          {/* In Progress */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-[180px] h-[52px] rounded bg-[#fef5e7] border border-[#f5d89a] flex overflow-hidden">
              <div className="w-[5px] bg-[#F39C12] shrink-0" />
              <div className="p-1.5 px-2.5 flex-1">
                <div className="text-[11px] font-semibold text-gray-700">WO-4519 Inspect</div>
                <div className="text-[10px] text-gray-500">10:00 AM – now</div>
              </div>
            </div>
            <span className="text-[10px] text-[#F39C12] font-semibold">In Progress</span>
          </div>
        </div>

        <div className="mt-4 px-3 py-2 bg-[#fff3cd] rounded-md text-xs text-[#856404] leading-relaxed">
          <strong>Key pattern:</strong> "Proposed" vs "Confirmed" = same blue family, just lighter
          shade + dashed border. Not a different color entirely. Auto-scheduled (RSO) bookings land
          as standard "Scheduled."
        </div>
      </div>
    </div>
  );
}
