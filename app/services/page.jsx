import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import competenciesData from "./competenciesData";
import TitleParagraphButtomSection from "@/components/Common/TitleParagraphButtomSection";
import FeaturesWithButton from "@/components/Features/featuresWithButton";
import servicesData from "./servicesData";
import Testimonials from "@/components/Testimonials";

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      /> */}
     {/*<Features 
        title={"Our Services"} 
        paragraph={"We guide you through every phase of your IT development – from the initial idea, through prototypes and cost-effective entry solutions, all the way to a fully developed, flexible IT landscape."}
        featuresData={competenciesData} 
      />  */}
       {/* <Testimonials />
      <TitleParagraphButtomSection 
        title={"Digitalize Healthcare"}
        paragraph={"ASENO is specialized in Healthcare Platform Development,Healthcare Data Interoperability standards implementation,EHR &EMR integration along with cloud based enterprise software development & integration."}
        buttomName={"Healthcare Services"}
        buttomPath={"/healthcare"}
        center
      />  */}
{/*
      <FeaturesWithButton 
        title={"Our Services"} 
        paragraph={"We guide you through every phase of your IT development – from the initial idea, through prototypes and cost-effective entry solutions, all the way to a fully developed, flexible IT landscape. Book your free strategy consultation now!"}
        buttomName={"book now"}
        buttomPath={"https://calendly.com/mira-yoga/loewinnengespraech"}
        featuresData={servicesData} /> */}
     
      <ServicesSectionTwo />
      <ServicesSectionOne />
    </>
  );
};

export default ServicesPage;
