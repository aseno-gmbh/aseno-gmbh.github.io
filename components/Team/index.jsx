import Features from "../Features";
import teamData from "./TeamData";

const Team = () => {
  return (
      <Features 
          title={"Team"}
          paragraph={"Meet our team! Expertise is not merely a possession but a tool wielded with finesse, shaping the digital healthcare future with every innovation they conceive."}
          featuresData={teamData}
      />
  );
};

export default Team;
