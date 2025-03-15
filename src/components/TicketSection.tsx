import Image from "next/image";
import QR from "../../public/images/qrr.svg";
import CountdownTimer from "./CountdownTimer";

const TicketSection = () => {
  return (
    <div className="flex flex-col items-center w-full md:w-1/2 p-4 gap-6">
     <CountdownTimer targetDate={new Date("2025-04-01T00:00:00")} />
      <Image src={QR} alt="QR Code" width={70} height={30} />
      <button className="bg-[#353535] text-[#F8F8F8] py-2 px-4 rounded-lg mt-4">احجز تذكرتك</button>
    </div>
  );
};

export default TicketSection;
