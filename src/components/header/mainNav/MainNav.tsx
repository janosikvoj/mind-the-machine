import React, { useContext } from 'react';
import MooresLaw from '@/components/header/mainNav/MooresLaw';
import Timeline from '@/components/header/mainNav/timeline/Timeline';
import { cn } from '@/lib/utils';
import { headerExpandedContext } from '../headerContext';

const MainNav = () => {
  const { isExpanded } = useContext(headerExpandedContext);

  return (
    <div className="relative grow">
      <nav
        className={cn(
          'h-full flex items-center justify-center px-0 transition-all ease-in-out duration-1000 overflow-hidden',
          isExpanded && 'p-10'
        )}
      >
        <Timeline isExpanded={isExpanded} />
      </nav>
      <div className="absolute inset-0 pointer-events-none">
        <figure className="relative h-full">
          <div
            className={cn(
              'absolute inset-0 -translate-x-2 overflow-hidden transition-all duration-1000',
              isExpanded && 'inset-4'
            )}
          >
            <MooresLaw />
          </div>
          <figcaption
            className={cn(
              'absolute right-0 text-gray-9 text-sm bg-gray-2 p-1.5 w-fit pointer-events-auto',
              !isExpanded && 'translate-x-full',
              'transition-all duration-500 ease-in-out'
            )}
          >
            Moore&apos;s law
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default MainNav;
