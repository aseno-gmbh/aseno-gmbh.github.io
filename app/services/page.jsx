import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import competenciesData from "./competenciesData";
import TitleParagraphButtomSection from "@/components/Common/TitleParagraphButtomSection";
import FeaturesWithButton from "@/components/Features/featuresWithButton";
import servicesData from "./servicesData";
import Testimonials from "@/components/Testimonials";
import ServicePrinciples from "@/components/Services/ServicePrinciples";

const ServicesPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="Services"
         description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      /> */}
      <ServicesSectionTwo />
      <ServicePrinciples />
      <Features 
        title={"Our Service Principles"} 
        paragraph=""
        featuresData={competenciesData} 
      /> 
      <TitleParagraphButtomSection 
        title={"We offer independent consulting and product-neutral solutions!"}
        paragraph={"Whether commercial or open-source software, we only recommend proven products that perfectly match your requirements and integrate seamlessly into your IT landscape. This way, we develop efficient, cost-effective solutions with maximum flexibility and transparency. Our goal: the best and most sustainable solution for your enterprise software. Book your free strategy consultation now and take the first step toward a successful future!"}
        buttomName={"Book now"}
        buttomPath={"/contact"}
        center
      /> 


      <FeaturesWithButton 
        title={"Our Services"} 
        paragraph={"We guide you through every phase of your IT development – from the initial idea, through prototypes and cost-effective entry solutions, all the way to a fully developed, flexible IT landscape. Book your free strategy consultation now!"}
        buttomName={"book now"}
        buttomPath={"https://calendly.com/mira-yoga/loewinnengespraech"}
        featuresData={servicesData} />
    
      <ServicesSectionOne />
    </>
  );
};

export default ServicesPage;
