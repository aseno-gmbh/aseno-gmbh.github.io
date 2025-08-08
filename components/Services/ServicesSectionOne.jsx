import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SectionTitleWithSubtitle from "../Common/SectionTitleWithSubtitle";
import SectionTitleWithSubtitleAndCTA from "../Common/SectionTitleWithSubtitleAndCTA";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ServicesSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-3 flex items-center text-xl font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
      </span>
      <strong> {text} </strong>
    </p>
  );

  return (
    <section id="services" className="relative z-10 overflow-hidden pt-[150px] pb-16 md:pt-[180px] md:pb-[120px] xl:pt-[180px] xl:pb-[80px] 2xl:pt-[210px] 2xl:pb-[100px]">
      <div className="container flex flex-row min-h-screen justify-center items-center">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              <SectionTitleWithSubtitle
                //width="850px"
                title="Ihr Weg zur klaren, skalierbaren IT-Lösung"
                subtitle="Komplexität raus. Orientierung rein."
                paragraph="Viele Unternehmen stehen vor der gleichen Herausforderung:
                Technologie entwickelt sich schnell – doch was ist wirklich relevant? Was bringt konkreten Nutzen? Und wie trifft man Entscheidungen, ohne sich in Hype, Systembrüchen oder unnötiger Komplexität zu verlieren?"
                mb="44px"
              />
              <SectionTitle
                title="Genau hier setzen wir an."
                paragraph="Mit unserem fünfstufigen Vorgehen schaffen wir Klarheit: Wir zeigen Ihnen, was technisch möglich ist – und was sich für Sie tatsächlich lohnt. Ergebnis: eine IT-Lösung, die passt, mitwächst und Sie wieder handlungsfähig macht."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[860px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3  lg:w-full ">
                    <List text="Schritt 1 – Strategisches Erstgespräch" />
                    <p className="mb-1 text-base font-bold leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Kostenfrei | 1 Stunde | Ohne Verkaufsdruck
                    </p>
                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Gemeinsam schaffen wir einen klaren Überblick: Welche Ziele verfolgen Sie? Wo stehen Sie aktuell? Und was braucht es wirklich, um den nächsten Schritt zu gehen?
                    Unsere IT-Experten geben eine erste technische Einschätzung und zeigen realistische Optionen auf.
                    </p>
                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Keine Buzzwords, keine Hypes – nur Relevanz.
                    </p>
                    <p className="mb-10">
                      <Link
                      target="_blank"
                      href="https://outlook.office365.com/book/bookingsasenode@aseno.de/"
                      className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                      >
                          Erstgespräch buchen
                      </Link>
                    </p>
                    <List text="Schritt 2 – Konzeption & Planung" />
                    <p className="mb-1 text-base font-bold leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      1-Tages-Workshop | Ergebnis: Klarheit & Umsetzungsplan
                    </p>
                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Wir analysieren Ihre Anforderungen im Detail – fachlich wie technisch – und entwickeln daraus ein skalierbares, verständliches Umsetzungskonzept.
                    Ob Einstiegslösung oder langfristige Architektur: Unsere modularen Systeme sind in Größen von S bis XL planbar und ausbaubar.
                    </p>
                    <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Transparente Festpreise, klarer Scope, realistischer Zeitplan – damit Sie endlich planen können.
                    </p>
                    <List text="Schritt 3 – Umsetzung mit technischer Präzision" />
                    <p className="mb-1 text-base font-bold leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                     Agil | Transparent | Feedback-orientiert
                    </p>
                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Wir bauen Ihr System nicht ins Blaue, sondern entlang eines klaren Plans – mit einem dedizierten Projektteam, dem passenden Tech-Stack und zweiwöchigen Sprints.
                    Sie behalten jederzeit den Überblick, können aktiv steuern und fundierte Entscheidungen treffen. 
                    </p>
                    <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Änderungswünsche? Nehmen wir auf. Komplexität? Reduzieren wir – durch saubere Architekturen und pragmatische Lösungen.
                    </p>
                    <List text="Schritt 4 – Übergabe des produktionsreifen Systems" />
                    <p className="mb-1 text-base font-bold leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Bereit für den Einsatz – dokumentiert, übergeben, verstanden.
                    </p>
                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Am Ende erhalten Sie ein voll funktionsfähiges, getestetes System – keine Baustelle, sondern ein stabiler Baustein Ihrer digitalen Strategie.
                    </p>
                    <p className="mb-6 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Wir kümmern uns um den Know-how-Transfer, sodass Ihre Teams selbstständig weiterarbeiten können – oder wir übernehmen die Weiterentwicklung.
                    </p>
                    <List text="Schritt 5 – Betrieb & Weiterentwicklung" />
                    <p className="mb-1 text-base font-bold leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Langfristiger Partner statt Projekt-Abschluss
                    </p>
                    <p className="mb-1 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                   Digitalisierung ist kein Ziel, sondern ein Prozess. Wir bleiben an Ihrer Seite – mit technischer Betreuung, gezielter Weiterentwicklung und konkreten Antworten auf neue Anforderungen.
                    </p>
                     <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                   Wenn sich Ihr Business verändert, wächst Ihre IT einfach mit. Ohne Chaos. Ohne Reibungsverluste.
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
              <div className="mt-4">
               <SectionTitleWithSubtitleAndCTA
                //width="850px"
                title="Ihr Vorteil"
                subtitle="Wir geben Ihnen die Kontrolle zurück – über Ihre IT, Ihre Daten und Ihre digitale Zukunft."
                paragraph="Buchen Sie jetzt Ihr erstes kostenfreies Strategiegespräch – und bringen Sie Struktur in Ihre digitale Roadmap."
                ctaLinkName="Erstgespräch buchen"
                ctaLink="https://outlook.office365.com/book/bookingsasenode@aseno.de/"
                mb="44px"
              />
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
