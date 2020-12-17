import React from "react";

export default function CalculateDeviceType() {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [deviceType, setDeviceType] = React.useState("");

  React.useEffect(() => {
    function updateDimensions() {
      setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
      setWindowHeight(typeof window !== "undefined" ? window.innerHeight : 0);
      setDeviceType(
        windowHeight > 768
          ? windowWidth < 1100
            ? "tablet"
            : "desktop"
          : "mobile"
      );
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions.bind(this));
    return function cleanup() {
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  }, [windowHeight, windowWidth]);

  return { deviceType, windowHeight, windowWidth };
}
