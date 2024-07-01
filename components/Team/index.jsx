import SectionTitle from "../Common/SectionTitle";
import SingleMember from "./SingleMember";
import teamData from "./TeamData";
import { useTranslation } from 'react-i18next';

const Team = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="Team"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={t('team.title')}
            paragraph={t('team.paragraph')}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member) => (
              <SingleMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
