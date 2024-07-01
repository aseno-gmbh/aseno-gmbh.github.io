
import { useTranslation } from 'react-i18next';

const SingleMember = ({ member }) => {
  const { t } = useTranslation();
  //const { id, icon, name, title, paragraph } = member;
  const { id, icon, name } = member;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {name}
        </h3>
        <p className="mb-3 pr-[12px] text-base font-medium leading-relaxed text-body-color">
          {t('team.'+ id +'-title')}
        </p>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {t('team.'+ id +'-paragraph')}
        </p>
      </div>
    </div>
  );
};

export default SingleMember;
