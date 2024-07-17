
import SingleService from "./SingleService";
import SectionTitle from "../Common/SectionTitle";
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  const servicesSectionData = [
    {
      id: 1,
      title: t('services.service-title-1'),
      paragraph: t('services.service-description-1')
    },
    {
      id: 2,
      title: t('services.service-title-2'),
      paragraph: t('services.service-description-2') 
    },
    {
      id: 3,
      title: t('services.service-title-3'),
      paragraph: t('services.service-description-3') 
    }
  ];
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionTitle
          title={t('services.title')}
          paragraph={t('services.firstLine')}
          mb="44px"
        />
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
              {servicesSectionData.map((service) => (
                <SingleService key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
