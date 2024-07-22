import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";


const CustomersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Customers"
        description="Here ist our new Customers Page :-)"
      />
      <Testimonials />
    </>
  );
};

export default CustomersPage;