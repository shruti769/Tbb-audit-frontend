import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const HeroSection = () => {

  const navigate = useNavigate();
  const [url, setUrl] = useState("");

  const startAudit = () => {
    let formattedUrl = url.trim();

    if (!formattedUrl || !formattedUrl.includes(".")) {
      toast.error("Please enter a valid website URL");
      return;
    }

    // ✅ Add protocol if missing
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = "https://" + formattedUrl;
    }

    navigate("/analyzing", {
      state: { url: formattedUrl }
    });
  };

  return (
    <section className="flex flex-col items-center justify-between sm:justify-start pt-10 px-4 sm:px-6 text-center min-h-180 sm:min-h-auto ">
  <div className="flex flex-col items-center justify-center">
      < h1 className="hidden sm:block text-4xl md:text-6xl font-medium leading-tight max-w-4xl">
        Find Out Why Your
        <span className="font-semibold text-[#F38400]"> Website</span>
        <br />
        Isn’t
        <span className="font-semibold text-[#F38400]"> Converting</span>
      </h1>

      {/* Mobile heading */}
      <h1 className="block sm:hidden text-[32px] md:text-6xl font-medium leading-tight max-w-4xl">
        Find Out Why Your <br />
        <span className="font-medium text-[#F38400]"> Website </span>

        Isn’t
        <span className="font-medium text-[#F38400]"> Converting</span>
      </h1>

      <p className="text-[#000] mt-5 max-w-2xl text-md sm:text-lg font-light">
        Run a free AI website audit and uncover hidden UX and conversion problems.
      </p>

      <div className="mt-8 w-full max-w-xl flex flex-col items-center gap-4">

        {/* Desktop */}
        <div className="hidden sm:flex items-center bg-white rounded-full w-full shadow-sm overflow-hidden">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website URL (example.com)"
            className="flex-1 px-6 py-4 outline-none text-black placeholder:text-black rounded-full"
          />

          <button
            onClick={startAudit}
            className="bg-[#F38400] text-white px-6 py-4 font-medium rounded-full flex items-center gap-2 mr-1"
          >
            Audit My Website
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden flex-col items-center w-full gap-4">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website URL (example.com)"
            className="bg-white rounded-full w-full px-6 py-3 outline-none text-black placeholder:text-black text-center text-sm"
          />

          <button
            onClick={startAudit}
            className="bg-[#F38400] text-sm text-white px-6 py-2 font-medium rounded-full flex items-center gap-2"
          >
            Audit My Website
            <ArrowRight size={18} />
          </button>
        </div>

      </div>


      <p className="text-[#0000006B] text-sm mt-4">
        Free audit • No signup required • Results in 10 seconds
      </p>
    </div>

<div className="mt-6 w-full flex justify-center items-center">
        <img 
  src="/astro.svg" 
  className="block max-w-lg" 
/>
      </div>

    </section>
  );
};

export default HeroSection;