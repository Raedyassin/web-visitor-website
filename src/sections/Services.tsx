import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/service";
import ModernServicesClient from "@/components/ServicesClient";

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="What We Offer"
          header1="Services"
          header2="We Provide"
          subHeader1="We deliver end-to-end development services tailored to your unique business needs."
        />
        <ModernServicesClient services={services} />
      </div>
    </section>
  );
}
