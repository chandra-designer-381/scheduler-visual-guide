export default function DraftBanner() {
  return (
    <div className="bg-[#f0faf8] border border-[#b2dfdb] rounded-t-lg px-4 py-1.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#00695c] font-semibold">Draft Schedule</span>
        <span className="text-[11px] text-gray-500">·</span>
        <span className="text-[11px] text-gray-500">NJ Market</span>
      </div>
      <div className="flex gap-2">
        <button className="text-[11px] px-2.5 py-[3px] rounded border border-gray-300 bg-white cursor-pointer text-gray-500 hover:bg-gray-50">
          Exit
        </button>
        <button className="text-[11px] px-2.5 py-[3px] rounded border border-gray-300 bg-white cursor-pointer text-gray-500 hover:bg-gray-50">
          Actions
        </button>
        <button className="text-[11px] px-3.5 py-[3px] rounded border-none bg-st-teal text-white cursor-pointer font-semibold hover:opacity-90">
          Dispatch (4)
        </button>
      </div>
    </div>
  );
}
