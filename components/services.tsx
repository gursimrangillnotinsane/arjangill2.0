'use client';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { BsMusicNoteList } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { IoHammerOutline } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";

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

            },
        });

        // Animating `.serviceright0` and `.serviceright1`
        timeline
            .to(".serviceright3", {
                left: '0%',
                display: "flex",
                scrub: .5,
                ease: "power4.inOut",
                // duration: 1,
                // ease: "power2.out",
            })
            .to(".serviceright0", {
                display: "flex",
                left: '-100%',
                top: '5%'
                // duration: 1,
                // ease: "power2.out",
            })
            .to(".serviceright1", {
                left: '-200%',
                display: "flex",
                top: '10%'
                // duration: 1,
                // ease: "power2.out",
            })
            .to(".serviceright2", {
                left: '-300%',

                display: "flex",
                top: '15%',
                // duration: 1,
                // ease: "power2.out",
            });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className='containerServices h-screen'>
            <div className="w-full flex justify-center items-center lg:pt-0 pt-20 after:content-[''] after:w-32 after:bg-[#ff5151] after:h-0.5 after:m-3" >
                <p>Services</p>
            </div>
            <div className="" data-aos="fade-up">

                <div className="section-title ">
                    <h2>Check our Services</h2>
                </div>

                <div className="grid grid-cols-12 gap-4  pt-12 ">

                    <div className='flex  trans1 lg:col-start-3 col-start-2 servicediv ' style={{ display: 'flex', left: 0 }}>
                        <div className="icon-container "><BsMusicNoteList color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext " data-aos="zoom-in" data-aos-delay="200">
                            <div className="flex flex-col justify-center items-center py-[80px]  px-[20px]">
                                <h4> <a href="#manu">Live Sound</a> </h4>
                                <p className='text-black py-4'>We provide live sound on various different type of functions such as marriage, concert, jagrata and much more</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex  trans1 serviceright0 servicediv '>
                        <div className="icon-container mt-[10%]"><FaRegHandshake color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext" data-aos="zoom-in" data-aos-delay="200">
                            <div className="flex flex-col justify-center items-center py-[80px]  px-[20px]">
                                <h4> <a href="#manu">Retail</a> </h4>
                                <p className='text-black'>We sell various kind of sound as well as ligh products</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex  trans1 serviceright1 servicediv'>
                        <div className="icon-container mt-[20%]"><IoHammerOutline color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext " data-aos="zoom-in" data-aos-delay="300">
                            <div className="flex flex-col justify-center items-center py-[80px]  px-[20px]">
                                <h4>Installation</h4>
                                <p className='text-black'>We install sound systems including speaker, mixer, amplifier in various religious places, schools, bars ,hotel and more</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex  trans1 serviceright2 servicediv'>
                        <div className="icon-container mt-[30%]"><BsBoxes color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext " data-aos="zoom-in" data-aos-delay="100">
                            <div className="flex flex-col justify-center items-center py-[80px]  px-[20px] ">
                                <h4><a href="#manu">Manufactuting</a> </h4>
                                <p className='text-black'>Custom box, moniter, linear, bass with speakers and flight case for the same and amplifier and much more can be ordered </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default services;    