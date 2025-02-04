import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { seasonContext } from '../seasonContext';
import ApplicationItem from './ApplicationItem';

const ApplicationsSection = () => {
  const { applicationsSection } = useContext(seasonContext);
  const hGroupRef = useRef<HTMLDivElement>(null);
  const [hGroupHeight, setHGroupHeight] = useState(0);

  useLayoutEffect(() => {
    if (hGroupRef.current) {
      setHGroupHeight(hGroupRef.current.clientHeight);
    }
  }, []);

  if (applicationsSection)
    return (
      <section className="relative pt-24 border-b border-gray-7 bg-gray-3">
        <hgroup
          ref={hGroupRef}
          className="px-6 py-8 text-center break-words sticky top-0 z-10"
        >
          <h2 className="text-5xl font-display leading-8 text-gray-12">
            Real World Applications
          </h2>
          <p className="mt-1.5 text-sm text-gray-11 uppercase">
            —Real-World-Applications—
          </p>
        </hgroup>
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
