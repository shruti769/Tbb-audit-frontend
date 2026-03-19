import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "case", label: "Case-Studies", href: "#case-studies" },
    { id: "audit", label: "AI Website Audit", href: "/" },
    { id: "team", label: "Meet The Team", href: "#team" },
  ];

  return (
    <nav className="relative border-b border-[#00000024]">

      <div className="relative max-w-full px-6 md:px-10 lg:px-16 h-[70px] md:h-[90px] flex flex-row md:flex-row items-center justify-between">

        {/* Logo */}
        <div className="flex items-center justify-center pointer-events-none">
          <div className="w-[100px] md:w-[130px] pointer-events-auto">
            <img src="/logo.png" alt="logo" className="w-full h-auto object-contain" />
          </div>
        </div>  

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 lg:gap-10 items-center">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActive(link.id)}
              className={`text-[16px] pb-1
                ${active === link.id 
                  ? "border-b-2 border-dotted border-[#F38400]" 
                  : "border-b-2 border-transparent"}
              `}
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-20"
        >
         {open?<X size={25} className="text-[#F38400]"/>:<img src="/Frame 16.svg"/>} 
        </button>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#F38400] text-white text-sm px-6 py-2.5 rounded-full tracking-[-0.01em]">
            Get In Touch
            <ArrowRight size={16}/>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#1515151A] bg-[#EFF3FF] px-6 pb-6 pt-4 flex flex-col items-start gap-4">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActive(link.id);
                setOpen(false);
              }}
              className={`text-[16px]  font-lexend tracking-[-0.01em] pb-1
                ${active === link.id 
                  ? "border-b-2 border-dotted border-[#F38400]" 
                  : ""}
              `}
            >
              {link.label}
            </a>
          ))}

          <button className="flex items-center gap-2 bg-[#F38400] text-white text-sm px-6 py-2.5 rounded-full tracking-[-0.01em]">
            Get In Touch
            <ArrowRight size={16}/>
          </button>

        </div>
      )}

    </nav>
  );
}