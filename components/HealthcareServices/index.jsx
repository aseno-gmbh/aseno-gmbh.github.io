
import Features from "@/components/Features";
import healthcareServicesData from "./healthcareServicesData";

const HealthcareServices = () => {
  return (
    <Features 
      title={"Healthcare technology and business services"} 
      paragraph={"We offer personalized solutions and consulting services, aiming to deliver instant and concrete advantages to both our clients and the individuals they serve. Our commitment lies in leveraging our expertise in data and customer experience to enhance the accessibility of high-quality healthcare."}
      featuresData={healthcareServicesData}
    />
  );
};

export default HealthcareServices;
