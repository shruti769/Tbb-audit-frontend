import React from 'react'

const Featured = () => {
    return (
        <section id='case-studies' className="w-full bg-[#151515] py-20 px-6 md:px-8 lg:px-20">
            <div className="text-left">
                <span className="inline-flex items-center px-5 py-[7px] 
                        rounded-full border border-[#FFFFFF26] 
                        text-[10px] text-[#fff] mb-6">
                    CASE STUDY
                </span>

                <h2 className="flex flex-col gap-2 text-3xl sm:text-4xl md:text-5xl text-white font-medium">
                    <span className="text-[#F38400] ">Featured Case Study</span><span>Menoveda</span>
                </h2>
                
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-12'>
                <div className='flex gap-2 bg-[#99D2FB] rounded-lg py-4 md:py-10 px-6'>
                    <div ><img className='w-full-h-full' src='/Rectangle 18.png' /></div>
                    <div ><img className='w-full-h-full' src='/Rectangle 19.png' /></div>
                    <div ><img className='w-full-h-full' src='/Rectangle 20.png' /></div>

                </div>
                <div className='flex gap-2 bg-[#99D2FB] rounded-lg py-4 md:py-10 px-6'>
                    <div ><img className='w-full-h-full' src='/Rectangle 18 (1).png' /></div>
                    <div ><img className='w-full-h-full' src='/Rectangle 19 (1).png' /></div>
                    <div ><img className='w-full-h-full' src='/Rectangle 20 (1).png' /></div>

                </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap  gap-10 items-center justify-center md:justify-between mt-14'>
                <div className="w-[150px] md:w-full text-left py-2 px-4 border-r border-[#FFFFFF26] last:border-none">
                    <div
                        className="inline-flex px-2 py-1 bg-[#FFE926] 
                     rounded-full text-[#151515] text-[10px] font-regular mb-3"
                    >
                        CAC
                    </div>

                    <div style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl  font-medium text-[#fff]">
                        -20%
                    </div>

                    <div className="text-xs font-light mt-2 text-[#FFFFFF99]">
                        New Customer
                    </div>
                </div>
                <div className="w-[150px] md:w-full text-left py-2 px-4 border-r border-[#FFFFFF26] last:border-none">
                    <div
                        className="inline-flex px-2 py-1 bg-[#FFE926] 
                     rounded-full text-[#151515] text-[10px] font-regular mb-3"
                    >
                        CRO
                    </div>

                    <div style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl font-medium text-[#fff]">
                        +45%
                    </div>

                    <div className="text-xs font-light mt-2 text-[#FFFFFF99]">
                        Conversion Rate
                    </div>
                </div>
                <div className="w-[150px] md:w-full text-left py-2 px-4 border-r border-[#FFFFFF26] last:border-none">
                    <div
                        className="inline-flex px-2 py-1 bg-[#FFE926] 
                     rounded-full text-[#151515] text-[10px] font-regular mb-3"
                    >
                        ROAS
                    </div>

                    <div style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl font-medium text-[#fff]">
                        +20%
                    </div>

                    <div className="text-xs font-light mt-2 text-[#FFFFFF99]">
                        Profitable Ad Speed
                    </div>
                </div>
                <div className="w-[150px] md:w-full text-left py-2 px-4 border-r border-[#FFFFFF26] last:border-none">
                    <div
                        className="inline-flex px-2 py-1 bg-[#FFE926] 
                     rounded-full text-[#151515] text-[10px] font-regular mb-3"
                    >
                        CAC
                    </div>

                    <div style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl font-medium text-[#fff]">
                        -30%
                    </div>

                    <div className="text-xs font-light mt-2 text-[#FFFFFF99]">
                        Old Customer
                    </div>
                </div>
                <div className="w-[150px] md:w-full text-left py-2 px-4 border-r border-[#FFFFFF26] last:border-none">
                    <div
                        className="inline-flex px-2 py-1 bg-[#FFE926] 
                     rounded-full text-[#151515] text-[10px] font-regular mb-3"
                    >
                        LP
                    </div>

                    <div style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl font-medium text-[#fff]">
                        +20%
                    </div>

                    <div className="text-xs font-light mt-2 text-[#FFFFFF99]">
                        LP &gt; ATC%
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Featured