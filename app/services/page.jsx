import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import servicePrinciplesData from "../../components/Services/ServicePrinciplesData";
import ServicePrinciples from "@/components/Services/ServicePrinciples";

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      /> */}
       <ServicePrinciples 
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
