import Image from "next/image";

const ServicesSectionTwo = () => {
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
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Scalable Business Model 
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Data is one of the most important resources of modern organizations. More and more companies are using data for their processes and decisions to achieve their individual business goals.
One of the most important question is which products do your customers need and how can you provide new services by using the data you have currently available?
Could you combine these data with some additional information to offer even more personalized services according to the known preferences of each customer or do you need to rethink your business for the digital age?

ASENO has more than 15 years of experience on the German IT market and will be happy to answer your questions. Please schedule a free meeting with us! In the past few years, BigData products for the analysis, processing and visualization of internal data have been successfully introduced in the productive environment.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Meaningful & Useful Data
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Many businesses have large amounts of information that is poorly organized and difficult to access. If your data is failing to fulfill its potential, ASENO will help you gain a competitive advantage.
Are your business decisions based on your customer data? can you ask and answer questions with data while receiving new customer order?
Do you want to maximize the return on your data by giving your employees the opportunity to discover the hidden insights?
You want to dive deep into your data without learning advanced analytics technologies?
ASENO is focused on helping people see and understand data. With us you will find opportunities in your business that you have never seen before!
</p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Infrastructure & Software
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Many organizations and departments are working on, or planning new digital products. The IT infrastructure and the appropriate software are crucial for every success.
Do not reinvent the wheel!
On premise, Cloud or Hybrid infrastructure? Enterprise Resource Planning (ERP), Customer Relationship Management (CRM) and many more excellent software products are out there available for you and every day smart engineers are working hard to make them even better.
However, there is no silver bullet! which one is best for your business and how to update, extend, migrate or build it from scratch?
ASENO has more than 15 years experience on building and running data intensive applications - both on private and public cloud. We are happy to analyze your business needs, share best practices and help you introduce the most appropriate solution into your enterprise.

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
