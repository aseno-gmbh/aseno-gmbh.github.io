import SectionTitleWithCallToAction from "../Common/SectionTitleWithCallToAction";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";

const ServicePrinciples = ({
  title,
  paragraph,
  servicePrinciplesData
}) => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitleWithCallToAction
            title= {title}
            paragraph= {paragraph}
            ctaText="Book your first strategic consultation now – together, we’ll take your IT to the next level!"
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
            {servicePrinciplesData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePrinciples;
