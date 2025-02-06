import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface AnchoredHGroupProps {
  children: string;
  className?: string;
  ref?: React.RefObject<HTMLElement | null>;
}

const AnchoredHGroup: React.FC<AnchoredHGroupProps> = ({
  children,
  className,
  ref,
}) => {
  const anchorId = children.toLowerCase().replace(/\s+/g, '-');
  return (
    <hgroup
      id={anchorId}
      ref={ref}
      className={cn(
        'px-6 pt-32 pb-20 text-center break-words text-gray-12',
        className
      )}
    >
      <h2 className="text-5xl font-display leading-8">
        <Link
          prefetch={true}
          href={'#' + anchorId}
          className="relative hover:bg-gray-a3 active:bg-gray-a4 group transition-all ease-in-out duration-150 p-1 pb-0"
        >
          <span className="hidden md:inline absolute right-0 translate-x-full translate-y-2 opacity-0 group-hover:opacity-35 group-hover:translate-y-0 transition-all ease-in-out duration-200 delay-150">
            #
          </span>
          {children}
          <span className="hidden md:inline absolute left-0 -translate-x-full -translate-y-2 opacity-0 group-hover:opacity-35 group-hover:translate-y-0 transition-all ease-in-out duration-200 delay-150">
            #
          </span>
        </Link>
      </h2>
      <small className="mt-1.5 text-sm text-gray-11 uppercase">
        —{children.replaceAll(' ', '-')}—
      </small>
    </hgroup>
  );
};

export default AnchoredHGroup;
