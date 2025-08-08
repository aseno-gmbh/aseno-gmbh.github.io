//import SectionTitle from "../Common/SectionTitle";
import SectionTitle from "../Common/SectionTitle";
import SectionTitleWithCallToAction from "../Common/SectionTitleWithCallToAction";
import SingleFeature from "../Features/SingleFeature";

const ServicePrinciples = ({
  title,
  paragraph,
  servicePrinciplesData
}) => {
  return (
    <>
      <section
        id="principles"
        //className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
        //className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
          className="relative z-10 overflow-hidden pt-[150px] pb-16 md:pt-[180px] md:pb-[120px] xl:pt-[180px] xl:pb-[80px] 2xl:pt-[210px] 2xl:pb-[100px]"
      >
        <div className="container">
          <SectionTitleWithCallToAction
            title= {title}
            paragraph= {paragraph}
            //ctaText="Book your first strategic consultation now – together, we’ll take your IT to the next level!"
            ctaLink="/strategy"
            ctaLinkName={"Von der Idee zur Lösung"}
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
