import Blog from "./components/Blog";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSection />

      <div className="py-5">
        <OurServices />
      </div>

      <div className="py-5">
        <Blog />
      </div>

      <div className="py-5">
        <Contact />
      </div>
    </div>
  );
}
