import Blog from "@/components/Blog";
import Features from "@/components/Features";
import featuresData from "@/components/Features/featuresData";
import TitleParagraphButtomSection from "@/components/Common/TitleParagraphButtomSection";
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
        paragraph={"ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Learn about some of our past projects below, and get in touch to see what we can do for you."} 
        featuresData={featuresData} 
      />
      <Testimonials />
      <TitleParagraphButtomSection 
      title={"Our Values"}
      paragraph={"We at ASENO are responsible and health-conscious IT experts. With over 20 years of experience in software development, we want to use our IT expertise to ensure that new and proven technologies are used for the benefit of humanity. For better healthcare, public administration, banking and insurance IT systems."}
      buttomName={"About us"}
      buttomPath={"/about"}
      center
      />
      <Video />
      <Brands />
      <Pricing />
      <Blog />
    </>
  );
}
