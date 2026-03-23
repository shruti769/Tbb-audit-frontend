import { ArrowRight, MoveUpRight } from "lucide-react";

const getScoreColor = (score) => {
  if (score <= 2) return "#E63900";
  if (score <= 4) return "#F38400";
  if (score <= 6) return "#FFD903";
  return "#63CC00";
};

const ScoreCircle = ({ score }) => {
  const isMobile = window.innerWidth < 640;

  const size = isMobile ? 80 : 180;   // 👈 control total size
  const stroke = isMobile ? 5 : 6;
  const radius = isMobile ? 40 : 80;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const progress = (score / 10) * circumference;
  const color = getScoreColor(score);

  return (
    <div className="relative" style={{ width: size, height: size }}>

      <svg height={size} width={size}>
        <circle
          stroke="#E6E6E6"
          fill="white"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${progress} ${circumference}`}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-sm sm:text-4xl font-semibold">
        {score}/10
      </div>

    </div>
  );
};

const AuditCard = ({ title, number, score, positives = [], negatives = [], solutions = [],
  openSolution,heading }) => {
  return (

    <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row justify-between border border-[#E6E6E6]">


      {/* LEFT SCORE PANEL */}

      <div className="bg-white sm:bg-[#EFF3FF] rounded-lg p-0 sm:p-4 flex flex-row-reverse md:flex-col items-center justify-between w-full md:w-[270px]">
 <p className=" text-[#F38400] text-md font-medium text-center">
          {heading}
        </p>
        <ScoreCircle score={score} />

        <p className="mt-4 text-lg font-medium sm:font-semibold text-center">
          {title}
        </p>

      </div>


      {/* MIDDLE CONTENT */}

      <div className="flex-1 px-0 sm:px-8 mt-4">

        <ul className="space-y-5 text-sm">

          {positives.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">

              <span className="w-5 h-5 flex-shrink-0 rounded-full bg-[#63CC00] text-white flex items-center justify-center text-xs p-1">
                ✓
              </span>

              <span>{item}</span>

            </li>
          ))}

          {negatives.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">

              <span className="w-5 h-5 flex-shrink-0  rounded-full bg-[#DB3700] text-white flex items-center justify-center text-xs p-1">
                ✕
              </span>

              <span>{item}</span>

            </li>
          ))}

        </ul>

      </div>


      {/* RIGHT SIDE */}


      <div className="flex flex-col justify-between items-center sm:items-end text-right mt-4">

        <button
          onClick={() => openSolution(solutions)}
          className="text-[#F38400] underline font-semibold text-md flex items-center gap-1"
        >
          Solution
          <MoveUpRight size={16}  />
        </button>

        <div
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="hidden sm:block text-8xl text-[#1D3BD2]/15 font-bold"
        >
          {number}
        </div>

      </div>

    </div>
  );
};

export default AuditCard;