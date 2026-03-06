import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
    {
        image: "/review.png",
        text: "Brain Burners gives critical, data-driven insights that are often overlooked by D2C entrepreneurs, and that’s where they stand out with their unique approach",
        name: "Varun Todi",
        company: "Oye Happy",
        rating: "5.0"
    },
    {
        image: "/review.png",
        text: "Their CRO strategies significantly improved our conversion rate and AOV. Highly recommended for D2C brands.",
        name: "Rahul Sharma",
        company: "Brand Founder",
        rating: "5.0"
    }
];

const Clients = () => {
    return (
        <section className="bg-[#F7F6F4] pb:10 md:pb-30">

            {/* Heading */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium">
                <span className="text-[#F38400]">100+</span> Happy Clients
            </h2>

            <p className="text-[#151515] text-center text-sm font-medium max-w-md mx-auto mt-4">
                Trusted by thousands of people
            </p>

            {/* Slider */}
            <div className="max-w-7xl mx-auto mt-8 md:mt-16 px-6">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div className="grid md:grid-cols-[45%_50%] gap-6 items-center">

                                {/* Image */}
                                <div className="">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rounded-xl w-full h-auto md:h-[500px] object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div>

                                    <p className="text-xl md:text-3xl text-[#555] ">
                                        {item.text}
                                    </p>
                                    <div className="flex items-start justify-between">
                                        <div className="mt-8">
                                            <h4 className="font-regular text-lg md:text-xl">{item.name}</h4>
                                            <p className="text-[#151515BF] font-light text-lg md:text-xl">{item.company}</p>
                                        </div>

                                        {/* Rating */}
                                        <div className="mt-8 inline-flex items-center gap-2 bg-[#F2F2F2] rounded-full px-4 py-2 ">
                                            <span className="text-md font-regular">{item.rating}</span>
                                            <span className="text-[#F38400]">★</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
};

export default Clients;