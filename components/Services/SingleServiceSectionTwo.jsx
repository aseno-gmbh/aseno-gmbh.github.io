import { useTranslation } from 'react-i18next';

const SingleServiceSectionTwo = ({ service }) => {
    const { id, title, paragraph } = service;
    const { t } = useTranslation();

    return (
        <div className="mb-9">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {/* {title} */}
            {t('services.' + service.id +'-expertice-titel')}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            {/* {paragraph} */}
            {t('services.' + service.id +'-expertice-description')}
        </p>
      </div>
    );
  };
  
  export default SingleServiceSectionTwo;