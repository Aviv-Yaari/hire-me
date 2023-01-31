import { useEffect, useRef, useState } from "react";

interface Props extends React.PropsWithChildren {
    parentRef: React.RefObject<HTMLElement>;
    threshold?: IntersectionObserverInit['threshold'];
}

export default function LazyLoad({ parentRef, threshold = 0.5, children }: Props) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => 
      entry.isIntersecting && setVisible(true),
    { threshold });
    const { current } = parentRef;
    current && observer.observe(current);
    
    return () => { current && observer.unobserve(current); }
  }, [parentRef, threshold]);

  return <>{visible ? children : null}</>
}