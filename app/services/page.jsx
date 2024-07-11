"use client";
import ServicePlan from "@/components/Services/ServicePlan";
import ServicesSection from "@/components/Services/ServicesSection";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb
        pageName={t('menuData.services')}
        // description={t('services.firstLine')}
      />
      <ServicesSection />
      <ServicePlan />
    </>
  );
};

export default ServicesPage;
