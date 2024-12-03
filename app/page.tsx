'use client';
import { useEffect, useRef, } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Home() {
  const lottieContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {


    gsap.registerPlugin(ScrollTrigger);
    console.log("Hello from Home");
    const lottieContainers = document.querySelectorAll(".animation");


    const LootieScrollTrigger = async (vars: { trigger: any; start?: string; endTrigger?: string; end: any; renderer: any; target: any; path: any; scrub: any; speed?: "slow" | "medium" | "fast"; markers?: any; rendererSettings?: any; }) => {
      let playhead = { frame: 0 },
        target = vars.target,
        speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
        st = {
          trigger: vars.trigger || ".trigger",
          end: vars.speed ? speeds[vars.speed] : vars.end || "+=1000", // Safe indexing,
          scrub: vars.scrub || 3,
          markers: vars.markers || false,
        };
      const lottie = await import("lottie-web");
      const animation = lottie.default.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
          preserveAspectRatio: "xMidYMid slice",
        },
      });

      animation.setSubframe(false);


      ScrollTrigger.create({
        trigger: vars.trigger,
        start: vars.start || "top center",
        endTrigger: vars.endTrigger || "body",
        end: vars.end || "+=1000",
        scrub: vars.scrub || 3,
        markers: vars.markers || false,
        onUpdate: (self) => {
          const frame = Math.round(animation.totalFrames * self.progress);
          animation.goToAndStop(frame, true);
        },

      });
      animation.addEventListener("DOMLoaded", function () {
        gsap.to("svg", {
          scrollTrigger: {
            trigger: ".content", // Element that triggers the animation
            start: "top bottom",  // Start when the top of `.image` hits the top of the viewport
            end: "bottom center",
            scrub: true,          // Smooth scrubbing, uses 1 second of "slow" scrub
          },
          height: '20%',
          width: '20%'
        });
      });
      return animation;
    };

    lottieContainers.forEach((container) => {
      LootieScrollTrigger({
        trigger: container,
        start: "top center",
        endTrigger: "body",
        end: "bottom center",
        renderer: "svg",
        target: container,
        path: "/hero2.json", // Adjust the path for Next.js public folder
        scrub: 3,

      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Code</a>
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">Experience</a>
          <a href="#">Job</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="lottie-container">
        <div ref={lottieContainerRef} className="animation"></div>
      </section>

      <section className="gradient"></section>

      <section className="website-content">
        <div className="content">
          <h1>YOUR WEBSITE</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            eligendi non saepe harum quis nam, corrupti, accusamus corporis
            enim quia, modi velit aliquam accusantium doloremque hic vitae
            voluptates illo facere.
          </p>
        </div>
      </section>
    </>
  );
}
