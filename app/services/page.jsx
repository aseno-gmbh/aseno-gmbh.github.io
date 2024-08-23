import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import competenciesData from "./competenciesData";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      />
      {/* <Features 
        title={"Our IT core competencies and services"} 
        paragraph={"We are your first point of contact if you want a future-oriented and flexible software landscape in your healthcare facility."}
        featuresData={competenciesData} 
      /> */}
      {/* <TitleParagraphButtomSection 
        title={"Digitalize Healthcare"}
        paragraph={"ASENO is specialized in Healthcare Platform Development,Healthcare Data Interoperability standards implementation,EHR &EMR integration along with cloud based enterprise software development & integration."}
        buttomName={"Healthcare Services"}
        buttomPath={"/healthcare"}
        center
      /> */}
      <ServicesSectionOne />
      <ServicesSectionTwo />
    </>
  );
};

export default ServicesPage;
