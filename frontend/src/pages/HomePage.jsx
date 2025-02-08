import Navbar from "@/components/Navbar";
import Spline from "@splinetool/react-spline";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Spline 3D Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Spline scene="https://prod.spline.design/zX19WrRkj7yeWSZ7/scene.splinecode" />
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Full-screen Hero Section */}
      <main className="w-full h-screen flex flex-col justify-center">
        <HeroSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
