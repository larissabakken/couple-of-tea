import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CountdownProps {
  language: string;
}

const Countdown: React.FC<CountdownProps> = ({ language }) => {
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
      <div className="text-xl mb-4 lg:text-4xl">
        {language === "pt-BR"
          ? "Contagem Regressiva"
          : language === "en-US"
          ? "Countdown to our Wedding"
          : "Nedtelling til bryllupet vårt"}
      </div>
      <div className="text-xl lg:text-4xl font-bold mb-8">
        {days}d {hours}h {minutes}m {seconds}s
      </div>
      <Link
        href="https://zoom.us/mywedding"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[var(--primary-color-dark)] hover:bg-[var(--primary-color)] text-white font-bold py-2 px-4 rounded"
      >
        {language === "pt-BR"
          ? "Assista ao Vivo"
          : language === "en-US"
          ? "Join the Live Stream"
          : "Se Live Stream"}
      </Link>
      <div className="text-sm text-[var(--error)] mt-4 max-w-[800px] text-center px-4">
        {language === "pt-BR"
          ? "Importante: Certifique-se de ter o Zoom instalado no dispositivo e entre na live pelo menos 5 minutos antes do horário de início. Não se preocupe, a cerimônia dura em torno de 10 minutos."
          : language === "en-US"
          ? "Important: Make sure to have Zoom installed on your device and join the live stream at least 5 minutes before the start time. Don't worry, the ceremony lasts around 10 minutes."
          : "Viktig: Sørg for å ha Zoom installert på enheten din og delta i live streamen minst 5 minutter før starttiden. Ikke bekymre deg, seremonien varer rundt 10 minutter."}*
      </div>
    </div>
  );
};

export default Countdown;
