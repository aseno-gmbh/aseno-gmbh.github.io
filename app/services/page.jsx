import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import Services from "@/components/Services/Services";
import ServicePrinciples from "@/components/Services/ServicePrinciples";
import servicesData from "@/components/Services/ServicesData";
import featuresData from "@/components/Features/featuresData";

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      /> */}

      <ServicePrinciples
        title={"IT Strategie und Lösungen im Überblick"} 
        paragraph="Entdecken Sie, wie unsere modularen Lösungen und unser Low-Code-Ansatz Ihre Digitalisierung beschleunigen – effizient, flexibel und exakt auf Ihre Anforderungen zugeschnitten. Als unabhängige Experten für strategische IT-Beratung und Low-Code-Implementierung unterstützen wir Sie dabei, Prozesse zu digitalisieren und Ihre IT zukunftssicher aufzustellen."
        servicePrinciplesData={featuresData}
      />
      <Services 
        title={"Kostenfreies Strategiegespräch"} 
        paragraph="Wir begleiten Sie in jeder Phase Ihrer IT-Entwicklung – von der ersten Idee über praxistaugliche Prototypen und schlanke Einstiegslösungen bis hin zu einem produktionsreifen, skalierbaren System, das langfristig zukunftsfähig bleibt."
        servicesData={servicesData} 
      />
      {/* <ServicePrinciples
        title={"First Free Consultation"} 
        paragraph="Discover how our modular solutions and low-code approach deliver maximum efficiency and adaptability for your business software. As vendor-independent experts in strategic IT consulting and low-code implementation, we help you find the optimal solution."
        servicePrinciplesData={servicePrinciplesData}
      /> */}
    </>
  );
};

export default ServicesPage;
