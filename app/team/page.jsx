"use client";
import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { useTranslation } from 'react-i18next';

const TeamPage = () => {
  const { t } = useTranslation();
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
      <Team />
    </>
  );
};
export default TeamPage;
