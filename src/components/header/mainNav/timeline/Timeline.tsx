import React from 'react';
import { seasonsData } from '@/data/seasons';
import TimelineSeasonEntry from './TimelineSeasonEntry';

interface TimelineProps {
  isExpanded: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isExpanded }) => {
  return (
    <ul className="w-full flex flex-row items-center">
      {seasonsData.seasons.map((season, i) => (
        <TimelineSeasonEntry
          isExpanded={isExpanded}
          key={season.title}
          season={season}
          index={i}
        />
      ))}
    </ul>
  );
};

export default Timeline;
