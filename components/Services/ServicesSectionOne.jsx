import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ServicesSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="services" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              <SectionTitle
                title="Dive Deep Into Your Opportunities!"
                paragraph="With our simple but very efficient five-step plan, we take you from the very beginning to the final step."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[860px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3  lg:w-full ">
                    <List text="Step  1   -  Get to Know" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We offer a free webinar. With an hour, ASENO engineers will figure out what our customers' goals, needs and pain points are. If ASENO can help, we will discuss different options based on our experience. At the end of our webinar, the ASENO engineers will provide initial feedback! 
                    </p>
                    <List text="Step  2   -  Create a Concept" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    ASENO creates a concept with the aim of providing an offer with a cost estimate.
Here we offer a day workshop to exactly understand the requirements of our customers.
Based on the workshop, we create a concept with a business and technical focus. We offer solutions in sizes S, M, L and XL. The customer can start with S and later switch to L or XL.
The result is a concept! with an existing schedule to complete the project. All costs are transparent and fixed.
                    </p>
                    <List text="Step  3   -  Doing the Right Job" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Developing, Testing & most important - Customer Feedback-Loop!
ASENO initializes a customer-specific project. Resources, data pipelines and a special team with the required know-how is formed to fulfill the project on time & best quality possible. 
Agile development. Every 2 weeks ASENO presents the progress of the current work. The customer can submit feedback and change requests. Test & communication with the customer are provided on a weekly basis.
                    </p>
                    <List text="Step  4   -  Hand Over" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Delivery the final product including documentation and know-how transfer to the customer. Our team takes care that the customer is satisfied with the final product / work.
                    </p>
                    <List text="Step  5   -  Keep on Helping" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We do not leave our customers on its own after we finished the good work. From time to time a software needs to be updated, customers wish more functionalities or changes.
ASENO offers a support and additional service if needed/ required.
                    </p>
                  </div>
{/* 
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionOne;
