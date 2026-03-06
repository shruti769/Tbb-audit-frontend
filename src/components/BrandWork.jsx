import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BrandWork = [
  {
    id: "01",
    preview: "/work1.png",   // big top image
    logo: "/brand-logo1.png",         // logo image
    rating: 5,
    desc: "A clean, conversion-focused wellness store designed for smooth navigation and trust-driven shopping.",
    stats: [
      { label: "CRO", value: "+12%", sub: "Conversion Rate" },
      { label: "AOV", value: "+7%", sub: "Avg. Order Value" },
      { label: "REV", value: "+54%", sub: "Revenue" },
    ],
  },
  {
    id: "02",
    preview: "/work2.png",   // big top image
    logo: "/brand-logo2.png",         // logo image
    rating: 5,
     desc: "A science-led wellness brand redefining hormone health with trust and simplicity.",
    stats: [
      { label: "CRO", value: "+10%", sub: "Conversion Rate" },
      { label: "AOV", value: "+8%", sub: "Avg. Order Value" },
      { label: "REV", value: "+62%", sub: "Revenue" },
    ],
  },
  {
    id: "03",
    preview: "/work3.png",   // big top image
    logo: "/brand-logo3.png",         // logo image
    rating: 5,
    desc: "Blissclub is a performance-led activewear brand designed to make movement effortless and shopping intuitive.",
    stats: [
      { label: "CRO", value: "+15%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+66%", sub: "Revenue" },
    ],
  },
  {
    id: "04",
    preview: "/work4.png",   // big top image
    logo: "/brand-logo4.png",         // logo image
    rating: 5,
    desc: "Glamzei is a D2C beauty brand designed to showcase products clearly and drive confident purchase decisions.",
    stats: [
      { label: "CRO", value: "+11%", sub: "Conversion Rate" },
      { label: "AOV", value: "+09%", sub: "Avg. Order Value" },
      { label: "REV", value: "+56%", sub: "Revenue" },
    ],
  },
  {
    id: "05",
    preview: "/work5.png",   // big top image
    logo: "/brand-logo5.png",         // logo image
    rating: 5,
    desc: "Posterized empowers self-expression through artfully designed posters and a seamless online journey.",
    stats: [
      { label: "CRO", value: "+14%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+44%", sub: "Revenue" },
    ],
  },
  {
    id: "06",
    preview: "/work6.png",   // big top image
    logo: "/brand-logo6.png",         // logo image
    rating: 5,
    desc: "Moxie Beauty is a modern skincare and beauty brand offering high-quality products through a clean.",
    stats: [
      { label: "CRO", value: "+15%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+65%", sub: "Revenue" },
    ],
  },
  {
    id: "07",
    preview: "/work7.png",   // big top image
    logo: "/brand-logo7.png",         // logo image
    rating: 5,
    desc: "Fraganote delivers premium fragrances with a conversion-driven digital experience that turns product interest into confident purchases.",
    stats: [
      { label: "CRO", value: "+11%", sub: "Conversion Rate" },
      { label: "AOV", value: "+13%", sub: "Avg. Order Value" },
      { label: "REV", value: "+54%", sub: "Revenue" },
    ],
  },
   {
    id: "08",
    preview: "/work8.png",   // big top image
    logo: "/brand-logo8.png",         // logo image
    rating: 5,
    desc: "My Neemoe delivers plant-powered skincare with a conversion-driven digital experience that turns intent into purchase.",
    stats: [
      { label: "CRO", value: "+13%", sub: "Conversion Rate" },
      { label: "AOV", value: "+20%", sub: "Avg. Order Value" },
      { label: "REV", value: "+44%", sub: "Revenue" },
    ],
  },
   {
    id: "09",
    preview: "/work9.png",   // big top image
    logo: "/brand-logo9.png",         // logo image
    rating: 5,
    desc: "OyeHappy delivers creative, customised gifts and experiences with a frictionless digital experience that turns browsing into meaningful purchases.",
    stats: [
      { label: "CRO", value: "+14%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+54%", sub: "Revenue" },
    ],
  },
   {
    id: "10",
    preview: "/work10.png",   // big top image
    logo: "/brand-logo10.png",         // logo image
    rating: 5,
    desc: "Neesh Perfumes delivers premium fragrances with a seamless digital experience built to turn discovery into confident purchase decisions.",
    stats: [
      { label: "CRO", value: "+12%", sub: "Conversion Rate" },
      { label: "AOV", value: "+11%", sub: "Avg. Order Value" },
      { label: "REV", value: "+52%", sub: "Revenue" },
    ],
  },
   {
    id: "11",
    preview: "/work11.png",   // big top image
    logo: "/brand-logo11.png",         // logo image
    rating: 5,
    desc: "The Pink Moon delivers stylish fashion & accessories with a seamless digital experience built to turn browsing into confident purchases.",
    stats: [
      { label: "CRO", value: "+08%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+44%", sub: "Revenue" },
    ],
  },
   {
    id: "12",
    preview: "/work12.png",   // big top image
    logo: "/brand-logo12.png",         // logo image
    rating: 5,
    desc: "Khet delivers stylish, trend-driven clothing with a conversion-optimized digital experience that turns discovery into sales.",
    stats: [
      { label: "CRO", value: "+10%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+50%", sub: "Revenue" },
    ],
  },
   {
    id: "13",
    preview: "/work13.png",   // big top image
    logo: "/brand-logo13.png",         // logo image
    rating: 5,
    desc: "Cupji is a curated gifting brand offering unique, heartfelt products through a seamless online experience that drives confident purchases.",
    stats: [
      { label: "CRO", value: "+09%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+46%", sub: "Revenue" },
    ],
  },
   {
    id: "14",
    preview: "/work14.png",   // big top image
    logo: "/brand-logo14.png",         // logo image
    rating: 5,
    desc: "Cinnamon Kitchen delivers gourmet flavors and high-quality kitchen favorites with a seamless digital experience built to turn interest into purchase.",
    stats: [
      { label: "CRO", value: "+12%", sub: "Conversion Rate" },
      { label: "AOV", value: "+11%", sub: "Avg. Order Value" },
      { label: "REV", value: "+45%", sub: "Revenue" },
    ],
  },
   {
    id: "15",
    preview: "/work15.png",   // big top image
    logo: "/brand-logo15.png",         // logo image
    rating: 5,
    desc: "A premium perfume brand crafted for unforgettable scent discovery and purchase.",
    stats: [
      { label: "CRO", value: "+10%", sub: "Conversion Rate" },
      { label: "AOV", value: "+12%", sub: "Avg. Order Value" },
      { label: "REV", value: "+51%", sub: "Revenue" },
    ],
  },
];


export default function BrandWorks() {
  return (
    <section className="w-full bg-[#F7F6F4] py-14 md:py-20">

      {/* Header */}
      <div className="text-center mb-10 md:mb-14 px-4 md:px-6">
        <span
          className="inline-flex items-center px-4 md:px-5 py-[6px]
          rounded-full border border-[#1515151A]
          text-[10px] text-[#151515] mb-4 md:mb-6"
        >
          World Class Brands
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium">
          World Class Brand <span className="text-[#F38400]">Rely On Us</span>
        </h2>
      </div>

      <div className="px-4 md:px-6">
        <Swiper
          spaceBetween={16}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {BrandWork.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="bg-white rounded-xl p-4 md:p-6 overflow-hidden h-full flex flex-col">

                {/* IMAGE */}
                <div className="w-full rounded-xl h-[200px] sm:h-[240px] md:h-[280px] bg-[#EFEAE3]">
                  <img
                    src={brand.preview}
                    alt="brand preview"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>

                <div className="flex flex-col flex-grow">

                  {/* LOGO + RATING */}
                  <div className="flex items-center gap-3 md:gap-4 my-3">
                    <img
                      src={brand.logo}
                      alt="brand logo"
                      className="h-8 md:h-10 w-auto object-contain"
                    />

                    <div className="flex text-[#F38400] text-sm md:text-md">
                      {"★".repeat(brand.rating)}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-xs md:text-sm font-light text-[#151515BF] mb-6 md:mb-8 min-h-[44px]">
                    {brand.desc}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-3">
                    {brand.stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`flex justify-center ${
                          i !== brand.stats.length - 1
                            ? "border-r border-[#1515151A]"
                            : ""
                        }`}
                      >
                        <div className="w-full text-left py-2 px-2 md:px-4">

                          <div
                            className="inline-flex px-2 md:px-3 py-1
                            bg-[#F2F2F2] rounded-full
                            text-[10px] md:text-xs
                            text-[#151515] font-medium mb-2 md:mb-3"
                          >
                            {stat.label}
                          </div>

                          <div className="text-lg md:text-xl font-medium text-[#151515]">
                            {stat.value}
                          </div>

                          <div className="text-[10px] md:text-xs text-[#151515BF]">
                            {stat.sub}
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer note */}
      <p className="text-[#15151580] text-[10px] md:text-xs font-light px-6 md:px-10 pt-8 text-center md:text-left">
        Data as per the 7 day period after the PDP went live. Results may vary depending on various factors.
      </p>

    </section>
  );
}