import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <Pricing />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
