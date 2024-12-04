
'use client';

import { useEffect, useRef, } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const heromain = () => {
    console.log("kih")
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const gradient = useRef<HTMLElement | null>(null);
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
                const mm = gsap.matchMedia();

                mm.add("(min-width: 1024px)", () => {
                    // Animations for larger screens
                    gsap.to("svg", {
                        scrollTrigger: {
                            trigger: ".content",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: true,
                        },
                        height: '5%',
                        width: '5%' // Include width only on larger screens
                    });
                });

                mm.add("(max-width: 1023px)", () => {
                    // Animations for smaller screens
                    gsap.to("svg", {
                        scrollTrigger: {
                            trigger: ".content",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: true,
                        },
                        height: '5%' // Only animate height
                    });
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

    useGSAP(
        () => {
            gsap.to(".headinganimate", {
                scrollTrigger: {
                    trigger: '.heading',
                    pin: true,   // Pin the trigger element while active
                    start: "top middle",  // Start when the top of `.image` hits the top of the viewport
                    end: "bottom center",
                    scrub: true,
                    // markers: true     // Smooth scrubbing, uses 1 second of "slow" scrub
                },
                y: '100%'
            });
        });

    return (
        <>

            <section className="lottie-container">
                <div ref={lottieContainerRef} className="animation">

                </div>
                <div className="heading grid lg:grid-cols-12 grid-cols-5 grid-rows-[300px_200px] ">
                    <div className=" lg:col-start-2 lg:col-span-5 col-span-5 self-end overflow-hidden">
                        <h1 className="headinganimate leading-none delay-50 text-9xl">ARJAN </h1>
                    </div>
                    <div className=" lg:col-start-10 lg:col-span-5 row-start-2 col-span-5 self-end overflow-hidden">
                        <h1 className="headinganimate leading-none delay-100 text-9xl"> GILL</h1>
                    </div>
                </div>

            </section>
            {/* 
            <section className="gradient"></section> */}

        </>
    );
}

export default heromain;