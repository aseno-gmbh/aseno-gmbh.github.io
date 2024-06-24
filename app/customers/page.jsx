import Head from "next/head";
import Testimonials from "@/components/Testimonials";
export default function CustomersPage() {
  return (
    <>
      <Head>
        <title>Our Customers + SEO relevant keywords</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <Testimonials />
    </>
  );
}
