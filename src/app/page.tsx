import ClientReview from "@/sections/ClientReview";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ModernServices from "@/sections/Services";
import Pricing from "@/sections/Pricing";
import Questions from "@/sections/Questions";
import WhyChooseMe from "@/sections/WhyChooseMe";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import GoTop from "@/components/GoTop";
// import WelcomLoader from "@/components/WelcomLoader";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden  relative
      bg-gredient-to-br from-dark-blue via-blue"
    >
      {/* <WelcomLoader/> */}
      <GoTop />
      <Header />
      <Hero />
      <ModernServices />
      <Pricing />
      <Questions />
      <WhyChooseMe />
      <Projects />
      <ClientReview />
      <Contact />
      <Footer />
    </div>
  );
}
