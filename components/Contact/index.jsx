import Mailto from "react-mailto-link";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
      <div className="container">
        <div className="flex flex-row min-h-screen justify-center items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
               <h1 className="mb-12 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Kontakt
              </h1>
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Gemeinsam bringen wir Ihre IT aufs nächste Level
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Ob Sie gerade erst mit einer Idee starten oder bereits ein ausgereiftes Konzept haben – wir unterstützen Sie mit strategischer IT-Beratung ohne Herstellerbrille und helfen Ihnen dabei, Ihre IT-Landschaft nachhaltig zu optimieren.
              </p>
              <p className="mb-12">
                <Link
                target="_blank"
                href="https://outlook.office365.com/owa/calendar/bookingsasenode@aseno.de/bookings/"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                Erstgespräch buchen
                </Link>
              </p>
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Ihr Erfolg ist unser Antrieb
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              Sie haben Fragen zu unseren Leistungen oder möchten mehr über uns erfahren?
              Wir sind gerne für Sie da. Schreiben Sie uns – wir freuen uns auf Ihre Nachricht!  &nbsp;
              {/* <Mailto email="office@aseno.de" obfuscate={true} style={{textDecorationLine:'underline'}}>
                office@aseno.de
              </Mailto>. */}
              </p>
              <p className="mb-12">
                    <Mailto
                    email="office@aseno.de" obfuscate={true}
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                        E-Mail schreiben
                    </Mailto>
                </p>
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Sie möchten Teil unseres Teams werden?
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                Wir suchen engagierte Software Engineers, die mit uns die Zukunft gestalten möchten.
                </p>
                <p className="mb-12">
                    <Link
                    href="/blog-senior"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      Jetzt bewerben
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
