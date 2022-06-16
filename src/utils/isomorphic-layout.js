import { useLayoutEffect, useEffect } from 'react';

export const useIsomorphicLayoutEffect = () => {
  return typeof window !== 'undefined' ? useLayoutEffect : useEffect;
};
