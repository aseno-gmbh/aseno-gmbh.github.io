"use client";
import Head from "next/head";
import Team from "@/components/Team";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>About us + SEO relevant keywords</title>
        <meta name="description" content="We create personalized user-friendly experiences to meet each patient’s unique health needs." />
      </Head>
      <Team />
    </>
  );
}
