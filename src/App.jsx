import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
// import DashboardPreview from "./components/DashBoardPreview";
import DashboardPreview from "./components/DashboardPreview";

import HowItWorks from "./components/HowItWorks";
import Insights from "./components/Insights";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <ValueSection />
        <DashboardPreview />
        <HowItWorks />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}