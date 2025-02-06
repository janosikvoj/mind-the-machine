'use client';
import React, { useContext, useState } from 'react';
import { seasonContext } from './seasonContext';
import { LimitationType } from '@/data/seasons';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import AnchoredHGroup from '../ui/AnchoredHGroup';

interface LimitationsAccordionItemProps {
  limitation: LimitationType;
  index: number;
}
export const LimitationsAccordionItem: React.FC<
  LimitationsAccordionItemProps
> = ({ limitation, index }) => {
  const { title, description } = limitation;
  const [isOpen, setIsOpen] = useState(index === 0 ? true : false);

  return (
    <li className="border-t border-gray-7 grid grid-cols-7">
      <div className="col-start-2 col-span-5 border-gray-7 border-x">
        <div
          className={cn(
            'p-6 pb-3',
            isOpen && 'pt-12',
            'transition-all ease-out'
          )}
        >
          <h3
            className={cn(
              'text-xl font-semibold text-gray-10',
              'transition-all ease-out duration-300',
              isOpen && 'text-gray-12 text-2xl'
            )}
          >
            {title}
          </h3>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  height: 'auto',
                  opacity: 1,
                  y: 0,
                  transition: {
                    y: { delay: 0.2 },
                    opacity: { delay: 0.2 },
                    height: {
                      ease: 'backOut',
                    },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  y: -16,
                  transition: {
                    height: { delay: 0.2 },
                  },
                }}
                transition={{ ease: 'easeOut' }}
              >
                <p className="text-gray-11 overflow-hidden py-6">
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          className={cn(
            'relative h-8 w-full cursor-pointer overflow-hidden',
            'flex flex-row gap-2',
            'bg-gray-3 hover:bg-gray-4 active:bg-gray-5 transition-all',
            isOpen && 'bg-gray-5'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <div
              key={index}
              className={cn(
                'translate-x-1/2 grow odd:border-r even:border-l border-gray-7 h-full scale-y-200',
                'rotate-12 odd:-rotate-12',
                isOpen && '-rotate-12 odd:rotate-12',
                'transition-all duration-300'
              )}
            />
          ))}
        </button>
      </div>
    </li>
  );
};

const LimitationsSection = () => {
  const { limitationsSection } = useContext(seasonContext);

  if (limitationsSection)
    return (
      <section className="border-b border-gray-7">
        <AnchoredHGroup className="text-gray-11">Limitations</AnchoredHGroup>
        <ol>
          {limitationsSection.map((limitation, index) => (
            <LimitationsAccordionItem
              key={limitation.title}
              limitation={limitation}
              index={index}
            />
          ))}
          <li className="border-t border-gray-7 grid grid-cols-7">
            <div className="col-start-2 col-span-5 border-gray-7 border-x h-24" />
          </li>
        </ol>
      </section>
    );
};

export default LimitationsSection;
