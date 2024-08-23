import SectionTitle from "@/components/Common/SectionTitle";
import teamData from "./TeamData";
import SingleMember from "./SingleMember";

const Team = () => {
  return (
    <>
    <section
      id="Team"
      className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Team"
          paragraph="Meet our team! Expertise is not merely a possession but a tool wielded with finesse, shaping the digital healthcare future with every innovation they conceive."
          // paragraph="We at ASENO are responsible and health-conscious IT experts. And we want to use our IT expertise to ensure that new and proven technologies are used for the benefit of humanity."
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
