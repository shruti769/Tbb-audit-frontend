import './App.css'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import { Routes, Route } from "react-router-dom";
import AnalyzingPage from './components/AnalyzingPage'
import ReportPage from './ReportPage';
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
     <Toaster position="top-center" />
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/analyzing" element={<AnalyzingPage />} />
         <Route path="/report" element={<ReportPage />} />
      </Routes>
      
    </>
  )
}

export default App