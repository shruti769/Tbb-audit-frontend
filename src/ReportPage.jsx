import { useState } from "react";
import { useLocation } from "react-router-dom";
import ReportHero from "./components/ReportPageComponents/ReportHero";
import ReportHeader from "./components/ReportPageComponents/ReportHeader";
import OverallScoreCard from "./components/ReportPageComponents/OverallScoreCard";
import AuditCard from "./components/ReportPageComponents/AuditCard";
import SolutionModal from "./components/SolutionModal"
import FAQs from "./components/ReportPageComponents/FAQ"
import { ArrowRight, Download } from "lucide-react";
import html2pdf from "html2pdf.js";
import AuditPdf from "./AuditPdf";


const mapReportToSections = (report) => {
  if (!report) return [];

  return [
    {
      title: "Value Proposition",
      score: report.value_proposition_messaging?.score,
      positives: report.value_proposition_messaging?.positives,
      negatives: report.value_proposition_messaging?.negatives,
      solutions: report.value_proposition_messaging?.solutions,
    },
    {
      title: "Offer Attractiveness",
      score: report.offer_attractiveness?.score,
      positives: report.offer_attractiveness?.positives,
      negatives: report.offer_attractiveness?.negatives,
      solutions: report.offer_attractiveness?.solutions,
    },
    {
      title: "Call-To-Action Effectiveness",
      score: report.cta_effectiveness?.score,
      positives: report.cta_effectiveness?.positives,
      negatives: report.cta_effectiveness?.negatives,
      solutions: report.cta_effectiveness?.solutions,
    },
    {
      title: "Trust & Credibility Signals",
      score: report.trust_credibility?.score,
      positives: report.trust_credibility?.positives,
      negatives: report.trust_credibility?.negatives,
      solutions: report.trust_credibility?.solutions,
    },
    {
      title: "Conversion Flow & User Journey",
      score: report.conversion_flow_user_journey?.score,
      positives: report.conversion_flow_user_journey?.positives,
      negatives: report.conversion_flow_user_journey?.negatives,
      solutions: report.conversion_flow_user_journey?.solutions,
    },
    {
      title: "Conversion Friction",
      score: report.conversion_friction?.score,
      positives: report.conversion_friction?.positives,
      negatives: report.conversion_friction?.negatives,
      solutions: report.conversion_friction?.solutions,
    },
    {
      title: "Strategic Summary",
      score: report.overall_score?.score,
      positives: report.strategic_summary?.key_strengths,
      negatives: report.strategic_summary?.scope_of_improvement,
      solutions: [
        report.strategic_summary?.consultation_cta
      ],
    }
  ];
};

export default function ReportPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSolutions, setCurrentSolutions] = useState([]);
  const [downloading, setDownloading] = useState(false);

  const location = useLocation();

  const downloadPDF = async () => {
    try {
      setDownloading(true);

      const element = document.getElementById("pdf-content");

      if (!element) return;

      // temporarily show
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

  const report =
    location.state?.report ||
    JSON.parse(localStorage.getItem("report"));


  const sections = mapReportToSections(report);

  const openSolution = (solutions) => {
    setCurrentSolutions(solutions);
    setModalOpen(true);
  };



  // ✅ Safety (important)
  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading report...
      </div>
    );
  }

  return (
    <div className="bg-[#eef1f5]">
      <div className="px-4">
        <ReportHero screenshot={report.screenshot} />
        <OverallScoreCard data={report.overall_score} />
      </div>


      <ReportHeader report={report} sections={sections} />
      <div className="px-4">
        <section className="max-w-6xl mx-auto px-0 sm:px-6 space-y-6 py-10 sm:py-20">

          {sections.map((item, i) => (
            <AuditCard
              key={i}
              title={item.title}
              number={String(i + 1).padStart(2, "0")}
              score={item.score}
              positives={item.positives || []}
              negatives={item.negatives || []}
              solutions={item.solutions || []}
              openSolution={openSolution}
            />
          ))}


          <div className="hidden sm:flex justify-center gap-4 mt-6 sm:mt-10">

            <button className="bg-[#F38400] text-sm text-white px-4 sm:px-6 py-3 rounded-full flex items-center gap-2">
              Book Free Consultation
              <ArrowRight size={18} />
            </button>

            <button
              onClick={downloadPDF}
              disabled={downloading}
              className="border px-4 sm:px-6 py-3 text-sm rounded-full flex items-center gap-2 disabled:opacity-60"
            >
              {downloading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Generating...
                </>
              ) : (
                <>
                  Download Report
                </>
              )}
            </button>

          </div>

        </section>

        <FAQs />
      </div>
      <SolutionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        solutions={currentSolutions}
      />

      <div className="hidden">
        <AuditPdf report={report} sections={sections} />
      </div>
    </div>
  );
}