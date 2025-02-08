import Navbar from "@/components/Navbar";
import Spline from "@splinetool/react-spline";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Spline 3D Background */}
      <div className="fixed inset-0 w-full h-screen -z-10">
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
      <footer className="bg-gray-900 text-white p-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        velit iure, sapiente accusamus, culpa unde voluptate enim optio, nam
        autem deserunt praesentium distinctio ducimus consequuntur accusantium
        eligendi quaerat rem nihil veniam ipsam tempora! Doloremque possimus
        ullam, perferendis, ipsum magni consequatur ipsam, reiciendis quo beatae
        fugiat quae praesentium eos aperiam aliquid deserunt nihil autem.
        Perferendis fuga sunt impedit distinctio? Provident repellat blanditiis
        consectetur odit numquam suscipit, officia adipisci esse placeat at
        doloremque id voluptatem aliquid dicta nam ut maxime, expedita amet quis
        exercitationem minima inventore rerum architecto est. Nemo nostrum
        corporis repellendus ipsa ipsam, debitis aperiam hic, explicabo error
        ullam saepe!
      </footer>
    </div>
  );
};

export default HomePage;
