import HealthcareServices from "@/components/HealthcareServices";
import Features from "@/components/Features";
import HealthcareHero from "@/components/HealthcareHero";
import Testimonials from "@/components/Testimonials";
import healthcareServicesData from "@/components/HealthcareServices/healthcareServicesData";
import Head from "next/head";
import healthcareTestimonialData from "@/components/Testimonials/HealthcareTestimonialsData";

export default function Healthcare() {
  return (
    <>
      <Head>
        <title>Healthcare - Platform development</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <HealthcareHero />
      {/* <HealthcareServices /> */}
      <Features 
        title={"Is your Healthcare Facility Ready For the Digital Future?"} 
        paragraph={""} 
        featuresData={healthcareServicesData} 
      />
      <Testimonials 
        title= "Some of Our Past and Current Healthcare Projects"
        data={healthcareTestimonialData} />
    </>
  );
}
