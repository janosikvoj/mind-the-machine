'use client';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import { SeasonType, seasonsData } from '@/data/seasons';
import { useContext, useState } from 'react';
import Link from 'next/link';
import { headerExpandedContext } from '../../headerContext';
import { usePathname } from 'next/navigation';

interface TimelineSeasonEntryProps {
  season: SeasonType;
  index: number;
  isExpanded: boolean;
}

const yearVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -64 },
};

const titleVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 16 },
};

const TimelineSeasonEntry: React.FC<TimelineSeasonEntryProps> = ({
  season,
  index,
}) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  let isActive = pathname === `/seasons/${season.slug}` ? true : false;
  const { isExpanded, setIsExpanded } = useContext(headerExpandedContext);

  const { duration } = season;

  const entryRelativeDuration = (
    ((duration.end - duration.start) * 100) /
    seasonsData.duration.length
  ).toFixed(2);

  function handleSeasonSelect() {
    setIsExpanded(false);
    isActive = true;
  }

  return (
    <li
      className="relative decoration-0"
      style={{ width: entryRelativeDuration + '%' }}
    >
      <div
        className={cn(
          'absolute w-full flex flex-row pb-2 justify-between -translate-y-full pointer-events-none',
          isExpanded && 'pointer-events-auto'
        )}
      >
        <div className="-translate-x-1/2">
          <motion.div
            className={cn('w-fit invisible', index === 0 && 'visible')}
            variants={yearVariants}
            animate={isExpanded ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
          >
            {season.duration.start}
          </motion.div>
        </div>
        <div className="translate-x-1/2">
          <motion.div
            className="w-fit"
            variants={yearVariants}
            animate={isExpanded ? 'visible' : 'hidden'}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
              delay: 0.15 + index * 0.05,
            }}
          >
            {season.duration.end}
          </motion.div>
        </div>
      </div>
      <Link
        href={'/seasons/' + season.slug}
        scroll={false}
        className={cn(
          'block h-8 group z-10 transition-all duration-1000 ease-out',
          isExpanded && 'h-16'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleSeasonSelect()}
      >
        <div
          className={cn(
            season.tailwindBgColorClasses.bg,
            'block h-full transition-all duration-300 border-gray-a8',
            !isExpanded &&
              'group-hover:border-t-2 group-active:border-t-4 duration-150',
            (isExpanded || isHovered) && 'group-hover:h-[calc(100%+2rem)]',
            isActive && 'border-t-4 h-[calc(100%+2rem)]'
          )}
        />
        <motion.div
          variants={titleVariants}
          animate={isExpanded ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
          className="absolute w-full"
        >
          <p className="font-medium leading-snug mr-1">
            {season.title.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isHovered || isActive ? { opacity: 1 } : {}}
                transition={{ duration: 0, delay: index * 0.02 }}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </Link>
    </li>
  );
};

export default TimelineSeasonEntry;
