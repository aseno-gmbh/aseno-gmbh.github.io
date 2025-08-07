import SectionTitleWithCallToAction from "../Common/SectionTitleWithCallToAction";
import SingleFeature from "./SingleFeature";

const Features = ({
  title,
  paragraph,
  featuresData
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
            ctaText=""
            ctaLink="/strategy"
            ctaLinkName={"IT-Strategie & Lösungen im Überblick"}
            center
          />

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

export default Features;
