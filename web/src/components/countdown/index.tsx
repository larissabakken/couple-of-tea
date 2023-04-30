import React, { useState, useEffect } from "react";
import { FcAlarmClock } from "react-icons/fc";

interface CountdownProps {
  date: string;

}

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  //   date example : "June 8, 2023 12:00:00 GMT+0100"

  useEffect(() => {
    const countDownDate = new Date(date).getTime() + 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      setTimeLeft(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="text-center">
      <div className="text-xl lg:text-4xl font-bold mb-8">
        {days}d {hours}h {minutes}m {seconds}s{" "}
        <FcAlarmClock className="inline" />
      </div>
    </div>
  );
};

export default Countdown;
