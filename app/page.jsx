// import Blog from "@/components/Blog";
//import Brands from "@/components/Brands";
import Team from "@/components/Team";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
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
      <Features />
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
