import React from 'react';
import { seasonsData } from '@/data/seasons';
import TimelineSeasonEntry from './TimelineSeasonEntry';
import { cn } from '@/lib/utils';

interface TimelineProps {
  isExpanded: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ isExpanded }) => {
  return (
    <ul
      className={cn(
        'w-auto md:w-full h-full md:h-auto flex flex-col md:flex-row items-center',
        !isExpanded && ''
      )}
    >
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
