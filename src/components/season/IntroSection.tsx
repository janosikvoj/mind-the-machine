import React, { useContext } from 'react';
import { seasonContext } from './seasonContext';
import { cn } from '@/lib/utils';

const IntroSection = () => {
  const { duration, title, slug, overview, tailwindBgColorClasses } =
    useContext(seasonContext);
  return (
    <section className="p-6 pb-16 grid grid-cols-7 border-b border-gray-7">
      <svg
        className={cn(
          'col-span-2 m-auto h-1/3 w-1/2 stroke-2',
          tailwindBgColorClasses.stroke
        )}
        width={64}
        height={64}
        preserveAspectRatio="none"
        overflow="visible"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L64 64" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="pt-32 col-span-3 col-start-3">
        <hgroup className="text-center break-words">
          <p className="text-4xl mb-4">
            {duration.start}–{duration.end}
          </p>
          <h1 className="mt-4 text-8xl font-display text-blue-11 leading-16">
            {title}
          </h1>
          <p className="text-sm text-gray-11">—{slug.toUpperCase()}—</p>
        </hgroup>
        <p className="mt-16 text-lg">{overview}</p>
      </div>
      <svg
        className={cn(
          'col-span-2 m-auto h-1/3 w-1/2 stroke-2',
          tailwindBgColorClasses.stroke
        )}
        width={64}
        height={64}
        preserveAspectRatio="none"
        overflow="visible"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 64L64 0" vectorEffect="non-scaling-stroke" />
      </svg>
    </section>
  );
};

export default IntroSection;
