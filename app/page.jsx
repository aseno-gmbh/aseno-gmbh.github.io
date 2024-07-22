"use client";
import Team from "@/components/Team";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import featuresData from "@/components/Features/featuresData";
import { useTranslation } from 'react-i18next';
import FeaturesWithButton from "@/components/Features/featuresWithButton";
//import { Inter } from "@next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero title={t('home.asenoTitle')} paragraph={t('home.firstLine')} linkPath={'/about'} linkName={t('menuData.about')} />
      <FeaturesWithButton featuresData={featuresData} title={t('home.identificationQuestion')} paragraph={t('home.identificationFirstLine')} linkPath={'/services'} linkName={t('menuData.services')}/>
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
