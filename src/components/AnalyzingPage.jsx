// AnalyzingPage.jsx - Key fixes:
// 1. Use useRef to prevent double API call (StrictMode fix)
// 2. Never put screenshot in localStorage — store separately

import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constant";

const steps = [
  "Scanning Your Website...",
  "Analyzing UX Signals...",
  "Checking Conversion Flow...",
  "Reviewing Trust Signals...",
  "Finding Conversion Leaks..."
];

export default function AnalyzingPage() {
  const [animationDone, setAnimationDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reportData, setReportData] = useState(null);
  const hasFetched = useRef(false); // ✅ prevents StrictMode double-call

  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.url;

  const step = Math.min(
    steps.length - 1,
    Math.floor((progress / 100) * steps.length)
  );

  // Progress animation
  useEffect(() => {
    if (animationDone) return;

    const totalDuration = 32000;
    const intervalTime = 100;
    const increment = 95 / (totalDuration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        let speed = increment;
        if (prev > 80) speed *= 0.4;
        else if (prev > 60) speed *= 0.6;
        return prev + speed;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [animationDone]);

  // API Call
  useEffect(() => {
    if (!url) {
      toast.error("Missing website URL");
      navigate("/");
      return;
    }

    if (hasFetched.current) return; // ✅ block second call
    hasFetched.current = true;

    const fetchAudit = async () => {
      try {
        const res = await axios.post(`${BASE_URL}/audit`, { url });
        const report = res.data;

        console.log("✅ Report received, screenshot length:", report.screenshot?.length);

        // ✅ Separate screenshot from the rest before localStorage
        const { screenshot, ...reportWithoutScreenshot } = report;

        try {
          localStorage.setItem("report", JSON.stringify(reportWithoutScreenshot));
          if (screenshot) {
            localStorage.setItem("report_screenshot", screenshot); // store separately
          }
        } catch (storageErr) {
          console.warn("⚠️ localStorage failed:", storageErr.message);
          // Non-fatal — report still works via navigate state
        }

        setReportData(report); // ✅ full report with screenshot in memory
        setProgress(100);
        setAnimationDone(true);

      } catch (err) {
        console.error("API Error:", err);
        toast.error("Failed to analyze website");
        navigate("/");
      }
    };

    fetchAudit();
  }, [url]);

  // Navigate when both done
  useEffect(() => {
    if (animationDone && reportData) {
      const timer = setTimeout(() => {
        toast.success("Audit completed 🎉");
        navigate("/report", {
          state: { report: reportData } // ✅ full report with screenshot
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animationDone, reportData, navigate]);

  return (
    <div className="min-h-[70vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium max-w-4xl leading-snug">
        Our AI Is
        <span className="text-[#F38400] font-semibold"> Analyzing </span>
        Your Website
      </h1>

      <div className="mt-16 sm:mt-24 w-full flex flex-col items-center">
        <div className="relative w-full max-w-[620px]">
          <div className="h-[8px] sm:h-[10px] bg-[#78788029] rounded-full" />
          <div
            className="h-[8px] sm:h-[10px] bg-[#F38400] rounded-full absolute top-0 left-0 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <img
            src="/animation-icon.svg"
            className="absolute -top-9 sm:-top-9 w-8 sm:w-10 transition-all duration-500"
            style={{ left: `calc(${progress}% - 16px)` }}
          />
        </div>

        <div className="flex justify-between w-full max-w-[620px] mt-4 text-[10px] sm:text-xs px-1">
          {steps.map((item, index) => (
            <div key={index} className="flex-1 text-center leading-tight px-1">
              {index <= step && (
                <span className="text-black font-light break-words">{item}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-black mt-16 sm:mt-30 max-w-4xl text-base sm:text-lg md:text-2xl font-light px-2">
        This will only take a few seconds. Please wait while we analyze your website.
      </p>
    </div>
  );
}