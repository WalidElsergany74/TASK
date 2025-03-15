import EventDetails from "./EventDetails";
import TicketSection from "./TicketSection";

const Card = () => {
  return (
    <div className="relative flex flex-col w-full md:flex-row justify-center items-center bg-white md:shadow mx-auto my-5  max-w-md md:max-w-xl rounded-2xl">
      

      <div className="md:hidden absolute left-0 top-1/2 transform  w-6 h-12 bg-[#f1f5f9] rounded-r-full"></div>
      <div className="md:hidden absolute right-0 top-1/2 transform  w-6 h-12 bg-[#f1f5f9] rounded-l-full"></div>
    
     
      <div className="md:block hidden absolute -top-3 left-60 transform -translate-x-1/2 w-12 h-9.5 bg-[#f1f5f9] rounded-b-full"></div>
      <div className="md:block hidden absolute -bottom-3 left-60 transform -translate-x-1/2 w-12 h-9.5 bg-[#f1f5f9] rounded-t-full"></div>

      
      <div className="absolute hidden md:block left-60 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#F4F2F5]"></div>
      <div className="md:hidden absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-[#F4F2F5]"></div>
      
      
      <div className="flex flex-col md:flex-row w-full">
        
        <div className="md:w-[60%] w-full p-4">
          <EventDetails />
        </div>

       
        <div className="md:w-[40%] w-full p-4">
          <TicketSection />
        </div>
      </div>
    </div>
  );
};

export default Card;
