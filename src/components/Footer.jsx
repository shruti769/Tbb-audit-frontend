import { CalendarDays } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-6 relative">

      <div className="max-w-5xl mx-auto text-center px-6">

        {/* Logo */}
        <div className="flex justify-center mb-">
          <img
            src="/logo-white.png"
            alt="logo"
            className="w-30 sm:w-45 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl md:text-5xl font-regular mb-10">
          THE BRAIN BURNERS
        </h2>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-16">

          <button className="bg-white text-black px-6 py-2 sm:py-3  rounded-full text-xs font-regular flex items-center gap-2">
            <CalendarDays size={16} /> Schedule A Call
          </button>

          <button className="bg-[#F38400] text-white px-6 py-2 sm:py-3 rounded-full text-xs font-regular">
            Get In Touch
          </button>

        </div>

        {/* Copyright */}
        <p className="text-sm text-[#EFF6FF]">
          © 2025 The Brain Burners. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;