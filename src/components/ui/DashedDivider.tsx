import { cn } from '@/lib/utils';
import React from 'react';

interface DashedDividerProps {
  height?: number | string;
  lines?: number;
  className?: string;
}

const DashedDivider: React.FC<DashedDividerProps> = ({
  height = 32,
  lines = 128,
  className,
}) => {
  return (
    <div
      className={cn('bg-gray-5 stroke-gray-7 stroke-1', className)}
      style={{ height: height }}
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${lines + 1} 1`}
        xmlns="http://www.w3.org/2000/svg"
        vectorEffect="non-scaling-stroke"
        preserveAspectRatio="none"
      >
        {Array.from({ length: lines }, (_, i) => {
          const x = i + 1;
          return <path key={i} d={`M${x} 0V1`} vectorEffect="inherit" />;
        })}
      </svg>
    </div>
  );
};

export default DashedDivider;
