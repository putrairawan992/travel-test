import { useEffect } from 'react';

const useRefsPosition = (element, properties = 'height') => {
  useEffect(() => {
    const refs = element.current;
    const { top } = refs.getBoundingClientRect();

    refs.style[properties] = `calc(100vh - ${top}px)`;

    if (refs.nextSibling) {
      refs.style[properties] = `calc(100vh - ${top + refs.nextSibling.clientHeight}px)`;
    }
  }, [element]);
};

export default useRefsPosition;
