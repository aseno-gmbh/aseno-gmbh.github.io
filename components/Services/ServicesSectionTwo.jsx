import Image from "next/image";

const ServicesSectionTwo = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
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
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                We bring your IT up to the latest technological standards
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                With our focus on cloud computing, big data, and AI, we develop modern, scalable IT systems that meet the highest security standards. This optimizes your business processes, reduces costs, increases efficiency, and maximizes the value of your data. With us by your side, you’ll always stay at the cutting edge of technology – securing a clear competitive advantage.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                We strategically position your enterprise software for the future
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                As IT experts with decades of experience, we develop enterprise software that provides you with maximum decision-making flexibility at all times – thanks to its modular design. This means your software landscape is composed of individual modules that can easily be expanded or replaced with new functionalities. As a result, your enterprise software remains sustainable, flexible, and adaptable to future requirements.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Forget greenfield development
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Today, individual, interchangeable modules can be seen as proven software products that have been tested and verified by numerous top experts. These save you valuable time and costs! We integrate these best-practice-based software products into your IT landscape, tailor them to your specific requirements, and connect them intelligently. This way, modern, customized software solutions are created using a low-code approach, making them easy to maintain and significantly reducing the need for large IT teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionTwo;
