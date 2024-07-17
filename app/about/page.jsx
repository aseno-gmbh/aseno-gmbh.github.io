"use client";
import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Team from "@/components/Team";
import { useTranslation } from 'react-i18next';
import aboutOurValuesList from "./aboutOurValuesList";
import aboutOurExperticesList from "./aboutOurExperticesList";



const AboutUsPage = () => {
  const { t } = useTranslation();
  const title = t('about.values-title');
  const paragraph = t('about.values-firstLine');
  const title2 =  t('about.competencies-title');
  const paragraph2 = t('about.competencies-firstLine');

  aboutOurValuesList.forEach((aboutValueEntry => {
    aboutValueEntry.title = t('about.value-list-title-' + aboutValueEntry.id);
    aboutValueEntry.paragraph = t('about.value-list-descrition-' + aboutValueEntry.id);
  }));

  return (
    <>
      <Head>
        <title>About us + SEO relevant keywords</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <Breadcrumb
        pageName={t('menuData.about')}
        // description={t('services.firstLine')}
      />
     
    <Features featuresData={aboutOurValuesList} title={title} paragraph={paragraph} />
    <Features featuresData={aboutOurExperticesList} title={title2} paragraph={paragraph2} />
    <Team />
    </>
  );
};
export default AboutUsPage;
