import ServicesSectionOne from "@/components/Services/ServicesSectionOne";
import ServicesSectionTwo from "@/components/Services/ServicesSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="ASENO helps all businesses not only reach, but exceed their goals. Our experience helps us lay out a strategy that perfectly fits our clients. This collaboration is essential for the successful transition from strategy, to plan, to action. Use our free webinar to see what we can do for you."
      />
      <ServicesSectionOne />
      <ServicesSectionTwo />
    </>
  );
};

export default ServicesPage;
