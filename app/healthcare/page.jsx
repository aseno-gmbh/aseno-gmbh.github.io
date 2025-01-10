import HealthcareServices from "@/components/HealthcareServices";
import HealthcareHero from "@/components/HealthcareHero";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import testimonialData from "@/components/Testimonials/TestimonialsData";
import healthcareTestimonialData from "@/components/Testimonials/HealthcareTestimonialsData";

export default function Healthcare() {
  return (
    <>
      <Head>
        <title>Healthcare - Platform development</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <HealthcareHero />
      <HealthcareServices />
      <Testimonials data={healthcareTestimonialData} />
    </>
  );
}
