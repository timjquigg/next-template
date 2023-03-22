import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Section1 = dynamic(() => import("./section1"));
const Section2 = dynamic(() => import("./section2"));
const Section3 = dynamic(() => import("./section3"));

export default function HomePage() {
  // const SSR = typeof window === "undefined";

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
        </>
      )}
    </>
  );
}
