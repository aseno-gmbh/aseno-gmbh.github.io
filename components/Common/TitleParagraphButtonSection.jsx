import SectionTitleWithButton from "../Common/SectionTitleWithButton";

const TitleParagrapButtonSection = ({title, paragraph, linkPath, linkName}) => {
  return (
    <>
      <section
        id="newSection"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitleWithButton
            title={title}
            paragraph={paragraph}
            center
            linkPath={linkPath}
            linkName={linkName}
          />
        </div>
      </section>
    </>
  );
};

export default TitleParagrapButtonSection;
