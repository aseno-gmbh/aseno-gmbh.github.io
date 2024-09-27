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
        //className="z-10 py-16 md:py-20 lg:py-28"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitleWithCallToAction
            title= {title}
            paragraph= {paragraph}
            ctaText="Book your first strategic consultation now – together, we’ll take your IT to the next level!"
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
