import React, { useEffect, useState } from 'react';
import './TopProgressBar.css';

export default function TopProgressBar() {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    // Quickly move to 75% then hold until component unmounts
    const timer1 = setTimeout(() => setProgress(65), 100);
    const timer2 = setTimeout(() => setProgress(88), 350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="top-progress-container" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
      <div className="top-progress-bar" style={{ width: `${progress}%` }} />
      <div className="top-progress-glow" />
    </div>
  );
}
