import SectionTitle from "../Common/SectionTitle";
import SectionTitleWithCallToAction from "../Common/SectionTitleWithCallToAction";
import SingleService from "./SingleService";

const Services = ({
  title,
  paragraph,
  servicesData
}) => {
  return (
    <>
      <section
        id="services"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
      >
        <div className="container">
          <SectionTitleWithCallToAction
            title= {title}
            paragraph= {paragraph}
            // ctaText="Book your first strategic consultation now – together, we’ll take your IT to the next level!"
            ctaLink="https://outlook.office365.com/book/bookingsasenode@aseno.de/"
            ctaLinkName={"First Free Consultation"}
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
