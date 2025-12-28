import React from 'react';
// استيراد المكونات من مجلد features/home/components
import HeroSection from "../components/HeroSection/HeroSection";
import WhySection from "../components/WhySection/WhySection";
import ClientLogos from "../components/TrustSection/TrustSection";
import PricingSection from "../components/PricingSection/PricingSection";
import DashboardSection from "../components/DashboardSection/DashboardSection";

function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ClientLogos />
      <PricingSection />
      <DashboardSection />
    </>
  );
}

export default Home;