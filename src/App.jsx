import AppNav from "./shared/Navbar/Navbar"
import HeroSection from "./features/home/components/HeroSection/HeroSection"
import WhySection from "./features/home/components/WhySection/WhySection"
import ClientLogos from "./features/home/components/TrustSection/TrustSection"
import PricingSection from "./features/home/components/PricingSection/PricingSection"
import DashboardSection from "./features/home/components/DashboardSection/DashboardSection"
import FooterSection from "./shared/Footer/Footer"
function App() {
  return (
    <>
      <AppNav/>
     <HeroSection/>
   <WhySection/>
   <ClientLogos/>
   <PricingSection/>
   <DashboardSection/>
   <FooterSection/>
      </>
 
  )
}

export default App
