
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { BsMusicNoteList } from "react-icons/bs";
const services = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".containerServices",
                pin: true, // Pin the container
                start: "top 5%", // Start animation when the container reaches the center
                end: "bottom top", // Extend the scrollable area
                scrub: 0.5, // Smooth scroll
                markers: true, // Show debug markers
            },
        });

        // Animating `.serviceright0` and `.serviceright1`
        timeline
            .to(".serviceright3", {
                left: 0,
                display: "block",
                // duration: 1,
                // ease: "power2.out",
            })
            .to(".serviceright0", {
                left: 0,
                display: "block",
                // duration: 1,
                // ease: "power2.out",
            })
            .to(".serviceright1", {
                left: 0,
                display: "block",
                // duration: 1,
                // ease: "power2.out",
            })
            .to(".serviceright2", {
                left: 0,
                display: "block",
                // duration: 1,
                // ease: "power2.out",
            });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className='containerServices h-screen'>
            <div className="w-full flex justify-center items-center after:content-[''] after:w-32 after:bg-yellow-500 after:h-0.5 after:m-3" >
                <p>Services</p>
            </div>
            <div className="" data-aos="fade-up">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Check our Services</p>
                </div>

                <div className="grid text-white grid-cols-4 gap-4 ">
                    <div className=" trans1 col-span-1 col-start-1 serviceright3 relative left-[600px] hidden  h-[60vh] bg-[rgb(217_217_217)] text-black" data-aos="zoom-in" data-aos-delay="100">
                        <div className="flex flex-col items-center justify-center h-full p-10">
                            <div className="w-[20%] h-[20%] bg-[#ffc451] flex "> <BsMusicNoteList color="black" /></div>
                            <h4><a href="https://www.youtube.com/@arjangillsounds9191/videos" target="_blank"> Live Sound</a> </h4>
                            <p className="text-black" >We provide live sound on various different type of functions such as marriage, concert, jagrata and much more</p>
                        </div>
                    </div>

                    <div className="trans1 col-start-2 serviceright0 relative left-[600px] hidden bg-[rgb(217_217_217)]  h-[60vh] text-black" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="fa fa-handshake-o" aria-hidden="true"></i></div>
                            <h4> <a href="#manu">Retail</a> </h4>
                            <p className='text-black'>We sell various kind of sound as well as ligh products  sdfsdf</p>
                        </div>
                    </div>

                    <div className=" col-start-3 serviceright1 relative left-[600px] hidden bg-[rgb(217_217_217)]  text-black" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"></div>
                            <h4>Installation</h4>
                            <p className='text-black'>We install sound systems including speaker, mixer, amplifier in various religious places, schools, bars ,hotel and more</p>
                        </div>
                    </div>

                    <div className=" col-start-4 serviceright2 relative left-[600px] hidden bg-[rgb(217_217_217)]   text-black" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-boxes"></i></div>
                            <h4><a href="#manu">Manufactuting</a> </h4>
                            <p className='text-black'>Custom box, moniter, linear, bass with speakers and flight case for the same and amplifier and much more can be ordered </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default services;    