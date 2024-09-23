const SingleServicePrinciple = ({ feature }) => {
    const { minHeight= "320px", title, paragraph } = feature;
    return (
      <div className="w-full">
        <div
            className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
            data-wow-delay=".1s"
            style={{minHeight: minHeight }}
        >
          {/* <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div> */}
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    );
  };
  
  export default SingleServicePrinciple;
  