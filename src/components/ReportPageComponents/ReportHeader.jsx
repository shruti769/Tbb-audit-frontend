import { ArrowRight, CircleArrowDown, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import AuditPdf from "../../AuditPdf";
import { useState, useRef, useEffect } from "react";

const ReportHeader = ({ report, sections }) => {
  const [downloading, setDownloading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;

    const top = sectionRef.current.getBoundingClientRect().top;

  
    if (top <= 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const downloadPDF = async () => {
    try {
      setDownloading(true);

      const element = document.getElementById("pdf-content");

      if (!element) {
        console.error("PDF content not found");
        return;
      }

      // show temporarily
      element.style.display = "block";

      await new Promise((r) => setTimeout(r, 300));

      const opt = {
        margin: 0.5,
        filename: "audit-report.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
      };

      await html2pdf().set(opt).from(element).save();

      // hide again
      element.style.display = "none";

    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative text-center mt-12 sm:mt-24">

      <img
        src="/arrow-icon.svg"
        className="hidden sm:block absolute -top-30 left-60 mb-4 h-60"
      />


      <h2 className="text-[22px] sm:text-4xl font-medium sm:font-semibold">
        See Detailed Report Below
      </h2>

      <img
        src="/Icon.svg"
        className="block sm:hidden mx-auto mt-4 "
      />

      <p className="text-[#00000080] mt-4 font-light">
        A Proven Process Designed To Create Websites That Perform, Convert, And Grow With Your Business.
      </p>

      {/* Desktop Buttons (unchanged) */}
      <div className="hidden sm:flex justify-center gap-4 mt-6">

        <button className="bg-[#F38400] text-sm text-white px-6 py-3 rounded-full flex items-center gap-2">
          Book Free Consultation
          <ArrowRight size={18} />
        </button>

        <button
          onClick={downloadPDF}
          disabled={downloading}
          className="border px-6 py-3 text-sm rounded-full flex items-center gap-2 disabled:opacity-60"
        >
          {downloading ? (
            <>
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              Generating...
            </>
          ) : (
            <>
              Download Report
              <Download size={18} />
            </>
          )}
        </button>
      </div>


{isSticky && <div className="h-[70px] sm:hidden"></div>}
      {/* ✅ Mobile Sticky CTA (Correct Behavior) */}
      <div
        className={`sm:hidden z-40 w-full transition-all duration-300 ${isSticky
            ? "fixed top-0 left-0"
            : "relative mt-10"
          }`}
      >

        <div className="bg-white/95 backdrop-blur-md px-4 py-3">

          <div className="flex gap-2">

            <button className="flex-1 bg-[#F38400] text-white text-sm py-3 px-2 rounded-full flex text-[13px] items-center justify-center gap-2">
              Book Free Consultation
              <ArrowRight size={16} />
            </button>

            <button
              onClick={downloadPDF}
              disabled={downloading}
              className="flex-1 border text-sm py-3 px-2 rounded-full flex items-center justify-center text-[13px] gap-2 disabled:opacity-60"
            >Download Report
              {downloading ? (
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <Download size={16} />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* ✅ Hidden PDF Component */}
      <div style={{ display: "none" }}>
        <AuditPdf report={report} sections={sections} />
      </div>

    </section>
  );
};

export default ReportHeader;