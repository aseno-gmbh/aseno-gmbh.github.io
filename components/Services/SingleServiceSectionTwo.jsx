const SingleServiceSectionTwo = ({ service }) => {
    const { title, paragraph } = service;
    
    return (
        <div className="mb-9">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            {paragraph}
        </p>
      </div>
    );
  };
  
  export default SingleServiceSectionTwo;