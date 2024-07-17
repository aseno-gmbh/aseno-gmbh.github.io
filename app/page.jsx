"use client";
import Team from "@/components/Team";
import Hero from "@/components/Hero";
import TitleParagrapButtonSection from "@/components/Common/TitleParagraphButtonSection";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import featuresData from "@/components/Features/featuresData";
import { useTranslation } from 'react-i18next';
//import { Inter } from "@next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero title={t('home.asenoTitle')} paragraph={t('home.firstLine')} linkPath={'/about'} linkName={t('menuData.about')} />
      <Features featuresData={featuresData} title={t('about.title')} paragraph={t('about.firstLine')}/>
      <TitleParagrapButtonSection title={t('home.identificationQuestion')} paragraph={t('home.identificationFirstLine')} linkPath={'/services'} linkName={t('menuData.services')}/>
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
