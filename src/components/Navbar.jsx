import { useState } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "services", label: "Services" }, // changed
    { id: "audit", label: "AI Website Audit", href: "/" },
    { id: "team", label: "Meet The Team", href: "#team" },
  ];

  const services = [
    { label: "Website Development", href: "#" },
    { label: "D2C Store Development", href: "#" },
    { label: "MVP Development", href: "#" }
  ];

  return (
    <nav className="relative border-b border-[#00000024]">
      <div className="relative max-w-full px-6 md:px-10 lg:px-16 h-[70px] md:h-[90px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[100px] md:w-[130px]">
            <img src="/logo.png" alt="logo" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 lg:gap-10 items-center">

          {navLinks.map((link) => {
            if (link.id === "services") {
              return (
                <div
                  key={link.id}
                  className="relative group"
                >
                  <button className="flex items-center gap-1 text-[16px]">
                    {link.label}
                    <ChevronDown size={16} />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-20">
                    {services.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="py-2 text-sm hover:text-[#F38400]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
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
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden z-20">
          {open ? <X size={25} className="text-[#F38400]" /> : <img src="/Frame 16.svg" />}
        </button>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#F38400] text-white text-sm px-6 py-2.5 rounded-full">
            Get In Touch
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#1515151A] bg-[#EFF3FF] px-6 pb-6 pt-4 flex flex-col gap-4">

          {navLinks.map((link) => {
            if (link.id === "services") {
              return (
                <div key={link.id}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-[16px]"
                  >
                    Services
                    <ChevronDown size={16} />
                  </button>

                  {servicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {services.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}  
                          className="text-sm"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false);
                }}
                className={`text-[16px] pb-1
                  ${active === link.id 
                    ? "border-b-2 border-dotted border-[#F38400]" 
                    : ""}
                `}
              >
                {link.label}
              </a>
            );
          })}

          <button className="flex items-center gap-2 bg-[#F38400] text-white text-sm px-6 py-2.5 rounded-full">
            Get In Touch
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}