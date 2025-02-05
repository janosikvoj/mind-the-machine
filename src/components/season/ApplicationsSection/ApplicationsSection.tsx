import React, { useContext, useEffect, useRef, useState } from 'react';
import { seasonContext } from '../seasonContext';
import ApplicationItem from './ApplicationItem';
import { useRerenderOnResize } from '@/hooks/useRerenderOnResize';
import AnchoredHGroup from '@/components/ui/AnchoredHGroup';

const ApplicationsSection = () => {
  useRerenderOnResize();
  const { applicationsSection } = useContext(seasonContext);
  const hGroupRef = useRef<HTMLElement>(null);
  const [hGroupHeight, setHGroupHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const updateHGroupHeight = () => {
      if (hGroupRef.current) {
        setHGroupHeight(hGroupRef.current.clientHeight);
      } else {
        setHGroupHeight(undefined);
      }
    };

    updateHGroupHeight();
  });

  if (applicationsSection)
    return (
      <section className="relative pt-24 border-b border-gray-7 bg-gray-3">
        <AnchoredHGroup ref={hGroupRef} className="px-6 py-8 sticky top-0 z-10">
          Real World Applications
        </AnchoredHGroup>
        <ul className="pt-12 relative z-10">
          {applicationsSection &&
            applicationsSection.map((application, index) => (
              <ApplicationItem
                key={application.title}
                index={index}
                application={application}
                initialTopOffset={hGroupHeight}
              />
            ))}
        </ul>
      </section>
    );
};

export default ApplicationsSection;
