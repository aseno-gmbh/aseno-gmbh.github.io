import Blog from "@/components/Blog";
import Features from "@/components/Features";
import servicePrinciplesData from "@/components/Services/ServicePrinciplesData";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import Video from "@/components/Video";

//import { Inter } from "@next/font/google";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features 
        title={"Is Your Business Model Ready For the Digital Future?"} 
        paragraph="Discover how our innovative, modular solutions and low-code approach deliver maximum efficiency and adaptability for your business software."
        featuresData={servicePrinciplesData} 
      />
      <Testimonials />
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
