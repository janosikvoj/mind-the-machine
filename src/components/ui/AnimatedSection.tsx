import React from 'react';
import * as motion from 'motion/react-client';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0.25, scaleX: 1.3 }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
        transition: {
          opacity: { ease: 'circIn', delay: 0.2, duration: 1 },
          scaleX: { duration: 0.5 },
        },
      }}
      transition={{ delay: 0.1, ease: 'circOut' }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
