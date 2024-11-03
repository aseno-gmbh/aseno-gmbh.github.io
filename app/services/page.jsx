import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import Services from "@/components/Services/Services";
import featuresData from "@/components/Features/featuresData";
import ServicePrinciples from "@/components/Services/ServicePrinciples";
import servicesData from "@/components/Services/ServicesData";

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      /> */}

      <Services 
        title={"Our Services"} 
        paragraph="We guide you through every phase of your IT development – from the initial idea, through prototypes and cost-effective entry solutions, all the way to a fully developed, flexible IT landscape."
        servicesData={servicesData} 
      />
      <ServicePrinciples
        title={"First Free Consultation"} 
        paragraph="Discover how our innovative, modular solutions and low-code approach deliver maximum efficiency and adaptability for your business software."
        servicePrinciplesData={featuresData}
      />
    
      <ServicesSectionOne />
    </>
  );
};

export default ServicesPage;
