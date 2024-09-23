import SectionTitle from "../Common/SectionTitle";
import SingleServicePrinciple from "./SingleServicePrinciple";

const ServicePrinciples = ({
  title,
  paragraph,
  featuresData
}) => {
  return (
    <>
      <section
        id="features"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <SectionTitle
            title= {title}
            paragraph= {paragraph}
            center
          />

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
                {featuresData.map((feature) => (
                    <SingleServicePrinciple key={feature.id} feature={feature} />
                ))}
            </div>
    
        </div>
      </section>
    </>
  );
};

export default ServicePrinciples;
