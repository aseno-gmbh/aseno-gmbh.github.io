"use client";
import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description={t('services.firstLine')}
      />
      <ServicesSectionOne />
      <ServicesSectionTwo />
    </>
  );
};

export default ServicesPage;
