import Head from "next/head";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";
export default function CustomersPage() {
  return (
    <>
      <Head>
        <title>Our Customers + SEO relevant keywords</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <Breadcrumb
        pageName="Portfolio"
        // description={t('services.firstLine')}
      />
      <Testimonials />
    </>
  );
}
