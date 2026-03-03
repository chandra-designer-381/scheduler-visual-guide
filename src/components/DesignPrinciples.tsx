const PRINCIPLES = [
  {
    title: 'Principle 1: Color = Lifecycle Status',
    text: 'Blue = Scheduled, Green = In Progress/Complete, Gray = Stale. Same as every competitor. One dimension per visual channel.',
    bg: 'bg-callout-blue',
    textColor: 'text-job-live-text',
  },
  {
    title: 'Principle 2: Opacity/Hatching = Commitment',
    text: 'Solid = live. Hatched + dashed = draft. Follows Google Calendar tentative pattern. No new colors needed.',
    bg: 'bg-callout-yellow',
    textColor: 'text-[#7d6608]',
  },
  {
    title: 'Principle 3: Badge = Origin',
    text: 'Small Scout "S" badge for auto-scheduled. Additive, not competing. Dismissible. Normalizes auto output per industry standard.',
    bg: 'bg-callout-purple',
    textColor: 'text-[#5b2c8e]',
  },
  {
    title: 'Principle 4: Variance = View Mode Toggle',
    text: 'Execution health is a switchable lens (like SF palette switch), not always-on decoration. Keeps planning view clean.',
    bg: 'bg-callout-green',
    textColor: 'text-[#2e7d32]',
  },
];

export default function DesignPrinciples() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5">
      {PRINCIPLES.map((p) => (
        <div
          key={p.title}
          className={`p-2.5 px-3.5 ${p.bg} rounded-lg text-xs ${p.textColor} leading-relaxed`}
        >
          <strong>{p.title}</strong>
          <br />
          {p.text}
        </div>
      ))}
    </div>
  );
}
