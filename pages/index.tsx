import Head from "next/head";

import HomePage from "@/components/homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <meta
          name="description"
          content="Home page for Nextjs website template"
        />
      </Head>
      <main style={{ padding: 0 }}>
        <HomePage />
      </main>
    </>
  );
}
