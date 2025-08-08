import Breadcrumb from "@/components/Common/Breadcrumb";
import TitleParagraphButtomSection from "@/components/Common/TitleParagraphButtomSection";
import Team from "@/components/Team";
import HeroAboutUs from "@/components/Hero/index2";
import Features from "@/components/Features";
import SectionTitleWithCallToAction from "@/components/Common/SectionTitleWithCallToAction";


const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
         pageName="About"
        // description="Here ist our new About Page :-)"
      /> */}
    <HeroAboutUs />
     <Team />
     <TitleParagraphButtomSection 
      title={"Du möchtest Teil unseres Teams werden?"}
      paragraph={"Wir suchen Software Engineers, die mit uns die Zukunft gestalten wollen."}
      buttomName={"So bewirbst du dich"}
      buttomPath={"/blog-senior"}
      center
      />
    </>
  );
};

export default AboutPage;