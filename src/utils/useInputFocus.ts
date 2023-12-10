import { useRef, useEffect } from 'react';

export const useInputFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
