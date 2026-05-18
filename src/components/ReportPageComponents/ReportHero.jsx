import React from "react";

const ReportHero = ({ screenshot }) => {

   // --- Debug block ---
  console.group("📸 ReportHero screenshot debug");
  console.log("Type:", typeof screenshot);
  console.log("Truthy:", !!screenshot);
  console.log("Length:", screenshot?.length);
  console.log("First 100 chars:", screenshot?.slice(0, 100));
  console.log("Last 20 chars:", screenshot?.slice(-20));

  // Detect format
  if (screenshot) {
    if (screenshot.startsWith("data:"))       console.log("Format: ✅ Already a data URI");
    else if (screenshot.startsWith("/9j/"))   console.log("Format: JPEG (raw base64)");
    else if (screenshot.startsWith("iVBORw")) console.log("Format: PNG (raw base64)");
    else if (screenshot.startsWith("UklGR"))  console.log("Format: WebP (raw base64)");
    else if (screenshot.startsWith("http"))   console.log("Format: ✅ URL —", screenshot);
    else                                      console.warn("Format: ❓ Unknown prefix:", screenshot.slice(0, 20));
  }
  console.groupEnd();
  
  const getImageSrc = (screenshot) => {
    if (!screenshot) return null;
    
    // If it already has a data URI prefix, use as-is
    if (screenshot.startsWith("data:")) return screenshot;
    
    // Detect format from base64 header bytes
    if (screenshot.startsWith("/9j/")) return `data:image/jpeg;base64,${screenshot}`;
    if (screenshot.startsWith("iVBORw")) return `data:image/png;base64,${screenshot}`;
    if (screenshot.startsWith("UklGR")) return `data:image/webp;base64,${screenshot}`;
    
    // Fallback: try jpeg (most common for screenshots)
    return `data:image/jpeg;base64,${screenshot}`;
  };

  const imageSrc = getImageSrc(screenshot);

  console.log("SRC prefix:", imageSrc?.slice(0, 80));
  console.log("Screenshot length:", screenshot?.length);

  return (
    <section className="flex justify-center pt-6 sm:pt-36 pb-8 sm:pb-30 text-center bg-[#EFF3FF] sm:bg-[url('/Vector.svg')] bg-cover bg-bottom">
      <div className="max-w-5xl mx-auto relative">
        <h1 className="block sm:hidden text-left mb-4 text-[28px] font-medium max-w-3xl leading-snug">
          Issues found on your site may affect
          <span className="text-[#F38400] font-medium"> user experience </span> and
          <span className="text-[#F38400] font-medium"> overall performance </span>
        </h1>

        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Website Screenshot"
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto border-4 border-black"
            onError={(e) => {
              console.error("Image failed to load:", e);
              e.target.src = "/website-preview.png"; // fallback on error
            }}
          />
        ) : (
          <img
            src="/website-preview.png"
            alt="Website Screenshot"
            className="rounded-xl shadow-lg w-full max-w-4xl mx-auto border-4 border-black"
          />
        )}

        <img
          src="/arrow-note.svg"
          alt="note"
          className="hidden md:flex absolute -left-26 -top-26 w-42"
        />
      </div>
    </section>
  );
};

export default ReportHero;