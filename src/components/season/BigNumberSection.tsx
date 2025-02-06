import { motion } from 'motion/react';
import React, { useContext } from 'react';
import { seasonContext } from './seasonContext';
import DashedDivider from '../ui/DashedDivider';
import AnimatedSection from '../ui/AnimatedSection';

const BigNumberSection = () => {
  const { bigNumberSection } = useContext(seasonContext);
  if (bigNumberSection) {
    return (
      <AnimatedSection className="pt-16 border-b border-gray-7">
        <p className="p-6 text-center">{bigNumberSection.numberDescription}</p>
        <div className="relative">
          <div className="h-[3.6rem] md:h-36 overflow-hidden flex justify-center items-start">
            <motion.p
              initial={{ x: '0' }}
              animate={{ x: '-33.333%' }}
              transition={{
                repeat: Infinity,
                duration: bigNumberSection.numberValue.length / 0.75,
                ease: 'linear',
              }}
              className="text-8xl md:text-[16rem] md:leading-52 font-bold tracking-tighter whitespace-nowrap"
            >
              <span className="pr-[50vw]">{bigNumberSection.numberValue}</span>
              <span className="pr-[50vw]">{bigNumberSection.numberValue}</span>
              <span className="pr-[50vw]">{bigNumberSection.numberValue}</span>
            </motion.p>
          </div>
        </div>
        <DashedDivider className="border-t border-gray-9 stroke-gray-8" />
      </AnimatedSection>
    );
  }
};

export default BigNumberSection;
