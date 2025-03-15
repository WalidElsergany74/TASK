import Image from "next/image";
import img from "../../public/images/Rectangle 29338.png";

const EventDetails = () => {
  return (
    <div className="flex gap-7 flex-col w-full md:w-1/2 p-4">
      <div>
        <h2 className="text-xl font-bold text-[#676767]">تنظيف صحي يعني حياة أفضل</h2>
        <p className="text-base font-medium mt-2 text-[#7E7E7E]">هذا النص هو مثال لنص بديل</p>
      </div>

      <div className="flex items-center gap-3">
        <Image src={img} alt="img..." width={39} height={39} />
        <div className="flex flex-col">
          <p className="text-gray-700 font-semibold">موقع الورشة</p>
          <p className="text-gray-500 text-sm">يتم عمل الورشة عبر موقع الزوم</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-1">
        <p className="text-gray-700 flex items-center">✅ كيفية عمل منزل عرق منزلي</p>
        <p className="text-gray-700 flex items-center">✅ وصفات طبيعية سهلة وفعالة</p>
      </div>
    </div>
  );
};

export default EventDetails;
