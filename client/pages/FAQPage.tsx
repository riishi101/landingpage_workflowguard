import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
