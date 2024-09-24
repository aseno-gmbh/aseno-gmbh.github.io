import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";

const Services = ({
  title,
  paragraph,
  servicesData,
  buttonName,
  buttonPath
}) => {
  return (
    <>
      <section
        id="services"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <SectionTitle
            title= {title}
            paragraph= {paragraph}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
