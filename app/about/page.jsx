import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Team from "@/components/Team";
import competenciesData from "./competenciesData";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Here ist our new About Page :-)"
      />
     <Features 
        title={"Our IT core competencies"} 
        paragraph={"We are your first point of contact if you want a future-oriented and flexible software landscape in your healthcare facility."}
        featuresData={competenciesData} />
     <Team />
    </>
  );
};

export default AboutPage;