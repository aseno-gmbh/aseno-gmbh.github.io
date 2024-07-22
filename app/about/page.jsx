import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Team from "@/components/Team";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Here ist our new About Page :-)"
      />
     <Features />
     <Team />
    </>
  );
};

export default AboutPage;