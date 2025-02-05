'use client';

import React, { useContext, useState, useEffect } from 'react';
import { seasonContext } from '../seasonContext';
import AnchoredHGroup from '@/components/ui/AnchoredHGroup';

const DevelopmentsSection = () => {
  const { keyDevelopmentsSection } = useContext(seasonContext);
  const [cols, setCols] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) setCols(3);
      else if (window.innerWidth > 640) setCols(2);
      else setCols(1);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!keyDevelopmentsSection) return null;

  const sectionLength = keyDevelopmentsSection.length;
  const remainder = sectionLength % cols;
  const fillerItemsNeeded = remainder === 0 ? 0 : cols - remainder;

  const modifiedKeyDevelopmentsSection = [...keyDevelopmentsSection];
  for (let i = 0; i < fillerItemsNeeded; i++) {
    modifiedKeyDevelopmentsSection.push({ title: '' });
  }

  return (
    <section className="border-b border-gray-7 bg-blue-2">
      <AnchoredHGroup className="text-blue-11">Key Developments</AnchoredHGroup>

      <div className="border-t border-gray-7">
        <ul
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-7 items-stretch border-x border-gray-7`}
        >
          {modifiedKeyDevelopmentsSection.map((keyDevelopment, index) => {
            const { title, year, category, description } = keyDevelopment;
            return (
              <li
                key={title + index}
                className="p-6 flex flex-col gap-32 justify-between bg-blue-2"
              >
                <hgroup>
                  {category && (
                    <p className="mb-3 bg-gray-3 text-blue-11 px-1.5 pl-3 w-fit border-l-2 border-blue-9 text-sm uppercase tracking-wide font-medium">
                      {category}
                    </p>
                  )}
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  {year && <p className="text-lg">{year}</p>}
                </hgroup>
                {description && <p className="text-gray-11">{description}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default DevelopmentsSection;
