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
      className="relative decoration-0 min-w-8 max-w-8 md:max-w-none"
      style={{
        width: entryRelativeDuration + '%',
        height: entryRelativeDuration + '%',
      }}
    >
      <div
        className={cn(
          'absolute h-full md:h-auto md:w-full -translate-x-full md:translate-x-0 md:-translate-y-full pointer-events-none',
          'flex flex-col md:flex-row justify-end',
          isExpanded && 'pointer-events-auto'
        )}
      >
        {index === 0 && (
          <div className="-translate-y-1/2 md:translate-y-0 md:-translate-x-1/2 w-fit absolute top-0 md:left-0 pr-3 md:pr-0">
            <motion.div
              className={cn('w-fit invisible', index === 0 && 'visible')}
              variants={yearVariants}
              animate={isExpanded ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
            >
              {season.duration.start}
            </motion.div>
          </div>
        )}
        <div className="translate-y-1/2 md:translate-y-0 md:translate-x-1/2 w-fit h-fit pr-3 md:pr-0">
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
        prefetch={true}
        href={'/seasons/' + season.slug}
        scroll={false}
        className={cn(
          'block h-full w-8 md:w-auto md:h-8 group z-10 transition-all duration-1000 ease-out',
          isExpanded && 'md:h-16'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onTouchStart={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchEnd={() => setIsHovered(false)}
        onClick={() => handleSeasonSelect()}
      >
        <div
          className={cn(
            season.tailwindBgColorClasses.bg,
            'block h-full transition-all duration-300 border-gray-a8 w-full',

            !isExpanded &&
              'group-active:border-r-4 md:group-active:border-t-4 md:group-active:border-r-0 duration-150',
            !isExpanded &&
              isHovered &&
              'border-r-2 md:border-t-2 md:border-r-0',

            isExpanded &&
              isHovered &&
              'w-[calc(100%+0.75rem)] md:w-auto md:h-[calc(100%+2rem)]',

            isExpanded &&
              isActive &&
              'w-[calc(100%+1rem)] md:w-auto md:h-[calc(100%+2rem)]',

            isActive && 'border-r-4 md:border-t-4 md:border-r-0'
          )}
        />
        <motion.div
          variants={titleVariants}
          animate={isExpanded ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
          className="absolute w-[30vw] md:w-full -right-4 md:right-auto top-0 md:top-auto translate-x-full md:translate-0 pl-1.5 md:pl-0 pointer-events-none md:pointer-events-auto"
        >
          <p className="font-medium leading-4 md:leading-snug md:mt-1 mr-1">
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
