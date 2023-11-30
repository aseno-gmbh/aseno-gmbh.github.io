import SectionTitle from "../Common/SectionTitle";
import SingleHealthcareServices from "./SingleHealthcareServices";
import healthcareServicesData from "./healthcareServicesData";

const HealthcareServices = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Healthcare technology and business services"
            paragraph="We offer personalized solutions and consulting services, aiming to deliver instant and concrete advantages to both our clients and the individuals they serve. Our commitment lies in leveraging our expertise in data and customer experience to enhance the accessibility of high-quality healthcare."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {healthcareServicesData.map((service) => (
              <SingleHealthcareServices key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareServices;
