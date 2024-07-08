"use client";
import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import Team from "@/components/Team";
import { useTranslation } from 'react-i18next';


const AboutUsPage = () => {
  const { t } = useTranslation();
  //const dataList = [{ id: 1, title: 'Title 1', content: 'content 1'}, { id:2, title: 'title 2', content: 'content 2'} ];
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
     
    <Features />
    <Team />
    </>
  );
};
export default AboutUsPage;
