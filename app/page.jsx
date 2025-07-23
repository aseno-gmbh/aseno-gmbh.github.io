import Blog from "@/components/Blog";
import Features from "@/components/Features";

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

import featuresData from "@/components/Features/featuresData";
import testimonialData from "@/components/Testimonials/TestimonialsData";

//import { Inter } from "@next/font/google";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features 
        title={"Von der Idee bis zum produktionsreifen System"} 
        paragraph={"Wir begleiten Sie in jeder Phase Ihrer IT-Entwicklung – von der ersten Idee über praxistaugliche Prototypen und schlanke Einstiegslösungen bis hin zu einem produktionsreifen, skalierbaren System, das langfristig zukunftsfähig bleibt."} 
        featuresData={featuresData} 
      />
      <Testimonials 
        title="Ausgewählte Kundenprojekte"
        data={testimonialData} />
      {/* <TitleParagraphButtomSection 
      title={"Our Values"}
      paragraph={"We at ASENO are responsible and health-conscious IT experts. With over 20 years of experience in software development, we want to use our IT expertise to ensure that new and proven technologies are used for the benefit of humanity. For better healthcare, public administration, banking and insurance IT systems."}
      buttomName={"About us"}
      buttomPath={"/about"}
      center
      />
      <Video />
      <Brands />
      <Pricing />
      <Blog /> */}
    </>
  );
}
