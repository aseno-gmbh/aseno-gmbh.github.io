import Image from "next/image";
const SingleMember = ({ member }) => {
  const { imagePath, name, title, paragraph } = member;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex h-[270px] w-[270px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
          <div className="relative h-[250px] w-[250px] rounded-full overflow-hidden">
            <Image
              src={imagePath}
              alt="author"
              fill
              loading="lazy"
            />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {name}
        </h3>
        <p className="mb-3 pr-[12px] text-base font-medium leading-relaxed text-body-color">
          {title}
        </p>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleMember;