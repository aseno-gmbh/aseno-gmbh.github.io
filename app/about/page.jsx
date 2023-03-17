import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="ASENO is developing a next generation decision support platform. Our vision is to create a world in which people have affordable access to quality content while enjoying a pleasant, relevant user experience. 
We strongly believe in the -shared value- approach."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
