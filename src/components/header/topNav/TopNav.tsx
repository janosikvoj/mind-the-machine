import React, { useContext } from 'react';
import Link from 'next/link';
import { headerExpandedContext } from '../headerContext';

const TopNav = () => {
  const { setIsExpanded } = useContext(headerExpandedContext);
  return (
    <div className="w-full z-50 border-b border-gray-7 h-20">
      <div className="p-3">
        <div className="text-3xl leading-6">
          <Link
            href="/"
            className="font-display"
            scroll={false}
            onClick={() => {
              setIsExpanded(true);
            }}
          >
            Mind the Machine
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
