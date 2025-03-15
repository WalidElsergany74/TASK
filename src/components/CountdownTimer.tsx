"use client"
import { useState, useEffect, useCallback } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]); 

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex items-center justify-around w-full">
      {[
        { value: timeLeft.days, label: "يوم" },
        { value: timeLeft.hours, label: "ساعة" },
        { value: timeLeft.minutes, label: "دقيقة" },
        { value: timeLeft.seconds, label: "ثانية" },
      ].map((item, index) => (
        <div key={index} className="flex items-center">
          {index !== 0 && <span className="text-gray-300 font-extrabold text-3xl ml-3">:</span>}
          <div className="flex flex-col text-center">
            <p className="text-[#333333] font-semibold text-base">{item.value}</p>
            <p className="text-[#636363] font-semibold text-base">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
