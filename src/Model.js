import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: -25,
      
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(contentRef.current, {
      yPercent: 0, 
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="model-page">
      <div ref={bgRef} className="model-bg"></div>
      <div ref={contentRef} className="model-wrapper">
        <div className="iframe-container">
          <iframe
            title="frieren (sousou no frieren)"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            mozAllowFullScreen="true"
            webkitAllowFullScreen="true"
            src="https://sketchfab.com/models/fa429b0cbf9744b2af4fb56234773800/embed?transparent=1"
          ></iframe>
        </div>
      </div>
    </div>
  );
}