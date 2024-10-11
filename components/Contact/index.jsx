import Mailto from "react-mailto-link";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
               <h1 className="mb-12 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Contact
              </h1>
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Together, we'll take your IT to the Next Level
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Whether you're just starting with an idea or already have a fully developed concept and need a second expert opinion for implementation, we offer independent, strategic IT consulting to optimize your IT landscape for the long term. Book your free strategy consultation below!
              </p>
              <p className="mb-12">
                <Link
                target="_blank"
                href="https://outlook.office365.com/owa/calendar/bookingsasenode@aseno.de/bookings/"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  First Free Consultation
                </Link>
              </p>
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Your Success is Our Priority
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Do you have questions about our services or want to learn more about us? We’re here to help. Simply send us an email – we look forward to hearing from you!  &nbsp;
              {/* <Mailto email="office@aseno.de" obfuscate={true} style={{textDecorationLine:'underline'}}>
                office@aseno.de
              </Mailto>. */}
              </p>
              <p className="mb-12">
                    <Mailto
                    email="mailto:office@aseno.de" obfuscate={true}
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                        Write a Mail
                    </Mailto>
                </p>
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                You want to join our Team?
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                We are looking for software engineers who are willing to shape the future with us.
                </p>
                <p className="mb-12">
                    <Link
                    href="/blog-senior"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                        How to apply
                    </Link>
                </p>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
