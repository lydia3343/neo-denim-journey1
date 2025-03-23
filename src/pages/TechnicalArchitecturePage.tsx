
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnicalArchitecture from "@/components/technical/TechnicalArchitecture";

const TechnicalArchitecturePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Technical Architecture</h1>
          </div>
        </div>
        <TechnicalArchitecture />
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalArchitecturePage;
