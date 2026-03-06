

const BrandWork = [
  {
    id: "01",
    preview: "/whytbbimg1.png",   // big top image
    title: "AOV, CV & Sales",
    desc: "Boosting AOV increases revenue per purchase, improving CVR turns more visitors into customers, and higher sales ensure sustainable growth.",
  },
  {
    id: "02",
    preview: "/whytbbimg2.png",   // big top image
    title: "Revenue > Profit",
    desc: "More revenue enhances profitability and cash flow, leading to growth and better audience insights.",
  },
  {
    id: "03",
    preview: "/whytbbimg3.png",   // big top image
    title: "Bounce Rate & CLV",
    desc: "Reducing bounce rates creates loyal, repeat customers, fostering long-term growth and a strong brand community.",
  },
  {
    id: "04",
    preview: "/whytbbimg4.png",   // big top image
    title: "CAC + CAR",
    desc: "Understanding your audience cuts acquisition costs, reduces cart abandonment, and boosts sales, opening up new sales opportunities.",

  }
];

export default function WhyTBB() {
  return (
    <section className="w-full bg-[#F7F6F4] py-20 px-6 md:px-8 lg:px-20">

      {/* Header */}
      <div className="text-center mb-10 px-6">
        <span className="inline-flex items-center px-5 py-[7px] 
                        rounded-full border border-[#1515151A] 
                        text-[10px] text-[#151515] mb-6">
          CRO & UXO
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
          Why <span className="text-[#F38400]">The Brain Burners?</span>
        </h2>
        <p className="text-[#151515BF] text-center text-sm font-light max-w-md mx-auto mt-4">
         It maximizes revenue and customer satisfaction by improving the efficiency of your existing traffic, reducing costs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {BrandWork.map((brand) => (
          <div key={brand.id}>

            <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col items-center">
              <span className="items-center bg-[#FFE926] mt-8 px-5 py-[7px] 
                        rounded-full
                        text-[10px] text-[#151515] mb-6">
                CRO & UXO
              </span>
              <p className="text-lg font-medium text-[#333333] mb-2 ">
                {brand.title}
              </p>
              <p className="text-xs font-light text-[#151515BF] text-center mb-4 px-8">
                {brand.desc}
              </p>
              {/* TOP IMAGE */}
              <div className="w-full h-[280px]">
                <img
                  src={brand.preview}
                  alt="brand preview"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}