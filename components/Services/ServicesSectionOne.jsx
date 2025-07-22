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
      <strong> {text} </strong>
    </p>
  );

  return (
    <section id="services" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 ">
              <SectionTitle
                title="Ihr Weg zur maßgeschneiderten IT-Lösung"
                paragraph="Wir bringen Ihre IT-Initiative strukturiert, effizient und zukunftssicher ins Ziel. Unser fünfstufiger Ansatz liefert klare Ergebnisse: skalierbar, wartbar und exakt auf Ihre Anforderungen zugeschnitten."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[860px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3  lg:w-full ">
                    <List text="Schritt 1 – Strategisches Erstgespräch" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    In einem kostenfreien Strategiegespräch (ca. 1 Stunde) analysieren wir Ihre Ziele, fachlichen Anforderungen und technischen Rahmenbedingungen. Sie erhalten eine erste technische Einschätzung sowie konkrete Vorschläge, wie eine Zusammenarbeit aussehen kann – transparent, lösungsorientiert, ohne Verkaufsdruck.
                    </p>
                    <List text="Schritt 2 – Konzeption & Planung" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    In einem eintägigen Workshop erarbeiten wir gemeinsam ein Konzept, welches exakt auf ihre fachlichen Anforderungen zugeschnitten ist. Ziel ist ein präziser Umsetzungsplan inklusive Aufwandsschätzung. Unsere Lösungsarchitektur ist modular – von S bis XL. Kunden können klein starten und jederzeit skalieren.
                    Ergebnis: Ein ausgereiftes Konzept mit Zeitplan, klar definiertem Scope und transparenten Festkosten.
                    </p>
                    <List text="Schritt 3 – Umsetzung mit technischer Präzision" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Wir stellen ein dediziertes Projektteam mit dem passenden Technologie-Stack zusammen. Entwicklungsumgebung, Datenflüsse und Schnittstellen werden aufgesetzt.
                    Wir arbeiten agil mit festen Sprints – alle zwei Wochen liefern wir funktionierende Ergebnisse, präsentieren den Fortschritt und integrieren Kundenfeedback unmittelbar. Änderungswünsche werden kontrolliert aufgenommen und professionell umgesetzt.
                    </p>
                    <List text="Schritt 4 – Übergabe des produktionsreifen Systems" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Am Ende steht ein voll funktionsfähiges, produktionsreifes System – dokumentiert, getestet und übergeben. Der Know-how-Transfer ist Teil unseres Anspruchs: Ihre Teams können das System nachhaltig betreiben, erweitern oder durch uns weiterentwickeln lassen.
                    </p>
                    <List text="Schritt 5 – Betrieb & Weiterentwicklung" />
                    <p className="mb-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                   Auch nach dem Go-live bleiben wir Ihr Partner. Systeme müssen gepflegt, erweitert oder an neue Anforderungen angepasst werden. Wir bieten langfristigen Support und gezielte Weiterentwicklungen – genau dann, wenn Sie sie brauchen.
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
