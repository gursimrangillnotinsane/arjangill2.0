
'use client';

import { useEffect, useRef, } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Ultra } from 'next/font/google';
const ultra = Ultra({
    weight: ['400',],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})


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
                end: vars.end || "bottom bottom",
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
                    gsap.to(".animation", {
                        scrollTrigger: {
                            trigger: ".content",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: .5,
                            // markers: true
                        },
                        zIndex: 10,
                        height: '8%',
                        width: '8%' // Include width only on larger screens

                    });
                });

                mm.add("(max-width: 1023px)", () => {
                    // Animations for smaller screens
                    gsap.to(".animation ", {
                        scrollTrigger: {
                            trigger: ".content",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: true,
                            onUpdate: function () {
                                // Get the current height of the SVG
                                const currentHeight = gsap.getProperty(".animation ", "height");

                                // When the height reaches 40%, start reducing the width
                                if (currentHeight <= '40') {
                                    console.log(currentHeight)
                                    gsap.to(" .animation ", {
                                        width: '10%',
                                        height: '10%'// Example: change the width when height reaches 40%
                                    });
                                }
                                if (currentHeight >= '40') {
                                    console.log(currentHeight)
                                    gsap.to(".animation ", {
                                        width: '100%' // Example: change the width when height reaches 40%
                                    });
                                }
                            }
                        },
                        height: '10%' // Only animate height
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
                    // pin: true,   // Pin the trigger element while active
                    start: "10% top",  // Start when the top of `.image` hits the top of the viewport
                    end: "bottom center",
                    scrub: 2,
                    // markers: true     // Smooth scrubbing, uses 1 second of "slow" scrub
                },
                y: '100%'
            });

        });

    useGSAP(
        () => {
            gsap.to(".headinganimate2", {
                scrollTrigger: {
                    trigger: '.heading',
                    pin: true,   // Pin the trigger element while active
                    start: "top top",  // Start when the top of `.image` hits the top of the viewport
                    end: "bottom center",
                    scrub: .5,
                    // markers: true     // Smooth scrubbing, uses 1 second of "slow" scrub
                },
                y: '200%'
            });
        }
    )
    useGSAP(
        () => {
            gsap.to(".headinganimate3", {
                scrollTrigger: {
                    trigger: '.heading',
                    // pin: true,   // Pin the trigger element while active
                    start: "49% center",  // Start when the top of `.image` hits the top of the viewport
                    end: "bottom center",
                    scrub: .5,
                    // Smooth scrubbing, uses 1 second of "slow" scrub
                },
                y: '100%'
            });
        }
    )

    return (
        <>
            <section className="lottie-container" style={{ padding: 0 }}>
                <div ref={lottieContainerRef} className="animation">

                </div>
                <div className={`heading grid lg:grid-cols-12 grid-cols-1 lg:grid-rows-[300px_200px] grid-rows-[300px_125px_100px_75px_75px] ${ultra.className} z-20`}>
                    <div className=" lg:col-start-2  col-span-5 self-end overflow-hidden">
                        <h1 className='headinganimate leading-none  text-9xl trans3 '>ARJAN </h1>
                    </div>
                    <div className=" lg:col-start-10 col-span-5 row-start-2 lg:row-start-1 self-end overflow-hidden">
                        <h1 className="headinganimate3 leading-none  text-9xl trans1"> GILL</h1>
                    </div>
                    <div className="lg:col-start-4 lg:row-start-2 col-span-2 row-start-3  self-end  overflow-hidden">
                        <h1 className="headinganimate2 leading-none  text-5xl  trans2"> SOUND</h1>
                    </div>
                    <div className=" lg:col-start-7   lg:row-start-2 row-start-4  self-end overflow-hidden">
                        <h1 className="headinganimate3 leading-none delay-178 text-5xl trans2"> AND</h1>
                    </div>
                    <div className=" lg:col-start-9   lg:row-start-2 row-start-5 col-span-2 self-end overflow-hidden">
                        <h1 className="headinganimate2 leading-none delay-90 text-5xl trans1"> LIGHT</h1>
                    </div>

                </div>

            </section>
            {/* 
            <section className="gradient"></section> */}

        </>
    );
}

export default heromain;