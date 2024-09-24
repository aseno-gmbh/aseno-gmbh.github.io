import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Services from "@/components/Services/Services";
import servicePrinciplesData from "../../components/Services/ServicePrinciplesData";
import ServicePrinciples from "@/components/Services/ServicePrinciples";
import servicesData from "@/components/Services/ServicesData";
import Features from "@/components/Features";

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      /> */}
      <Services 
        title={"Service"} 
        paragraph="We guide you through every phase of your IT development – from the initial idea, through prototypes and cost-effective entry solutions, all the way to a fully developed, flexible IT landscape."
        servicesData={servicesData} 
      />
       {/* <ServicePrinciples 
        title={"Our Service Principles"} 
        paragraph=""
        featuresData={servicePrinciplesData} 
      /> */}
        <Features 
        title={"Our Service Principles"} 
        paragraph=""
        featuresData={servicePrinciplesData} 
      />
      {/* <TitleParagraphButtomSection 
        title={"Digitalize Healthcare"}
        paragraph={"ASENO is specialized in Healthcare Platform Development,Healthcare Data Interoperability standards implementation,EHR &EMR integration along with cloud based enterprise software development & integration."}
        buttomName={"Healthcare Services"}
        buttomPath={"/healthcare"}
        center
      /> */}
     
      <ServicesSectionTwo />
      <ServicesSectionOne />
    </>
  );
};

export default ServicesPage;
