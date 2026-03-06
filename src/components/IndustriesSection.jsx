const row1 = [
  { label: "Clothing & Accessories", color: "#5CB13E66", icon: "/green-sparkle.png" },
  { label: "Men's Grooming", color: "#99D2FB66", icon: "/blue-sparkle.svg" },
  { label: "Footwear", color: "#FF592466", icon: "/orange-sparkle.svg" },
  { label: "Eyewear", color: "#5CB13E66", icon: "/green-sparkle.png" },
  { label: "Beauty and Skincare", color: "#FF7DD366", icon: "/pink-sparkle.svg" },
  { label: "Home Goods and Bedding", color: "#99D2FB66", icon: "/blue-sparkle.svg" },
  { label: "Travel and Luggage", color: "#FF592466", icon: "/orange-sparkle.svg" },
];

const row2 = [
  { label: "Eyewear", color: "#FF592466", icon: "/orange-sparkle.svg" },
  { label: "Organic & Natural Groceries", color: "#5CB13E66", icon: "/green-sparkle.png" },
  { label: "Meal Kits", color: "#99D2FB66", icon: "/blue-sparkle.svg" },
  { label: "Sustainable Products", color: "#FF7DD366", icon: "/pink-sparkle.svg" },
  { label: "Lingerie & Women's Underwear", color: "#FF592466", icon: "/orange-sparkle.svg" },
  { label: "Personal Care Products", color: "#5CB13E66", icon: "/green-sparkle.png" },
  { label: "Travel and Luggage", color: "#99D2FB66", icon: "/blue-sparkle.svg" },
];

function Pill({ label, color, icon }) {
  return (
    <div
      style={{ border: `1px solid ${color}` }}
      className="flex items-center gap-2 bg-white rounded-full px-5 py-2 whitespace-nowrap select-none"
    >
      <img src={icon} alt="" className="w-5 h-5 object-contain" />
      <span className="text-[#151515] pl-2 font-normal text-xs">{label}</span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 35 }) {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-[90vw] mx-auto">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 h-full w-42 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #faf6f1 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 h-full w-42 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #faf6f1 0%, transparent 100%)",
        }}
      />

      <div
        className={`flex gap-4 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ "--speed": `${speed}s` }}
      >
        {tripled.map((item, i) => (
          <Pill key={i} label={item.label} color={item.color} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left var(--speed, 35s) linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right var(--speed, 35s) linear infinite;
        }
      `}</style>
      
<section className="relative py-20 px-0 overflow-hidden bg-[#F7F6F4]">

  {/* Figma gradient glow */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
    style={{
      background:
        "radial-gradient(70.71% 70.71% at 50% 50%, rgba(255,89,36,0.1) 0%, rgba(255,89,36,0) 100%)",
      filter: "blur(50px)",
    }}
  />
        {/* Header */}
        <div className="text-center mb-10 px-6">
          <span className="inline-flex items-center px-5 py-[7px] rounded-full border border-[#1515151A] text-[10px] text-[#151515] mb-6">
            Serving to Industries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            <span className="text-[#F38400]">Industries</span> We Cater
          </h2>
          <p className="text-[#151515BF] text-center text-sm font-light max-w-md mx-auto mt-4">
            In CRO, increasing AOV boosts revenue per purchase,
            improving CVR turns more visitors into customers.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="flex flex-col gap-4 mb-14">
          <MarqueeRow items={row1} direction="left" speed={30} />
          <MarqueeRow items={row2} direction="right" speed={28} />
        </div>

        {/* CTA */}
        <div className="flex justify-center px-6">
          <button className="bg-[#F38400] hover:bg-[#d96e14] transition-colors text-white font-medium text-xs rounded-full px-6 py-3">
            Get In Touch
          </button>
        </div>
      </section>
    </>
  );
}