import Features from "@/components/Features";
import HealthcareHero from "@/components/HealthcareHero";
import Testimonials from "@/components/Testimonials";
import healthcareServicesData from "@/components/HealthcareServices/healthcareServicesData";
import healthcareTestimonialData from "@/components/Testimonials/HealthcareTestimonialsData";

export const metadata = {
  title: "Healthcare – Plattformentwicklung | ASENO Ltd.",
  description: "Personalisierte, nutzerfreundliche Lösungen für die digitale Gesundheitsversorgung.",
};

export default function Healthcare() {
  return (
    <>
      <HealthcareHero />
      {/* <HealthcareServices /> */}
      <Features
        title={"Ist Ihre Gesundheitseinrichtung bereit für die digitale Zukunft?"}
        paragraph={""}
        featuresData={healthcareServicesData}
      />
      <Testimonials
        title="Ausgewählte Healthcare-Projekte"
        data={healthcareTestimonialData}
      />
    </>
  );
}
