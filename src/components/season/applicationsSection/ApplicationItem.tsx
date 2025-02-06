import { ApplicationType } from '@/data/seasons';
import { circIn, motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

interface ApplicationItemProps {
  application: ApplicationType;
  index: number;
  initialTopOffset: number | undefined;
}
const ApplicationItem: React.FC<ApplicationItemProps> = ({
  application,
  index,
  initialTopOffset,
}) => {
  const { title, description, image } = application;

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['end start', 'start end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2], {
    ease: circIn,
  });

  return (
    <li
      className="sticky bg-gray-3 border-t border-gray-7 sm:grid grid-cols-7"
      style={{ top: (initialTopOffset || 0) + index * 80 }}
    >
      <div className="col-start-2 col-span-5 border-x border-gray-7">
        <h3 className="block text-2xl font-semibold p-6">{title}</h3>
        <p className="text-sm p-6 pb-3">{description}</p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b to-gray-a9 z-10" />
          <div className="relative overflow-hidden" ref={scrollRef}>
            <motion.div
              style={{ scale: scale }}
              className="h-[20vw] min-h-[33vh] relative"
            >
              <Image
                className="bg-gray-9 object-cover"
                fill
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 640x) 71.4vw, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ApplicationItem;
