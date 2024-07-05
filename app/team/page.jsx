"use client";
import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Team from "@/components/Team";
import { useTranslation } from 'react-i18next';

const TeamPage = () => {
  const { t } = useTranslation();
  const myArray = [{ titel: 'hi', paragraph: 'ho'}, {titel: 'huiii', paragraph: 'muiii'} ];
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
      <ServicesSectionTwo 
        myArray
      />
      <Team />
    </>
  );
};
export default TeamPage;
