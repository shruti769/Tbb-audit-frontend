import React from "react";
import CtaButton from "@/components/all_services/CtaButton";

const socialLinks = [
  {
    src: "/assets/services/social-instagram.svg",
    alt: "Instagram",
    href: "#",
    w: 36,
    h: 35,
  },
  {
    src: "/assets/services/social-linkedin.svg",
    alt: "LinkedIn",
    href: "#",
    w: 34,
    h: 34,
  },
  {
    src: "/assets/services/social-youtube.svg",
    alt: "YouTube",
    href: "#",
    w: 34,
    h: 34,
  },
];

const footerNavItems = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Case-Studies", href: "/case_studies" },
  { label: "AI Website Audit", href: "/home#ai-website-audit" },
  { label: "Meet The Team", href: "/home#meet-the-team" },
];

export default function FooterSection() {
  return (
    <footer className="relative h-[850px] min-[1900px]:h-[1000px] bg-[#EFF3FF] overflow-hidden [font-family:var(--font-satoshi)]">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute opacity-[60%] bottom-0 left-0 w-full h-auto min-h-full scale-[1.4] origin-bottom object-cover"
        aria-hidden="true"
      >
        <source src="/assets/services/footer.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex pt-44 w-full max-w-[1264px] flex-col items-center px-4 text-center sm:px-5 xl:px-6">
        
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-[26px]">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[7.33px] border-[2px] border-[#f4f4f4] bg-white/30"
              aria-label={link.alt}
            >
              <img
                src={link.src}
                alt={link.alt}
                width={link.w}
                height={link.h}
                className="lg:w-[26px]"
              />
            </a>
          ))}
        </div>

        <h2 className="pt-10 text-[34px] text-[#353535] drop-shadow-[0_2px_22px_rgba(0,0,0,0.13)] sm:text-[52px] lg:text-[55px] lg:leading-[64px]">
          THE BRAIN BURNERS
        </h2>

        <p className="mt-3 max-w-[893px] text-[15px] leading-normal text-[#353535] drop-shadow-[0_4px_14px_rgba(0,0,0,0.13)] sm:text-[18px] lg:mt-[10px] lg:text-[20px]">
          High-converting websites designed to turn visitors into leads,
          customers, and growth.
        </p>

        <div className="mt-8 lg:mt-9 scale-[0.8]">
          <CtaButton
            label="Let's Build Your Website"
            variant="black"
            className="w-full max-w-[378px]"
          />
        </div>

        <div className="hidden lg:block lg:flex-1" />

        <nav className="lg:mt-30 hidden w-full items-center justify-center gap-[70px] text-[20px] leading-normal text-black lg:flex">
          {footerNavItems.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="absolute bottom-4 right-10 text-[12px] leading-normal text-[#353535] xl:text-[20px]">
        &copy; All Rights Reserved By The Brain Burners 2026
      </p>
    </footer>
  );
}