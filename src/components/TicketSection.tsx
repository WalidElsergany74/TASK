"use client"
import Image from "next/image";
import QR from "../../public/images/qrr.svg";
import CountdownTimer from "./CountdownTimer";
import Button from "./Button";

const TicketSection = () => {
  return (
    <div className="flex flex-col items-center w-full  p-4 gap-6">
     <CountdownTimer targetDate={new Date("2025-04-01T00:00:00")} />
      <Image src={QR} alt="QR Code" width={70} height={30} />
      <Button/>
    </div>
  );
};

export default TicketSection;
