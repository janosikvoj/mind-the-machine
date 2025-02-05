import React, { useContext } from 'react';
import { headerExpandedContext } from './headerContext';
import { cn } from '@/lib/utils';

const HeaderButton = () => {
  const { isExpanded, setIsExpanded } = useContext(headerExpandedContext);
  return (
    <div
      className={cn(
        'relative bg-gray-3 hover:bg-gray-4 active:bg-gray-5 border-b border-gray-7 transition-all duration-700',
        'h-12 md:h-4',
        isExpanded && 'h-8',
        !isExpanded && '-mb-px'
      )}
    >
      <button
        className={cn(
          'absolute inset-0 cursor-pointer flex flex-row gap-3 md:gap-1 overflow-hidden transition-all duration-700',
          isExpanded && 'gap-2'
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {Array.from({ length: 21 }, (_, index) => (
          <div
            key={index}
            className={cn(
              'translate-x-1/2 grow odd:border-r even:border-l border-gray-7 h-full scale-y-200',
              'rotate-12 odd:-rotate-12',
              isExpanded && '-rotate-12 odd:rotate-12',
              'transition-all duration-1000'
            )}
          />
        ))}
      </button>
    </div>
  );
};

export default HeaderButton;
