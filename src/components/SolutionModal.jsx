import { ArrowRight, Check, CircleX, X } from "lucide-react";

const SolutionModal = ({ open, onClose, solutions = [] }) => {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Background overlay */}

      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}

      <div className="relative bg-white rounded-xl w-[600px] max-w-[90%] p-10 shadow-xl">

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#B3261E]"
        >
          <CircleX size={28} />
        </button>

        <h2 className="text-2xl font-semibold mb-8">
          Solution
        </h2>

        <ul className="space-y-6">

          {solutions.map((item, i) => (
            <li key={i} className="flex gap-4 justify-center items-start">

              <span className="w-6 h-6 flex-shrink-0 rounded-xs bg-[#63CC00] text-white flex items-center justify-center text-sm">
                <Check size={16}/>
              </span>

              <span className="text-md">{item}</span>

            </li> 
          ))}

        </ul>

        {/* CTA */}

        <div className="flex justify-center mt-10">

          <button className="bg-[#F38400] text-white px-8 py-4 rounded-full text-sm font-medium flex items-center gap-2">
            Book Free Consultation With TBB Team <ArrowRight size={18}/>
          </button>

        </div>

      </div>

    </div>
  );
};

export default SolutionModal;