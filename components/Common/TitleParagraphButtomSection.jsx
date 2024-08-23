import Link from "next/link";

const TitleParagraphButtomSection = ({
    title,
    paragraph,
    width = "570px",
    center,
    mb = "100px",
    buttomName,
    buttomPath
  }) => {
    return (
      <>
        <section
          id="titleParagraphButtomSection"
          className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
        >
          <div className="container">
          <div
            className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
            data-wow-delay=".1s"
            style={{ maxWidth: width, marginBottom: mb }}
            >
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                {title}
                </h2>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                {paragraph}
                </p>
                <p className="mt-10">
                    <Link
                    target="_blank"
                    href={buttomPath}
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                        {buttomName}
                    </Link>
                </p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default TitleParagraphButtomSection;
  