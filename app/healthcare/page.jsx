"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HealthcareServices from "@/components/HealthcareServices";
import HealthcareHero from "@/components/HealthcareHero";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import { useTranslation } from 'react-i18next';

export default function Healthcare() {
  const { t } = useTranslation();
  return (
    <>
    <Breadcrumb
        pageName={t('menuData.healthcare')}
        // description={t('services.firstLine')}
      />
      <Head>
        <title>Healthcare - Platform development</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <HealthcareHero />
      <HealthcareServices />
      <Testimonials />
    </>
  );
}
