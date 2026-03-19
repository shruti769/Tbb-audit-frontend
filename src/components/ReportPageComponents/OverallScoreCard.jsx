import React from "react";

const getScoreColor = (score) => {
  if (score <= 2) return "#E63900";
  if (score <= 4) return "#F38400";
  if (score <= 6) return "#FFD903";
  return "#63CC00";
};

const OverallScoreCard = ({ data }) => {
  const score = data?.score || 0;
 

   const getScoreMessage = (score) => {
  if (score <= 2)
    return "Your website has major design and usability issues. A redesign is needed.";
  if (score <= 4)
    return "Your website has a basic structure, but many areas need improvement.";
  if (score <= 6)
    return "Your website works well, but design clarity and consistency can be improved.";
  if (score <= 8)
    return "Your website has a solid foundation, with some areas that could be refined.";
  return "Your website shows strong design and usability.";
};

const message = getScoreMessage(score);

  const color = getScoreColor(score);

  const radius = 52;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const progress = (score / 10) * circumference;

  return (
    <div className="bg-white rounded-2xl sm:rounded-[50px] max-w-md mx-auto mt-0 sm:-mt-14 p-2 sm:p-4 flex items-center gap-4">

      {/* Score Circle */}
      <div className="relative flex items-center justify-center w-30 self-stretch">

        <svg height="120" width="120">

          {/* Background circle */}
          <circle
            stroke="#E5E5E5"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx="60"
            cy="60"
          />

          {/* Progress arc */}
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="60"
            cy="60"
            transform="rotate(-90 60 60)"
          />

        </svg>

        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center text-lg font-medium">
          {score}/10
        </div>

      </div>

      {/* Score Text */}
      <div className="text-left">
        <h3 className="text-2xl font-semibold">Overall Score</h3>
        <p className="text-black mt-2 font-light text-sm">
           {message}
        </p>
      </div>

    </div>
  );
};

export default OverallScoreCard;