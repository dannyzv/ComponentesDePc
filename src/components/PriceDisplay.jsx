import { useEffect, useRef, useState } from 'react';

export default function PriceDisplay({ value, compact = false }) {
  const [display, setDisplay] = useState(0);
  const previousValue = useRef(0);

  useEffect(() => {
    const target = value || 0;
    const from = previousValue.current;
    if (from === target) return;

    const start = performance.now();
    const duration = 500;
    let raf;

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (target - from) * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        previousValue.current = target;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(display);

  return (
    <span className={compact ? 'price-compact' : 'price-display'}>{formatted}</span>
  );
}
