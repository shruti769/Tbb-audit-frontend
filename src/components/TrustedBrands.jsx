const logos = [
  { name: "jade forest", src: "/brand1.png", w: 160, h: 48 },
  { name: "blissclub", src: "/brand2.png", w: 120, h: 48 },
  { name: "oyehappy", src: "/brand3.png", w: 120, h: 48 },
  { name: "MOXIE BEAUTY", src: "/brand4.png", w: 80, h: 48 },
  { name: "MyneeMoe", src: "/brand5.png", w: 130, h: 48 },
  { name: "pink moor", src: "/brand6.png", w: 100, h: 56 },

  { name: "GlamZei", src: "/brand7.png", w: 180, h: 48 },
  { name: "MenoVeda", src: "/brand8.png", w: 180, h: 48 },
  { name: "POSTERIZED", src: "/brand9.png", w: 160, h: 40 },
  { name: "AMINU", src: "/brand10.png", w: 130, h: 48 },
  { name: "FRAGANOTE", src: "/brand11.png", w: 130, h: 48 },
  { name: "NEESH", src: "/brand12.png", w: 130, h: 52 },

  { name: "khet", src: "/brand13.png", w: 90, h: 52 },
  { name: "Cup.ji", src: "/brand14.png", w: 130, h: 52 },
  { name: "the cinnamon kitchen", src: "/brand15.png", w: 160, h: 60 },
  { name: "the Mad nose", src: "/brand16.png", w: 160, h: 60 },
];

function LogoImage({ name, src, w, h }) {
  return (
    <div
      style={{ maxWidth: w }}
      className="flex items-center justify-center w-[90px] sm:w-[110px] md:w-[130px] lg:w-auto"
    >
      <img
        src={src}
        alt={name}
        className="object-contain w-full h-auto"
      />
    </div>
  );
}

export default function TrustedBrands() {
  const row1 = logos.slice(0, 6);
  const row2 = logos.slice(6, 12);
  const row3 = logos.slice(12);

  return (
    <section className="w-full bg-[#F7F6F4] py-12 px-6">
      
      <p className="text-center text-sm md:text-[15px] text-[#15151566] tracking-wide mb-10 md:mb-12">
        Trusted by leading brands
      </p>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {[row1, row2, row3].map((row, i) => (
          <div
            key={i}
            className="flex flex-wrap items-center justify-center 
                       gap-x-6 md:gap-x-10 gap-y-8"
          >
            {row.map((logo) => (
              <LogoImage key={logo.name} {...logo} />
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}