import { useEffect, useState } from 'react';

const FlipCard = ({ timeUnit, time }) => {
  const formattedTime = time < 10 ? `0${time}` : time;
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setIsFlipping(true);
    const timeout = setTimeout(() => {
      setIsFlipping(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [formattedTime]);

  return (
    <div>
      <div
        className={`flip-card ${isFlipping ? 'flip' : ''}`}
        data-content-top={formattedTime}
        data-content-bottom={formattedTime}
      >
        <div className="card-top">{formattedTime}</div>
        <div className="separator">
          <div className="circle left"></div>
          <div className="circle right"></div>
        </div>
        <div className="card-bottom">{formattedTime}</div>
      </div>
      <h1 className="time-unit">{timeUnit}</h1>
    </div>
  );
};

export default FlipCard;
