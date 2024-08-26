import Breadcrumb from "@/components/Common/Breadcrumb";
import TitleParagraphButtomSection from "@/components/Common/TitleParagraphButtomSection";
import Team from "@/components/Team";
import HeroAboutUs from "@/components/Hero/index2";
import Features from "@/components/Features";


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
         pageName="About"
        // description="Here ist our new About Page :-)"
      />
      <HeroAboutUs />
      {/* <Features 
        title={"About Us"} 
        paragraph={"At ASENO, we are health-conscious IT experts committed to leveraging our two decades of expertise to implement flexible and future-proof IT systems, especially in the healthcare sector. Our goal is to contribute to long-term improvements in healthcare for everyone because, as we all know, health is our most valuable asset. We also recognize that effective and secure software solutions are a blessing in other sectors, such as banking, insurance, and public administration. Let us bring your company's software up to the latest technological standards!"}
        featuresData={[]}
      /> */}
      {/* <TitleParagraphButtomSection 
      title={"We advise you regardless of the manufacturer"}
      paragraph={"This means that we will only integrate innovative software products that are suitable for your requirements into your IT. So we can implement your software solution efficiently and cost-effectively. Book your free webinar with us now!"}
      buttomName={"Book now"}
      buttomPath={"https://calendly.com/mira-yoga/loewinnengespraech"}
      center
      /> */}
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