import { useState, useEffect } from "react";

function getWindowDimensions() {
  // const { innerWidth: width, innerHeight: height } = window;
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  return {
    width,
    height,
  };
}

function getElementHeights(height: number) {
  const contactHeight =
    document.getElementById("contactCard")?.clientHeight ?? 0;
  const bannerHeight = document.getElementById("banner")?.clientHeight ?? 0;
  const bodyHeight = height - bannerHeight;
  return { contactHeight, bannerHeight, bodyHeight };
}

export default function useWindowDimensions() {
  const [windowdimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [bannerHeight, setBannerHeight] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [contactCardHeight, setContactCardHeight] = useState(0);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      const heights = getElementHeights(windowdimensions.height);
      setBannerHeight(heights.bannerHeight);
      setBodyHeight(heights.bodyHeight);
      setContactCardHeight(heights.contactHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowdimensions.height]);

  useEffect(() => {
    const heights = getElementHeights(windowdimensions.height);
    setBannerHeight(heights.bannerHeight);
    setBodyHeight(heights.bodyHeight);
    setContactCardHeight(heights.contactHeight);
  }, [bannerHeight, windowdimensions.height]);

  return { contactCardHeight, bannerHeight, bodyHeight };
}
