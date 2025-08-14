import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProtectAutomation from "@/components/ProtectAutomation";
import WorkflowSafety from "@/components/WorkflowSafety";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProtectAutomation />
      <WorkflowSafety />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
