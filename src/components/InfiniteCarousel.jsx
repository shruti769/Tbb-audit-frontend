import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { STORE_CARDS } from "./StoreCards";

export default function InfiniteCarousel() {
  return (
    <div className="w-full py-4 pb-12 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={12}
        loop={true}
        speed={3000}
        allowTouchMove={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="continuous-swiper"
      >
        {STORE_CARDS.map(({ image }, i) => (
          <SwiperSlide
            key={i}
            className="!w-[140px] sm:!w-[180px] md:!w-[200px] lg:!w-[220px]"
          >
            <div className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] 
                            h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
              <img
                src={image}
                alt="store"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}