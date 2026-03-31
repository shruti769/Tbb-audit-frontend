import { useEffect, useState } from "react";
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  User,
  Briefcase,
  Layers,
  Sparkles,
  Users
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [servicesOpen, setServicesOpen] = useState(false);

const navLinks = [
  { id: "home", label: "Home", href: "https://thebrainburners.io/home", icon: Home },
  { id: "about", label: "About Us", href: "https://thebrainburners.io/about", icon: User },
  { id: "services", label: "Services", href:"https://thebrainburners.io/all_services", icon: Briefcase },
  { id: "case-studies", label: "Case Studies", href:"https://thebrainburners.io/case_studies", icon: Layers },
  { id: "audit", label: "AI Website Audit", href: "/", icon: Sparkles },
  { id: "team", label: "Meet The Team", href: "https://thebrainburners.io/team", icon: Users },
];

  const services = [
    { label: "Website Development", href: "https://thebrainburners.io/all_services" },
    { label: "D2C Store Development", href: "https://thebrainburners.io/all_services" },
    { label: "MVP Development", href: "https://thebrainburners.io/all_services" }
  ];

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

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

     {/* ── Mobile Drawer ── */}
<div
  className={`fixed inset-0 z-[60] md:hidden ${
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
    className={`absolute right-0 top-0 h-screen w-[75vw] max-w-[340px] min-w-[240px]
    bg-[#EFF3FF] px-5 py-5 shadow-[-12px_0_30px_rgba(31,38,135,0.25)]
    transition-transform duration-300 ease-out
    ${open ? "translate-x-0" : "translate-x-full"}`}
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <p className="text-[20px] font-semibold">Menu</p>
      <button onClick={() => setOpen(false)}>
        <X size={22} />
      </button>
    </div>

    {/* Links */}
   <div className="flex flex-col gap-1">
  {navLinks.map((link) => {
    const Icon = link.icon;

    // 👉 SERVICES WITH DROPDOWN
    if (link.id === "services") {
      return (
        <div key={link.id}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`flex items-center justify-between w-full px-3 py-3 rounded-lg transition
              ${
                active === "services"
                  ? "bg-[#fff3e4] text-[#F38400]"
                  : "hover:bg-[#fff3e4]"
              }`}
          >
            <div className="flex items-center gap-3">
              <Icon size={18} />
              <span>{link.label}</span>
            </div>

            <ChevronDown
              size={16}
              className={`transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {servicesOpen && (
            <div className="ml-9 flex flex-col mt-1">
              {services.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-black/70 hover:text-[#F38400] hover:bg-[#fff3e4] rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    // 👉 NORMAL LINKS WITH ICONS
    return (
      <a
        key={link.id}
        href={link.href}
        onClick={() => {
          setActive(link.id);
          setOpen(false);
        }}
        className={`flex items-center gap-3 px-3 py-3 rounded-lg transition
          ${
            active === link.id
              ? "bg-[#fff3e4] text-[#F38400]"
              : "hover:bg-[#fff3e4]"
          }`}
      >
        <Icon size={18} />
        <span>{link.label}</span>
      </a>
    );
  })}
</div>

    {/* CTA */}
    <div className="mt-6">
      <button className="w-full flex items-center justify-center gap-2 bg-[#F38400] text-white py-3 rounded-full">
        Get In Touch
        <ArrowRight size={16} />
      </button>
    </div>
  </aside>
</div>
    </nav>
  );
}