// components/AnimatedCounter.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  from?: number;
  to: number;
  duration?: number;
};

export default function AnimatedCounter({ from = 0, to, duration = 2000 }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const increment = Math.ceil(end / (duration / 10));
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(start);
      }, 10);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <h3 className="text-4xl font-bold">{count.toLocaleString()}+</h3>
    </div>
  );
}
