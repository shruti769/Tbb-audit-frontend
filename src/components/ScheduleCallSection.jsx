import { CalendarDays } from "lucide-react";
import React from "react";

const callTypes = [
  { title: "On boarding Call" },
  { title: "Discovery Call" },
  { title: "Regular Catchup" },
  { title: "Final Delivery Call"},
];

const AvatarRow = () => (
  <div className="flex mt-3 -space-x-2">
    <img className="w-8 h-8 rounded-full" src="/Border.png" alt="" />
    <img className="w-8 h-8 rounded-full" src="/Border (1).png" alt="" />
    <img className="w-8 h-8 rounded-full" src="/Border (2).png" alt="" />
    <img className="w-8 h-8 rounded-full" src="/Border (3).png" alt="" />
  </div>
);

const ScheduleCallSection = () => {
  return (
    <section className="bg-[#F7F6F4] bg-[url('/Group129.svg')] bg-no-repeat bg-center bg-contain py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight text-center md:text-left max-w-3xl mx-auto md:mx-0">
          Ready to Take This Forward? 
          <br className="hidden sm:block" /> Let's <span className="text-[#F38400]">Schedule Call.</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[#151515BF] font-light text-sm text-center md:text-left max-w-3xl mx-auto md:mx-0">
          It maximizes revenue and customer satisfaction by improving
          the efficiency of your existing traffic, reducing costs.
        </p>

        {/* ── MOBILE layout (hidden on lg+) ── */}
        <div className="lg:hidden mt-8 flex flex-col gap-0 relative">
           <img
    src="/Group 130 (1).svg"
    alt=""
    className="absolute inset-0 w-full h-[550px] object-cover pointer-events-none"
    aria-hidden="true"
  />


          {/* Top 2 call cards */}
          <div className="z-10 grid grid-cols-2 gap-1">
            {callTypes.slice(0, 2).map((item) => (
              <div key={item.title} className={` rounded-xl px-5 py-5`}>
                <p className="text-sm font-medium text-[#151515]">{item.title}</p>
                <AvatarRow />
              </div>
            ))}
          </div>

          {/* Main image card */}
          <div className="relative mt-3 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/robin.png"
              alt="schedule call"
              className="w-full h-[200px] object-cover"
            />
            {/* Buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-3 whitespace-nowrap">
              <button className="bg-white px-4 py-3 rounded-full shadow text-xs font-medium flex items-center gap-2">
                <CalendarDays size={16} /> Schedule A Call
              </button>
              <button className="bg-[#F38400] text-white px-5 py-3 rounded-full shadow text-xs font-medium">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Bottom 2 call cards */}
          <div className="z-10  grid grid-cols-2 gap-1 mt-3">
            {callTypes.slice(2).map((item) => (
              <div key={item.title} className={`rounded-xl px-5 py-5`}>
                <p className="text-sm font-medium text-[#151515]">{item.title}</p>
                <AvatarRow />
              </div>
            ))}
          </div>

        </div>

        {/* ── DESKTOP layout (hidden on mobile) ── */}
        <div className="hidden lg:block">
          <div className="relative mt-10 flex justify-center">

            {/* Main card */}
            <div className="bg-white px-2 relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="/robin.png"
                alt="schedule call"
                className="w-full max-w-[650px] h-[350px] object-cover rounded-t-xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-row gap-4">
                <button className="bg-white px-5 py-3 rounded-full shadow text-xs font-medium flex items-center justify-center gap-2">
                  <CalendarDays size={18} /> Schedule A Call
                </button>
                <button className="bg-[#F38400] text-white px-5 py-3 rounded-full shadow text-xs font-medium">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* LEFT FLOATING BOXES */}
            <div className="absolute left-0 top-24 text-left">
              <div className="px-6 py-4 rounded-xl mb-8">
                <p className="text-sm text-gray-600">On boarding Call</p>
                <div className="flex mt-2 -space-x-2">
                  <img className="w-7 h-7 rounded-full" src="/Border.png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (1).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (2).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (3).png" alt="" />
                </div>
              </div>
              <div className="px-6 py-4 rounded-xl">
                <p className="text-sm text-gray-600">Discovery Call</p>
                <div className="flex mt-2 -space-x-2">
                  <img className="w-7 h-7 rounded-full" src="/Border.png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (1).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (2).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (3).png" alt="" />
                </div>
              </div>
            </div>

            {/* RIGHT FLOATING BOXES */}
            <div className="absolute right-0 top-24 text-left">
              <div className="px-6 py-4 rounded-xl mb-8">
                <p className="text-sm text-gray-600">Regular Catchup</p>
                <div className="flex mt-2 -space-x-2">
                  <img className="w-7 h-7 rounded-full" src="/Border.png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (1).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (2).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (3).png" alt="" />
                </div>
              </div>
              <div className="px-6 py-4 rounded-xl">
                <p className="text-sm text-gray-600">Final Delivery Call</p>
                <div className="flex mt-2 -space-x-2">
                  <img className="w-7 h-7 rounded-full" src="/Border.png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (1).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (2).png" alt="" />
                  <img className="w-7 h-7 rounded-full" src="/Border (3).png" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ScheduleCallSection;