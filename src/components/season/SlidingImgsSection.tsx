import React, { useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { seasonContext } from './seasonContext';

const SlidingImgsSection = () => {
  const { slidingImgsSection } = useContext(seasonContext);
  const { leftImg, rightImg } = slidingImgsSection;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end start', 'start end'],
  });
  const width = useTransform(scrollYProgress, [0, 1], ['33%', '66%']);

  return (
    <section className="border-b border-gray-7 bg-blue-3">
      <div ref={ref} className="relative h-[32rem] flex flex-row">
        <motion.div
          style={{ width: width }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
          className="h-full relative"
        >
          <Image
            fill
            className="object-cover"
            src={leftImg.src}
            alt={leftImg.alt}
          />
        </motion.div>
        <div className="grow h-full relative">
          <Image
            fill
            className="object-cover"
            src={rightImg.src}
            alt={rightImg.alt}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 p-6 text-balance">
        <p className="text-sm">{leftImg.description}</p>
        <p className="col-start-3 text-sm text-right">{rightImg.description}</p>
      </div>
    </section>
  );
};

export default SlidingImgsSection;
