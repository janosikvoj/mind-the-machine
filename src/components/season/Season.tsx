'use client';

import React from 'react';
import { SeasonType } from '@/data/seasons';
import { seasonContext } from './seasonContext';
import IntroSection from './IntroSection';
import SlidingImgsSection from './SlidingImgsSection';
import BigNumberSection from './BigNumberSection';
import DevelopmentsSection from './developmentsSection/DevelopmentsSection';
import LimitationsSection from './LimitationsSection';
import ApplicationsSection from './ApplicationsSection/ApplicationsSection';

interface SeasonProps {
  season: SeasonType;
}

const Season: React.FC<SeasonProps> = ({ season }) => {
  return (
    <seasonContext.Provider value={season}>
      <main>
        <IntroSection />
        {season.slidingImgsSection && <SlidingImgsSection />}
        {season.keyDevelopmentsSection && <DevelopmentsSection />}
        {season.bigNumberSection && <BigNumberSection />}
        {season.applicationsSection && <ApplicationsSection />}
        {season.limitationsSection && <LimitationsSection />}
      </main>
    </seasonContext.Provider>
  );
};

export default Season;
