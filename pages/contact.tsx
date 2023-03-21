import Head from "next/head";
import ContactPage from "@/components/contact";

export default function About() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact page for Nextjs website template"
        />
      </Head>
      <ContactPage />
    </>
  );
}
