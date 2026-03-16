import Navbar from "@/components/Navbar";
import GraphicsPortfolio from "@/components/GraphicsPortfolio";
import Footer from "@/components/Footer";

const GraphicsPortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <GraphicsPortfolio />
      <Footer />
    </div>
  );
};

export default GraphicsPortfolioPage;
