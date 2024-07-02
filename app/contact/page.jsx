"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        pageName={t('menuData.contact')}
        // description="Thank you for your interest in ASENO!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
