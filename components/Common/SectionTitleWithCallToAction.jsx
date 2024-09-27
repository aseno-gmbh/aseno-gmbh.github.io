import Link from "next/link";

const SectionTitleWithCallToAction = ({
    title,
    paragraph,
    ctaText,
    ctaLinkName,
    ctaLink,
    width = "570px",
    center,
    mb = "100px",
  }) => {
    return (
      <>
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
          <p className="mt-2 text-base !leading-relaxed text-body-color md:text-lg">
           <strong> {ctaText} </strong>
          </p>
          <p className="mt-10">
            <Link
            target="_blank"
            href={ctaLink}
            className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
                {ctaLinkName}
            </Link>
          </p>
        </div>
      </>
    );
  };
  
  export default SectionTitleWithCallToAction;
  