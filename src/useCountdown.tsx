import { useEffect, useRef, useState } from 'react';

interface CountUpNumberProps {
  to: number;
  duration?: number; // in milliseconds
}

const CountUpNumber = ({ to, duration = 2000 }: CountUpNumberProps) => {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(to * progress);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(to);
      }
    };

    requestAnimationFrame(animate);
  }, [to, duration]);

  return (
    <span className="text-4xl font-bold text-blue-600">{value}</span>
  );
};

export default CountUpNumber;
