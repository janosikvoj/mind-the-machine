'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { seasonsColors } from '@/data/seasons';
import { cn } from '@/lib/utils';
import PageLoadAnimation from './PageLoadAnimation';

interface InitialPageLoadAnimationProps {
  children: React.ReactNode;
}

const InitialPageLoadAnimation: React.FC<InitialPageLoadAnimationProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative">
      <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]">
        <AnimatePresence>
          {isLoading && (
            <>
              {[...seasonsColors].reverse().map((seasonColors, index) => (
                <motion.div
                  key={index}
                  initial={{ translateY: 0 }}
                  exit={{ translateY: '-100%' }}
                  transition={{
                    ease: 'circIn',
                    duration: 1.5,
                    delay: 0.1 * (index * -1 + seasonsColors.length),
                  }}
                  className={cn('absolute inset-0', seasonColors.bg)}
                ></motion.div>
              ))}
              <motion.div
                initial={{ translateY: 0 }}
                exit={{ translateY: '-100%' }}
                transition={{ ease: 'circIn', duration: 1.5 }}
                className="absolute inset-0 bg-blue-9"
              >
                <motion.div
                  initial={{ height: '100vh' }}
                  animate={{ height: 80 }}
                  transition={{ duration: 2.5, ease: 'circOut' }}
                  className="w-full border-b border-gray-7"
                >
                  <div className="p-3 flex flex-col sm:flex-row items-baseline">
                    <svg
                      className="h-5 w-auto stroke-blue-1 fill-gray-1"
                      viewBox="0 0 552 41"
                      vectorEffect="non-scaling-stroke"
                      overflow="visible"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.168 14.016V40H53.376C52.2667 40 51.392 39.68 50.752 39.04C50.112 38.4 49.792 37.5253 49.792 36.416V14.016H55.168ZM55.168 8.64H64.128L65.92 14.016H55.168V8.64ZM65.92 14.016H71.296V40H65.92V14.016ZM71.296 8.64H79.424L84.736 14.016V40H82.944C81.8347 40 80.96 39.68 80.32 39.04C79.68 38.4 79.36 37.5253 79.36 36.416V14.016H71.296V8.64ZM93.668 10.432V40H88.292V8.64L93.668 10.432ZM93.668 0.575996V5.952H88.292V0.575996H93.668ZM102.606 14.016V40H97.2295V14.016H102.606ZM102.606 8.64H120.526L126.798 14.016H102.606V8.64ZM126.798 14.016H132.174V40H126.798V14.016ZM165.298 12.224C165.298 10.9867 165.639 10.0907 166.322 9.536C167.004 8.93867 167.858 8.64 168.882 8.64H170.674V34.624H165.298V26.56H141.106V21.184H165.298V12.224ZM135.73 30.144C135.73 28.9067 136.071 28.0107 136.754 27.456C137.436 26.8587 138.29 26.56 139.314 26.56H141.106V34.624H165.298V36.416C165.298 37.44 164.999 38.2933 164.402 38.976C163.847 39.6587 162.951 40 161.714 40H135.73V30.144ZM221.736 8.64V14.016H206.504V40H204.712C203.816 40 202.984 39.6373 202.216 38.912C201.491 38.144 201.128 37.312 201.128 36.416V8.64H221.736ZM186.792 8.64H195.752L201.128 14.016H186.792V8.64ZM230.668 8.64H225.292V36.416C225.292 37.312 225.655 38.144 226.38 38.912C227.148 39.6373 227.98 40 228.876 40H230.668V8.64ZM254.86 23.872H230.668V18.496H254.86L260.236 23.872V40H254.86V23.872ZM263.792 34.624V14.016H269.168V21.184H293.36V22.976C293.36 24 293.061 24.8533 292.464 25.536C291.909 26.2187 291.013 26.56 289.776 26.56H269.168V34.624H298.736V40H269.168L263.792 34.624ZM269.168 12.224C269.168 10.9867 269.509 10.0907 270.192 9.536C270.875 8.93867 271.728 8.64 272.752 8.64H298.736V21.184H293.36V14.016H269.168V12.224ZM320.231 14.016V40H318.439C317.329 40 316.455 39.68 315.815 39.04C315.175 38.4 314.855 37.5253 314.855 36.416V14.016H320.231ZM320.231 8.64H329.191L330.983 14.016H320.231V8.64ZM330.983 14.016H336.359V40H330.983V14.016ZM336.359 8.64H344.487L349.799 14.016V40H348.007C346.897 40 346.023 39.68 345.382 39.04C344.743 38.4 344.423 37.5253 344.423 36.416V14.016H336.359V8.64ZM384.715 8.64C386.08 8.64 387.019 8.896 387.531 9.408C388.043 9.92 388.299 10.8587 388.299 12.224V34.624H382.923V26.56H358.731V24.768C358.731 23.872 359.093 23.0613 359.819 22.336C360.587 21.568 361.419 21.184 362.315 21.184H382.923V14.016H353.355V8.64H384.715ZM353.355 26.56H358.731V34.624H382.923L381.131 40H356.939C356.043 40 355.211 39.6373 354.443 38.912C353.717 38.144 353.355 37.312 353.355 36.416V26.56ZM426.799 8.64V14.016H397.231V34.624H391.855V14.016L397.231 8.64H426.799ZM397.231 34.624H426.799V40H400.815C399.919 40 399.087 39.6373 398.319 38.912C397.593 38.144 397.231 37.312 397.231 36.416V34.624ZM435.731 8.64H430.355V36.416C430.355 37.312 430.717 38.144 431.443 38.912C432.211 39.6373 433.043 40 433.939 40H435.731V8.64ZM459.923 23.872H435.731V18.496H459.923L465.299 23.872V40H459.923V23.872ZM474.231 10.432V40H468.855V8.64L474.231 10.432ZM474.231 0.575996V5.952H468.855V0.575996H474.231ZM483.168 14.016V40H477.792V14.016H483.168ZM483.168 8.64H501.088L507.36 14.016H483.168V8.64ZM507.36 14.016H512.736V40H507.36V14.016ZM516.292 34.624V14.016H521.668V21.184H545.86V22.976C545.86 24 545.561 24.8533 544.964 25.536C544.409 26.2187 543.513 26.56 542.276 26.56H521.668V34.624H551.236V40H521.668L516.292 34.624ZM521.668 12.224C521.668 10.9867 522.009 10.0907 522.692 9.536C523.375 8.93867 524.228 8.64 525.252 8.64H551.236V21.184H545.86V14.016H521.668V12.224Z"
                        stroke="none"
                      />
                      <path vectorEffect="inherit" d="M32 9L1 40" />
                    </svg>
                    <p className="text-blue-7 sm:pl-3 font-normal sm:text-xl leading-8">
                      Loading
                      <span className="motion-opacity-in-0 motion-delay-1000">
                        .
                      </span>
                      <span className="motion-opacity-in-0 motion-delay-1500">
                        .
                      </span>
                      <span className="motion-opacity-in-0 motion-delay-2000">
                        .
                      </span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {!isLoading && (
        <PageLoadAnimation delay={2}>{children}</PageLoadAnimation>
      )}
    </div>
  );
};

export default InitialPageLoadAnimation;
