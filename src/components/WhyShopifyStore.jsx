import { useState } from "react";

const iconConversion = "/store-icon2.png";
const iconContent = "/store-icon3.png";
const iconPerformance = "/store-icon1.png";

const features = [
  {
    icon: iconConversion,
    title: "Post-Launch Optimization Mindset",
    description:
      "We don't design in isolation. Every store is built with CRO and UXO principles so it's ready for testing, optimization, and scale as traffic grows.",
  },
  {
    icon: iconContent,
    title: "Growth-Driven Store Strategy",
    description:
      "You know your product best. We structure your Shopify store around buying intent, product hierarchy, and revenue goals to maximize conversions and order value.",
  },
  {
    icon: iconPerformance,
    title: "Mobile-First, Revenue-Focused UX",
    description:
      "With most D2C traffic coming from mobile, every Shopify store is designed mobile-first to reduce friction, increase trust, and push users toward checkout faster.",
  },
];

export default function WhyShopifyStore() {
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
              Why the <span className="text-[#F38400]">Shopify</span>
              <br /><span className="text-[#F38400]">Stores </span>
              We Build Work
            </h2>
            <p className="text-[#151515BF] text-sm font-light">
              We combine customer psychology, conversion strategy, and performance-first Shopify development to build stores that don't just launch — they scale revenue.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-[#F6F6F6] rounded-lg p-6 flex flex-col gap-4">
            <p className="text-[#151515] font-medium text-base leading-snug">
              Ready to turn your Shopify store into a revenue engine?
            </p>
            <div>
              <button className="bg-[#F38400] hover:bg-[#d96e14] transition-colors text-white font-medium text-sm rounded-full px-6 py-3">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Feature list — vertical */}
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
              <p className="text-[#151515] font-medium text-lg leading-snug">
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
                Why the <span className="text-[#F38400]">Shopify</span>
                <br /><span className="text-[#F38400]">Stores </span>
                We Build Work
              </h2>
              <p className="text-[#151515BF] text-sm font-light max-w-sm">
                We combine customer psychology, conversion strategy, and performance-first Shopify development to build stores that don't just launch — they scale revenue.
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