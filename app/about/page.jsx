import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import TitleParagraphButtomSection from "@/components/Common/TitleParagraphButtomSection";
import Team from "@/components/Team";
import ourValuesData from "./ourValuesData";


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
         pageName="About"
        // description="Here ist our new About Page :-)"
      />
     <Features 
        title={"About Us"} 
        paragraph={"We at ASENO are health-conscious and responsible IT experts. With over 20 years of experience in software development, we want to use our expertise to ensure that flexible and future-proof software solutions find their way into healthcare, banking, insurance and the public sector. Let us bring your business software up to date with the latest technology!"}
        featuresData={ourValuesData} />
      <TitleParagraphButtomSection 
      title={"We advise you regardless of the manufacturer"}
      paragraph={"This means that we will only integrate innovative software products that are suitable for your requirements into your IT. So we can implement your software solution efficiently and cost-effectively. Book your free webinar with us now!"}
      buttomName={"Book now"}
      buttomPath={"https://calendly.com/mira-yoga/loewinnengespraech"}
      center
      />
     <Team />
     <TitleParagraphButtomSection 
      title={"You want to join our Team?"}
      paragraph={"We are looking for software engineers who are willing to shape the future with us."}
      buttomName={"How to apply"}
      buttomPath={"/blog-senior"}
      center
      />
    </>
  );
};

export default AboutPage;