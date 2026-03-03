import { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import CompetitorPatterns from './components/CompetitorPatterns';
import SitetrackerProposal from './components/SitetrackerProposal';
import Footer from './components/Footer';

export default function App() {
  const [section, setSection] = useState('competitors');

  return (
    <div className="max-w-[960px] mx-auto p-6">
      <h1 className="text-[22px] font-bold text-st-dark mb-1">
        Job Scheduler Visual State Architecture
      </h1>
      <p className="text-sm text-gray-500 mb-5">
        Competitive patterns & proposed Sitetracker visual system
      </p>

      <TabNavigation activeTab={section} onTabChange={setSection} />

      {section === 'competitors' && <CompetitorPatterns />}
      {section === 'proposal' && <SitetrackerProposal />}

      <Footer />
    </div>
  );
}
