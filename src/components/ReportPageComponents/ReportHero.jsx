import React from "react";

const ReportHero = ({ screenshot }) => {

  const getMimeType = (base64) => {
  if (!base64) return null;

  if (base64.startsWith("/9j/")) return "image/jpeg";
  if (base64.startsWith("iVBOR")) return "image/png";
  if (base64.startsWith("UklGR")) return "image/webp";
  if (base64.startsWith("R0lGOD")) return "image/gif";

  return "image/jpeg"; // fallback
};

const mimeType = getMimeType(screenshot);

const imageSrc = screenshot
  ? `data:${mimeType};base64,${screenshot}`
  : null;

  return (
    <section className="flex justify-center pt-6 sm:pt-36 pb-8 sm:pb-30  text-center bg-[#EFF3FF] sm:bg-[url('/Vector.svg')] bg-cover bg-bottom">
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