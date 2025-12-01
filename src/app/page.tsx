import ClientTestimonials from "@/sections/ClientTestimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Service from "@/sections/Service";
import WhyChooseMe from "@/sections/WhyChooseMe";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden  relative
      bg-gredient-to-br from-dark-blue via-blue">
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d1c3_1px,transparent_1px),linear-gradient(to_bottom,#006A67_1px,transparent_1px)] bg-[size:20px_20px]"></div> */}

      <Header/>
      <Hero />
      <Service />
      <WhyChooseMe />
      <ClientTestimonials />
      <Contact/>
      <Footer/>
    </div>
  );
}
