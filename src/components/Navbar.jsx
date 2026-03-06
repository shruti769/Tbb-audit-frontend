import { useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-[#F7F6F4] border-b border-[#1515151A]">

      {/* Navbar container */}
      <div className="relative max-w-full px-6 md:px-10 lg:px-16 h-[68px] flex flex-row-reverse md:flex-row items-center justify-between">

        {/* Left Nav Links (hidden on mobile) */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#"
            className="text-[12px] border-r border-[#15151533] pr-4 font-lexend text-[#151515] tracking-[-0.01em]"
          >
            Case Studies
          </a>

          <a
            href="#"
            className="text-[12px] font-lexend text-[#151515] tracking-[-0.01em]"
          >
            FAQs
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-20"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Right CTA (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-regular text-[#1a1a1a]
                       px-4 py-3 rounded-full bg-white"
          >
            <CalendarDays size={16} />
            Schedule A Call
          </a>

          <button
            className="bg-[#F38400] text-white text-xs font-regular
                       px-5 py-3 rounded-full tracking-[-0.01em]"
          >
            Get In Touch
          </button>
        </div>

      </div>

    
      {/* Center Logo */}
<div className="absolute md:absolute top-0 left-0 w-full h-[68px] flex items-center justify-center pointer-events-none">
  <div className="w-[80px] md:w-[100px] pointer-events-auto">
    <img
      src="/logo.png"
      alt="logo"
      className="w-full h-auto object-contain"
    />
  </div>
</div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#1515151A] bg-[#F7F6F4] px-6 pb-6 pt-4 flex flex-col gap-4">

          <a className="text-sm">Case Studies</a>
          <a className="text-sm">FAQs</a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 text-sm
                       px-4 py-3 rounded-full bg-white"
          >
            <CalendarDays size={16} />
            Schedule A Call
          </a>

          <button
            className="bg-[#F38400] text-white text-sm
                       px-5 py-3 rounded-full"
          >
            Get In Touch
          </button>

        </div>
      )}

    </nav>
  );
}