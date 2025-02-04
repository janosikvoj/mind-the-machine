'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { headerExpandedContext } from './headerContext';
import TopNav from './topNav/TopNav';
import MainNav from './mainNav/MainNav';
import HeaderButton from './HeaderButton';

const variants = {
  expanded: {
    height: '100vh',
    transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1] },
  },
  collapsed: {
    height: 128,
    transition: { delay: 0.4, duration: 0.6, ease: [0.79, 0.14, 0.15, 0.86] },
  },
};

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <headerExpandedContext.Provider
      value={{ isExpanded: isExpanded, setIsExpanded: setIsExpanded }}
    >
      <motion.header
        className={cn(
          'group/header flex flex-col border-b border-gray-7 max-w-full overflow-hidden'
        )}
        variants={variants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
      >
        <TopNav />
        <HeaderButton />
        <MainNav />
      </motion.header>
    </headerExpandedContext.Provider>
  );
};

export default Header;
