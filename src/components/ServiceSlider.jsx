import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SERVICES = [
  {
    id: "01",
    title: "Shopify Store",
    desc: "Conversion-focused Shopify stores designed to turn visitors into buyers.",
    icon: "/service1.png",
  },
  {
    id: "02",
    title: "End-to-End Shopify Development",
    desc: "Complete Shopify store builds from strategy and design to launch.",
    icon: "/service2.png",
  },
  {
    id: "03",
    title: "CRO Retainers",
    desc: "Ongoing Shopify optimization to steadily increase conversions and revenue.",
    icon: "/service3.png",
  },
  {
    id: "04",
    title: "CRO Audits",
    desc: "Deep Shopify audits that uncover leaks, friction, and growth opportunities.",
    icon: "/service4.png",
  },
  {
    id: "05",
    title: "Shopify Support & Maintenance",
    desc: "Hands-on Shopify support to keep your store fast, stable, and updated.",
    icon: "/service5.png",
  },
];

export default function ServicesSlider() {
  return (
    <section className="w-full bg-[#fff] py-14 md:py-16">

      {/* Header */}
      <div className="text-center mb-10 px-6">
        <div className="mb-6">
          <span className="inline-flex items-center px-5 py-[7px] 
                           rounded-full border border-[#1515151A] 
                           text-[10px] text-[#151515]">
            Our Services
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Services <span className="text-[#F38400]">We Provide</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="px-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerGroup={1}
          loop={true}
          speed={600}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4.5 },
          }}
        >
          {SERVICES.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="flex flex-col items-center justify-between 
                              bg-[#F7F6F4] rounded-xl 
                              p-6 md:p-8 
                              min-h-[320px] md:h-[350px]">

                {/* Number */}
                <div className="w-8 h-6 rounded-xl bg-black text-white text-xs 
                                flex items-center justify-center mb-3">
                  {service.id}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg text-center text-[#333333] font-medium mb-4">
                  {service.title}
                </h3>

                {/* Icon */}
                <div className="mb-5">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-14 md:h-16 w-auto object-contain"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-center text-[#151515BF] leading-relaxed">
                  {service.desc}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}