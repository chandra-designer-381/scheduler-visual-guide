interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { key: 'competitors', label: 'Competitor Patterns' },
  { key: 'proposal', label: 'Sitetracker Proposal' },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex border-b-2 border-gray-200 mb-6">
      {TABS.map((t) => (
        <button
          key={t.key}
          onClick={() => onTabChange(t.key)}
          className={`px-5 py-2.5 border-none cursor-pointer text-sm font-semibold bg-transparent -mb-[2px] transition-colors ${
            activeTab === t.key
              ? 'text-st-teal border-b-2 border-st-teal'
              : 'text-gray-400 border-b-2 border-transparent hover:text-gray-600'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
