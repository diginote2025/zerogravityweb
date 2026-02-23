"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Responsive() {
  const frameRef = useRef(null);
  const [device, setDevice] = useState("Desktop");

  useEffect(() => {
    const frame = frameRef.current;

    // GSAP Timeline for Automatic Switching
    const tl = gsap.timeline({
      repeat: -1, // Infinite Loop
      defaults: { duration: 2, ease: "expo.inOut" },
      onUpdate: () => {
        // Current width ke hisaab se label update karein
        const w = frame.offsetWidth;
        if (w > 900) setDevice("Desktop (100%)");
        else if (w > 500) setDevice("Tablet (768px)");
        else setDevice("Mobile (375px)");
      }
    });

    // Animation Sequence
    tl.to(frame, { width: "768px", height: "80vh" }, "+=3") // Hold desktop for 3s then Tablet
      .to(frame, { width: "375px", height: "75vh" }, "+=3") // Hold tablet for 3s then Mobile
      .to(frame, { width: "100%", height: "90vh" }, "+=3"); // Back to Full Desktop

    return () => tl.kill();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* Responsive Frame Container */}
      <div className="relative w-full flex justify-center items-center h-[85vh]">
        <div
          ref={frameRef}
          className="relative bg-white rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden border-[6px] border-zinc-800"
          style={{ width: "100%", height: "90vh" }}
        >
         

          {/* THE WEBSITE IFRAME */}
          <div className="w-full h-full bg-white">
            <iframe
              src="https://www.sociowright.in/"
              className="w-full h-full border-none"
              title="Sociowright Preview"
              loading="lazy"
            />
          </div>
        </div>
      </div>

  
    </div>
  );
}