import SalesforceFSL from './SalesforceFSL';
import Dynamics365 from './Dynamics365';
import GoogleCalendar from './GoogleCalendar';

export default function CompetitorPatterns() {
  return (
    <div>
      <div className="px-3.5 py-2.5 bg-callout-orange rounded-lg mb-6 text-[13px] text-[#e65100] leading-relaxed">
        <strong>The universal rule across all FSM products:</strong> Fill color carries one dimension
        only — lifecycle status. Auto-scheduling output is visually identical to manual.
        Tentative/proposed uses opacity shifts, not new colors. Execution variance lives in drill-in
        and reporting, not on the card surface.
      </div>
      <SalesforceFSL />
      <Dynamics365 />
      <GoogleCalendar />
    </div>
  );
}
