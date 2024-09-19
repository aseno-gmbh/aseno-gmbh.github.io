import SectionTitleWithButton from "../Common/SectionTitleWithButton";
import SingleFeature from "./SingleFeature";

const FeaturesWithButton = ({
  title,
  paragraph,
  buttomName,
  buttomPath,
  featuresData
}) => {
  return (
    <>
      <section
        id="featuresWithButton"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
            <SectionTitleWithButton
                title= {title}
                paragraph= {paragraph}
                buttomName={buttomName}
                buttomPath={buttomPath}
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

export default FeaturesWithButton;