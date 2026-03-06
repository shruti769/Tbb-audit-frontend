import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'
import ServicesSlider from './components/ServiceSlider'
import BrandWorks from './components/BrandWork'
import ShopifyStore from './components/ShopifyStore'
import WhyTBB from './components/WhyTBB'
import Featured from './components/Featured'
import IndustriesSection from './components/IndustriesSection'
import Clients from './components/clients'
import WhyShopifyStore from './components/WhyShopifyStore'
import RightPartnerSection from './components/RightPartner'
import ScheduleCallSection from './components/ScheduleCallSection'
import FAQs from './components/FAQs'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSlider/>
      <BrandWorks/>
      <ShopifyStore/>
      <WhyTBB/>
      <Featured/>
      <IndustriesSection/>
      <Clients/>
      <WhyShopifyStore/>
      <RightPartnerSection/>
      <ScheduleCallSection/>
      <FAQs/>
      <Footer/>
    </>
  )
}

export default App
