import { useState } from "react";

const iconConversion = "/store-icon2.png";
const iconContent = "/store-icon3.png";
const iconPerformance = "/store-icon1.png";

const features = [
  {
    icon: iconConversion,
    title: "Conversion-Led UI/UX",
    description:
      "Every layout, interaction, and flow is designed to reduce friction and guide users smoothly from product discovery to checkout.",
  },
  {
    icon: iconContent,
    title: "High-Intent Content & Visuals",
    description:
      "Clear messaging and product-led visuals that build trust, answer objections, and move customers toward purchase.",
  },
  {
    icon: iconPerformance,
    title: "Performance-First Shopify Development",
    description:
      "Fast, scalable Shopify builds optimized for speed, mobile performance, and seamless integrations — built to support growth, not break under it.",
  },
];

export default function ShopifyStore() {
  return (
    <section className="bg-white py-10 md:py-20 px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ── MOBILE layout (hidden on md+) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center px-5 py-[7px] rounded-full border border-[#1515151A] text-[10px] text-[#151515]">
              Shopify stores built to scale revenue
            </span>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-medium leading-tight text-[#151515] mb-3">
              <span className="text-[#F38400]">Included</span> in Every
              <br />
              Shopify Store
            </h2>
            <p className="text-[#151515BF] text-sm font-light">
              Shopify stores built to turn paid traffic into revenue not just look good on launch day.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-[#F6F6F6]  rounded-lg p-6 flex flex-col gap-4">
            <p className="text-[#151515] font-medium text-base leading-snug">
              Ready to turn your Shopify store into a revenue engine?
            </p>
            <div>
              <button className="bg-[#F38400] hover:bg-[#d96e14] transition-colors text-white font-medium text-sm rounded-full px-6 py-3">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Feature list — vertical*/}
          <div className="flex flex-col gap-6 border-l-1 border-[#F38400] pl-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-[#151515] font-semibold text-lg leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#15151599] font-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TABLET / DESKTOP layout (hidden on mobile) ── */}
        <div className="hidden md:flex flex-col-reverse md:flex-row gap-6 lg:gap-20 items-center md:items-end">
          {/* Left: CTA card */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#F6F6F6] max-w-full md:max-w-[350px] rounded-lg p-4 lg:p-12 flex flex-col gap-5">
              <p className=" text-[#151515] font-medium text-lg leading-snug">
                Ready to turn your Shopify store into a revenue engine?
              </p>
              <button className="bg-[#F38400] hover:bg-[#d96e14] transition-colors text-white font-medium text-sm rounded-full px-6 py-3 w-fit">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right: Heading + Feature cards */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center px-5 py-[7px] rounded-full border border-[#1515151A] text-[10px] text-[#151515] mb-6">
                Shopify stores built to scale revenue
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#151515] mb-4">
                <span className="text-[#F38400]">Included</span> in Every
                <br />
                Shopify Store
              </h2>
              <p className="text-[#151515BF] text-sm font-light max-w-sm">
                Shopify stores built to turn paid traffic into revenue not just look good on launch day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white max-w-full md:max-w-[260px] pl-0 md:pl-6 first:pl-0 flex flex-col gap-5 pr-6 md:border-r md:border-[#1515151A] last:border-none"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <h3 className="text-[#151515] font-medium text-lg max-w-[200px] leading-snug mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#15151599] font-light text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}