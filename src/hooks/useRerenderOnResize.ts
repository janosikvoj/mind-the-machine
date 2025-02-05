'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';

export function useRerenderOnResize(debounceDelay: number = 100) {
  const [, setTick] = useState(0);

  const memoizedSetTick = useCallback(() => {
    setTick((tick) => tick + 1);
  }, [setTick]);

  const debouncedSetTickRef = useRef(debounce(memoizedSetTick, debounceDelay));

  useEffect(() => {
    const debouncedSetTick = debouncedSetTickRef.current;

    const handleResize = () => {
      debouncedSetTick();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      debouncedSetTick.cancel();
    };
  }, [debouncedSetTickRef]);
}
