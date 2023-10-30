import { useEffect, useState } from 'react';
import FlipCard from './components/FlipCard';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const targetDateParam = urlParams.get('date');

  const defaultTargetDate = new Date('2024-07-17 00:00:00').getTime();

  const targetDate = targetDateParam
    ? new Date(targetDateParam).getTime()
    : defaultTargetDate;

  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const calculateTimeUnits = (time) => {
    if (time <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeUnits, setTimeUnits] = useState(calculateTimeUnits(timeRemaining));

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = targetDate - currentTime;
      if (timeRemaining <= 0) {
        clearInterval(timer);
        setTimeUnits({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeUnits(calculateTimeUnits(timeRemaining));
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <section>
      <h1 className="title">
        {timeRemaining <= 0 ? "We're launching now" : "We're launching soon"}
      </h1>
      <div className="flip-card-container">
        {Object.keys(timeUnits).map((unit) => (
          <FlipCard key={unit} timeUnit={unit} time={timeUnits[unit]} />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default App;
