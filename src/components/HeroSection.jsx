import InfiniteCarousel from "./InfiniteCarousel";
import TrustedBrands from "./TrustedBrands";

export default function HeroSection() {

  return (
    <div className="min-h-screen bg-[#F7F6F4]">

      <section className="pt-[30px] md:pt-[40px] overflow-hidden">

        {/* Trust Badge */}
        <div className="text-center mb-6 md:mb-7 px-4">
          <span
            className="inline-flex items-center px-4 md:px-5 py-[6px] md:py-[7px]
            rounded-full border border-[#1515151A]
            text-[9px] md:text-[10px] font-regular text-[#151515]"
          >
            Trusted By
            <strong className="ml-1">300+ D2C Brands</strong>
          </span>
        </div>

        {/* Headline */}
        <h1
          className="
          text-center
          text-[34px] sm:text-[40px] md:text-5xl
          leading-[1.15]
          font-medium
          text-[#0f0f0f]
         
          mx-auto
          mb-5 md:mb-6
          px-5 md:px-6
          "
        >
          We Build{" "}
          <span className="text-[#F38400]">
            Shopify Stores
          </span>{" "}
          That Convert
        </h1>

        {/* Subheading */}
        <p
          className="
          text-center
          text-[15px] sm:text-[17px] md:text-xl
          leading-relaxed
          text-[#151515]
          max-w-[720px]
          mx-auto
          mb-3
          px-6
          font-regular
          "
        >
          High-performance Shopify experiences designed to turn paid traffic into predictable revenue.
        </p>

        {/* Supporting Line */}
        <p
          className="
          text-center
          text-[13px] sm:text-[14px] md:text-md
          font-semibold
          text-[#151515]
          mb-10 md:mb-12
          px-6
          "
        >
          Every Decision Driven By Customer Behavior And Real Data.
        </p>

        {/* Carousel */}
        <InfiniteCarousel />

        <TrustedBrands />

      </section>

    </div>
  );
}