export default function Footer() {
  return (
    <div className="mt-8 p-4 px-5 bg-st-dark rounded-[10px] text-white">
      <div className="text-sm font-semibold mb-2">TL;DR — Three Rules</div>
      <div className="text-[13px] leading-7 text-gray-400">
        <strong className="text-[#4ecdc4]">1.</strong> Don't use purple for auto-scheduled. Use a
        small Scout badge instead. Normalize auto output.{' '}
        <br />
        <strong className="text-[#4ecdc4]">2.</strong> Draft = same color, reduced opacity + hatching
        + dashed border. Not a new color. Follows Google Calendar.{' '}
        <br />
        <strong className="text-[#4ecdc4]">3.</strong> Execution variance = toggleable view, not
        always-on decoration. Keep planning mode clean.
      </div>
    </div>
  );
}
