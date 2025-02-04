import React, { useContext } from 'react';
import { headerExpandedContext } from './headerContext';
import { cn } from '@/lib/utils';

const HeaderButton = () => {
  const { isExpanded, setIsExpanded } = useContext(headerExpandedContext);
  return (
    <div className="relative bg-gray-3 hover:bg-gray-4 active:bg-gray-5 h-4 border-b border-gray-7 transition-all">
      <button
        className="absolute inset-0 cursor-pointer flex flex-row gap-1 overflow-hidden"
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
