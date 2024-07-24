// import Blog from "@/components/Blog";
//import Brands from "@/components/Brands";
import Team from "@/components/Team";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import featuresData from "@/components/Features/featuresData";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

// import Video from "@/components/Video";
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
      {/* <Video />
      <Brands /> */}
      <Team />
      <Testimonials />
       {/*<Pricing />
      <Blog />
       */}
      {/* <Contact /> */}
    </>
  );
}
