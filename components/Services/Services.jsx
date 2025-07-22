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
        //className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitleWithCallToAction
            title= {title}
            paragraph= {paragraph}
            ctaText="Starten Sie jetzt mit einem kostenfreien Strategiegespräch – wir machen Ihre IT zukunftssicher."
            ctaLink="https://outlook.office365.com/book/bookingsasenode@aseno.de/"
            ctaLinkName={"Kostenfreies Strategiegespräch"}
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
