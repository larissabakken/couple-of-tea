import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const countDownDate =
      new Date("July 29, 2023 11:00:00 GMT+0100").getTime() + 60 * 60 * 1000;

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
    <div className=" w-full h-full flex flex-col items-center justify-center pt-5">
      <div className="text-xl mb-4 lg:text-4xl">"Countdown to our Wedding"</div>
      <div className="text-xl lg:text-4xl font-bold mb-8">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
      <Link
        href="https://zoom.us/mywedding"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[var(--primary-color-dark)] hover:bg-[var(--primary-color)] text-white font-bold py-2 px-4 rounded"
      >
        "Join the Live Stream"
      </Link>
    </div>
  );
};

export default Countdown;
