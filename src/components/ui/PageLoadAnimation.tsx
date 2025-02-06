import React from 'react';
import * as motion from 'motion/react-client';

interface PageLoadAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const PageLoadAnimation: React.FC<PageLoadAnimationProps> = ({
  children,
  delay = 0.4,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-20vh', scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.65, 0.05, 0.36, 1],
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageLoadAnimation;
