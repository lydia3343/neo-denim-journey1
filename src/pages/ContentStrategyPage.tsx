
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentStrategy from "@/components/content/ContentStrategy";

const ContentStrategyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Content Strategy</h1>
          </div>
        </div>
        <ContentStrategy />
      </main>
      <Footer />
    </div>
  );
};

export default ContentStrategyPage;
