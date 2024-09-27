import SectionTitleWithCallToAction from "../Common/SectionTitleWithCallToAction";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";

const ServicePrinciples = ({
  title,
  paragraph,
  featuresData
}) => {
  return (
    <>
      <section
        id="features"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
      >
        <div className="container">
          <SectionTitleWithCallToAction
            title= {title}
            paragraph= {paragraph}
            //ctaText="Book your first free strategy consultation with us now!"
            ctaLink="https://outlook.office365.com/owa/calendar/bookingsasenode@aseno.de/bookings/"
            ctaLinkName={"First Free Consultation"}
            center
          />
           {/* <SectionTitle
            title= {title}
            paragraph= {paragraph}
            center
          /> */}
          {/* <SectionTitle
            title= {title}
            paragraph= {paragraph}
            center
          /> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePrinciples;
