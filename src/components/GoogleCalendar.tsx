export default function GoogleCalendar() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-[#4285F4] flex items-center justify-center">
          <span className="text-white font-bold text-[11px]">G</span>
        </div>
        <h3 className="text-base font-semibold m-0">
          Google Calendar — Commitment Visual Language
        </h3>
      </div>
      <p className="text-[13px] text-gray-500 mt-1 mb-3 leading-relaxed">
        The most universally recognized pattern for tentative vs. confirmed. Users already know this
        vocabulary — we can borrow it for draft vs. live.
      </p>

      <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
        <div className="flex gap-6 flex-wrap">
          {/* Accepted */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-[180px] h-11 rounded-md bg-[#4285F4] flex items-center px-3">
              <span className="text-xs text-white font-medium">Team Standup</span>
            </div>
            <span className="text-[11px] text-gray-700 font-semibold">Accepted / Confirmed</span>
            <span className="text-[10px] text-gray-400">Solid fill</span>
          </div>

          {/* Tentative */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className="w-[180px] h-11 rounded-md border-2 border-[#4285F4] flex items-center px-3"
              style={{
                background:
                  'repeating-linear-gradient(135deg, transparent, transparent 4px, rgba(66,133,244,0.15) 4px, rgba(66,133,244,0.15) 8px)',
              }}
            >
              <span className="text-xs text-[#4285F4] font-medium">Maybe: Lunch</span>
            </div>
            <span className="text-[11px] text-gray-700 font-semibold">Tentative / Maybe</span>
            <span className="text-[10px] text-gray-400">Diagonal hatching + outline</span>
          </div>

          {/* Declined */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-[180px] h-11 rounded-md border-2 border-gray-300 bg-white flex items-center px-3">
              <span className="text-xs text-gray-400 font-medium line-through">
                Skip: All Hands
              </span>
            </div>
            <span className="text-[11px] text-gray-700 font-semibold">Declined</span>
            <span className="text-[10px] text-gray-400">Hollow outline + strikethrough</span>
          </div>
        </div>

        <div className="mt-4 px-3 py-2 bg-callout-green rounded-md text-xs text-[#2e7d32] leading-relaxed">
          <strong>Key pattern:</strong> Commitment level is encoded through fill treatment (solid →
          hatched → hollow), NOT through color changes. Color stays consistent for the
          calendar/category. This is the pattern we should borrow for Draft vs Live.
        </div>
      </div>
    </div>
  );
}
