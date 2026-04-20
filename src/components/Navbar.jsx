"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [activeService, setActiveService] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", href: "https://thebrainburners.io/home" },
    { id: "about", label: "About Us", href: "https://thebrainburners.io/about" },
    { id: "services", label: "Services", href: "#" },
    { id: "case-studies", label: "Case Studies", href: "https://thebrainburners.io/case_studies" },
    { id: "audit", label: "AI Website Audit", href: "/" },
    { id: "team", label: "Meet The Team", href: "https://thebrainburners.io/team" },
  ];

  const services = [
    { label: "Revenue-Driven Websites", href: "https://thebrainburners.io/all_services" },
    { label: "Conversion-Focused D2C Stores", href: "https://thebrainburners.io/coming_soon" },
    { label: "Launch-Ready MVPs", href: "https://thebrainburners.io/coming_soon" },
  ];

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="relative border-b border-[#00000024]">
      <div className="relative max-w-full px-6 md:px-10 lg:px-16 h-[70px] md:h-[90px] flex items-center justify-between">
      {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden ">
          <img src="/Frame 16.svg" className="h-7 w-7" />
        </button>

        {/* Logo (centered on mobile) */}
  <div className="block md:hidden absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:w-[130px]">
    <img
      src="/logo.png"
      alt="logo"
      className="w-[100px] md:w-full h-auto object-contain"
    />
  </div>

        {/* Logo */}
        <div className="w-[100px] md:w-[130px]">
          <img src="/logo.png" alt="logo" className="hidden md:block w-full h-auto object-contain" />
        </div>
     

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">

          {navLinks.map((link) => {
            if (link.id === "services") {
              return (
                <div key={link.id} className="relative group">
                  <button className="flex items-center gap-1 text-[16px]">
                    Services <ChevronDown size={16} />
                  </button>

                  <div className="absolute top-full  left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-4 min-w-[240px] z-20">
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
                className={`text-[16px] pb-1 ${
                  active === link.id
                    ? "border-b-2 border-dotted border-[#F38400]"
                    : "border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() =>
              window.open(
                "https://cal.com/robin-thebrainburners.io/audit-with-robin",
                "_blank"
              )
            }
            className="flex items-center gap-2 bg-[#F38400] text-white text-sm px-6 py-2.5 rounded-full"
          >
            Get In Touch <ArrowRight size={16} />
          </button>
        </div>

  
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute z-10 left-0 top-0 h-screen w-[82vw] max-w-[340px] bg-[#fff] px-5 py-6 shadow-lg transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <img src="/logo.png" alt="logo" className="w-[90px]" />
            <button onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">

            {navLinks.map((item,index) => {
              if (item.id === "services") {
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex  font-bold justify-between w-full px-3 py-3  rounded-lg hover:bg-[#fff3e4]"
                    >
                      Services
                 
                    </button>

                    
                      <div className="ml-10 flex flex-col">
                       {services.map((s) => (
  <a
    key={s.label}
    href={s.href}
    onClick={() => {
      setActiveService(s.label); // 👈 track active
      setOpen(false);
    }}
    className={`flex items-center gap-4 py-2 font-bold text-[14px] ${
      activeService === s.label
        ? "text-black border-b border-dashed border-[#F38400]"
        : "text-black/70 hover:text-[#F38400]"
    }`}
  >
    <div className="h-2 w-2 rounded-full bg-[#CECECE]"></div>
    {s.label}
  </a>
))}

                        
                      </div>
                    
                  </div>
                );
              }

              return (
                <div className="flex flex-col" key={item.id}>
                <a
             
                  href={item.href}
                  onClick={() => {
                    setActive(item.id);
                    setOpen(false);
                  }}
                  className={`px-3 py-4 font-bold rounded-lg ${
                    active === item.id
                      ? "bg-[#FFEBD3] text-black border-b border-[#F38400]"
                      : "text-black/70 hover:bg-[#fff3e4]"
                  }`}
                >
                  {item.label}
                </a>
                 {/* Divider (not after last item) */}
    {index !== navLinks.length - 1 && (
      <div className="w-[80%] mx-auto h-[1px] bg-[#EBEBEB]" />
    )}
</div>
              );
            })}
          </div>
<div className="flex justify-center">
          {/* CTA */}
          <button
            onClick={() =>
              window.open(
                "https://cal.com/robin-thebrainburners.io/audit-with-robin",
                "_blank"
              )
            }
            className="mt-6 w-[80%] mx-auto bg-[#F38400] text-white py-3 rounded-full"
          >
            Book A Strategy Call
          </button>
          </div>
        </aside>
      </div>
    </nav>
  );
}