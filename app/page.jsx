"use client";
// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
//import Brands from "@/components/Brands";
import Team from "@/components/Team";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import featuresData from "@/components/Features/featuresData";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { useTranslation } from 'react-i18next';
// import Video from "@/components/Video";
//import { Inter } from "@next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <Features featuresData={featuresData} title={t('about.title')} paragraph={t('about.firstLine')}/>
      {/* <Video />
      <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Team />
      <Testimonials />
       {/*<Pricing />
      <Blog />
       */}
      {/* <Contact /> */}
    </>
  );
}
