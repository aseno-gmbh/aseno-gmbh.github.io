import servicesSectionTwoData from "./ServicesSectionTwoData";
import SingleServiceSectionTwo from "./SingleServiceSectionTwo";

const ServicesSectionTwo = (

  {
    myArray
  }
) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div> */}
          {/* <div className="w-full px-4 lg:w-1/2"> */}
          <div className="w-full px-4 ">
            {/* <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s"> */}
            <div className="wow fadeInUp max-w-[860px]" data-wow-delay=".2s">
              {servicesSectionTwoData.map((service) => (
                <SingleServiceSectionTwo key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionTwo;
