import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";

export default function Root({ children }) {

  useEffect(() => {
    mediumZoom("img", {
      margin: 24,
      background: "#000000cc",
    });
  }, []);

  return children;
}