import { MdThumbDown, MdThumbUp } from "react-icons/md";

const leftItems = [
  {
    title: "You're Focused on Growth",
    desc: "You have product-market fit and are committed to scaling revenue, not just launching another Shopify store.",
  },
  {
    title: "You Value Proven Expertise",
    desc: "You're looking for a long-term partner with deep D2C and Shopify experience—not trial-and-error execution.",
  },
  {
    title: "You Care About the Experience",
    desc: "You understand that design, UX, and conversion directly impact revenue—and you want it done right.",
  },
  {
    title: "You Believe in Data, Not Guesswork",
    desc: "You value CRO, testing, and performance insights over opinions, trends, or vanity design awards.",
  },
];

const rightItems = [
  {
    title: "You Don't Trust the Process",
    desc: "You prefer to micromanage every detail instead of partnering with a team that leads with strategy and experience.",
  },
  {
    title: "You're Chasing Short-Term Wins",
    desc: "You're only looking for quick sales without investing in long-term brand and revenue growth.",
  },
  {
    title: "You Resist Change",
    desc: "You're unwilling to adapt your Shopify store based on data, customer behavior, or market shifts.",
  },
  {
    title: "You Believe in Data, Not Guesswork",
    desc: "You value CRO, testing, and performance insights over opinions, trends, or vanity design awards.",
  },
];

export default function RightPartnerSection() {
  return (
    <>
      <style>{`
        @keyframes glowPulse {
          0%   { opacity: 0.55; transform: translate(-50%, -50%) scale(0.93); }
          50%  { opacity: 1; transform: translate(-50%, -50%) scale(1.07); }
          100% { opacity: 0.55; transform: translate(-50%, -50%) scale(0.93); }
        }
        .glow-l1 { animation: glowPulse 3s ease-in-out infinite; }
        .glow-l2 { animation: glowPulse 3s ease-in-out infinite; animation-delay: .5s; }
        .glow-l3 { animation: glowPulse 3s ease-in-out infinite; animation-delay: 1s; }
      `}</style>

      <section className="py-14 md:py-20 px-6 md:px-12 lg:px-16 overflow-hidden border border-[#1515151A] bg-[#F7F6F4]">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center px-5 py-[7px] rounded-full border border-[#1515151A] text-[10px] text-[#151515] mb-6">
            Your Match
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
            Are We the Right <span className="text-[#F38400]">Partner for You?</span>
          </h2>
        </div>

        {/* ── MOBILE layout (hidden on lg+) ── */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Circle */}
          <div className="relative flex items-center justify-center flex-shrink-0 w-[260px] h-[260px]">
            <div className="glow-l1 absolute rounded-full pointer-events-none" style={{ width:"140%", height:"140%", top:"50%", left:"50%", background:"radial-gradient(circle, rgba(255,150,90,0.18) 0%, rgba(255,110,50,0.08) 50%, transparent 70%)", filter:"blur(32px)" }} />
            <div className="glow-l2 absolute rounded-full pointer-events-none" style={{ width:"110%", height:"110%", top:"50%", left:"50%", background:"radial-gradient(circle, #FF59244D 0%, #FF592400 55%, transparent 75%)", filter:"blur(16px)" }} />
            <div className="glow-l3 absolute rounded-full pointer-events-none" style={{ width:"80%", height:"80%", top:"50%", left:"50%", background:"radial-gradient(circle, rgba(255,190,150,0.50) 0%, rgba(255,130,70,0.28) 52%, transparent 72%)", filter:"blur(8px)" }} />
            {/* LEFT THUMB */}
            <div className="absolute z-20 flex items-center left-[-24px] top-1/2 -translate-y-1/2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-500 text-lg shadow-sm"><MdThumbUp /></div>
              <div className="w-8 h-[1px] bg-gray-300" />
            </div>
            {/* RIGHT THUMB */}
            <div className="absolute z-20 flex items-center right-[-24px] top-1/2 -translate-y-1/2">
              <div className="w-8 h-[1px] bg-gray-300" />
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 text-lg shadow-sm"><MdThumbDown /></div>
            </div>
            {/* WHITE CIRCLE */}
            <div className="relative z-10 rounded-full bg-white flex items-center justify-center w-[180px] h-[180px]" style={{ boxShadow:"0 2px 32px 0 rgba(255,100,40,0.10), 0 1px 6px rgba(0,0,0,0.05)" }}>
              <div className="text-center px-4">
                <p className="text-base font-bold tracking-wide text-[#151515]">THE BRAIN</p>
                <p className="text-base font-bold tracking-wide text-[#151515]">BURNERS</p>
              </div>
            </div>
          </div>

          {/* All items listed vertically — left items first, then right */}
          <div className="flex flex-col gap-5 w-full border-l-1 border-[#F38400] pl-5">
            {[...leftItems, ...rightItems].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-[#151515] text-base mb-1">{item.title}</h3>
                <p className="text-[#151515BF] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TABLET / DESKTOP layout (hidden on mobile) ── */}
        <div className="hidden lg:flex max-w-6xl mx-auto flex-row items-center justify-between gap-20">

          {/* LEFT ITEMS */}
          <div className="flex flex-col gap-8 text-left">
            {leftItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-medium text-gray-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-[#151515BF] max-w-sm text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTER CIRCLE */}
          <div className="relative flex items-center justify-center flex-shrink-0 w-[340px] h-[340px]">
            <div className="glow-l1 absolute rounded-full pointer-events-none" style={{ width:"140%", height:"140%", top:"50%", left:"50%", background:"radial-gradient(circle, rgba(255,150,90,0.18) 0%, rgba(255,110,50,0.08) 50%, transparent 70%)", filter:"blur(32px)" }} />
            <div className="glow-l2 absolute rounded-full pointer-events-none" style={{ width:"110%", height:"110%", top:"50%", left:"50%", background:"radial-gradient(circle, #FF59244D 0%, #FF592400 55%, transparent 75%)", filter:"blur(16px)" }} />
            <div className="glow-l3 absolute rounded-full pointer-events-none" style={{ width:"80%", height:"80%", top:"50%", left:"50%", background:"radial-gradient(circle, rgba(255,190,150,0.50) 0%, rgba(255,130,70,0.28) 52%, transparent 72%)", filter:"blur(8px)" }} />
            {/* LEFT THUMB */}
            <div className="absolute z-20 flex items-center left-[-52px] top-1/2 -translate-y-1/2">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-green-500 text-lg"><MdThumbUp /></div>
              <div className="w-14 h-[1px] bg-gray-300" />
            </div>
            {/* RIGHT THUMB */}
            <div className="absolute z-20 flex items-center right-[-52px] top-1/2 -translate-y-1/2">
              <div className="w-14 h-[1px] bg-gray-300" />
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-red-500 text-lg"><MdThumbDown /></div>
            </div>
            {/* WHITE CIRCLE */}
            <div className="relative z-10 rounded-full bg-white flex items-center justify-center w-[234px] h-[234px]" style={{ boxShadow:"0 2px 32px 0 rgba(255,100,40,0.10), 0 1px 6px rgba(0,0,0,0.05)" }}>
              <div className="text-center px-4">
                <p className="text-lg font-bold tracking-wide text-[#151515]">THE BRAIN</p>
                <p className="text-lg font-bold tracking-wide text-[#151515]">BURNERS</p>
              </div>
            </div>
          </div>

          {/* RIGHT ITEMS */}
          <div className="flex flex-col gap-8 text-left">
            {rightItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-medium text-gray-900 text-base mb-1.5">{item.title}</h3>
                <p className="text-[#151515BF] max-w-sm text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}