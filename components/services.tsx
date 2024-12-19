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

                    <div className='flex trans1 lg:col-start-3 col-start-1 servicediv ' style={{ display: 'flex', left: 0 }}>
                        <div className="icon-container ">
                            <BsMusicNoteList color="black" style={{ fontSize: '28px' }} />
                        </div>
                        <div className="sertext " data-aos="zoom-in" data-aos-delay="200">
                            <div className="flex flex-col justify-center items-center lg:py-[80px] pt-8  p-[20px]">
                                <h4> <a href="#manu">Live Sound</a> </h4>
                                <p className=' py-4'>We provide live sound on various different type of functions such as marriage, concert, jagrata and much more</p>
                                <div className='flex lg:flex-row flex-col-reverse lg:justify-evenly items-center w-full'>
                                    <ul>
                                        <li>Professional audio setup tailored to your event’s needs</li>
                                        <li>Experienced sound engineers ensuring crystal-clear quality</li>
                                        <li>Flexible packages for events of all sizes and types</li>
                                    </ul>
                                    <img className="service_img" src="https://arjangillsounds.com/assets/img/gallery/32.jpg" />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='flex  trans1 serviceright0 servicediv '>
                        <div className="icon-container mt-[10%]"><FaRegHandshake color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext" data-aos="zoom-in" data-aos-delay="200">
                            <div className="flex flex-col justify-center items-center lg:py-[80px] pt-8   p-[20px]">
                                <h4> <a href="#manu">Retail</a> </h4>
                                <p >We sell various kind of sound as well as ligh products</p>
                                <div className='flex lg:flex-row flex-col-reverse lg:justify-evenly items-center w-full'>
                                    <ul>
                                        <li>High-quality sound systems for personal and professional use</li>
                                        <li>Wide range of lighting solutions, including decorative options.
                                        </li>
                                        <li>Affordable pricing with reliable customer support and installation services</li>
                                    </ul>
                                    <img className="service_img" src="https://arjangillsounds.com/assets/img/gallery/2.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  trans1 serviceright1 servicediv'>
                        <div className="icon-container mt-[20%]"><IoHammerOutline color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext " data-aos="zoom-in" data-aos-delay="300">
                            <div className="flex flex-col justify-center items-center lg:py-[80px] pt-8  p-[20px]">
                                <h4>Installation</h4>
                                <p >We install custom sound systems to give best performance</p>
                                <div className='flex lg:flex-row flex-col-reverse lg:justify-evenly items-center w-full'>
                                    <ul>
                                        <li>Expert installation tailored to your venue’s specific needs.</li>
                                        <li>Comprehensive setup including speakers, mixers, and amplifiers.</li>
                                        <li>Trusted by religious places, schools, bars, hotels, and more.</li>
                                    </ul>
                                    <img className="service_img" src="https://wg.scene7.com/is/image/wrenchgroup/modern-living-room-with-surround-sound-set-up-bb21wi001wg?$Wrench_New$" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex  trans1 serviceright2 servicediv'>
                        <div className="icon-container mt-[30%]"><BsBoxes color="black" style={{ fontSize: '28px' }} /></div>
                        <div className="sertext " data-aos="zoom-in" data-aos-delay="100">
                            <div className="flex flex-col justify-center items-center lg:py-[80px] pt-8  p-[20px]">
                                <h4><a href="#manu">Manufactuting</a> </h4>
                                <p >Custom box, moniter, linear, bass with speakers and flight case can be ordered </p>
                                <div className='flex lg:flex-row flex-col-reverse lg:justify-evenly items-center w-full'>
                                    <ul>
                                        <li>Customizable sound solutions,including monitors, linear, and bass setups.</li>
                                        <li>Durable flight cases available for secure storage and transport.</li>
                                        <li>Amplifiers and a wide range of accessories to complete your audio needs.</li>
                                    </ul>
                                    <img className="service_img" src="https://linearraysoundsystem.com/wp-content/uploads/2021/04/3-Wooden-Speaker-Box-Manufacturer.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default services;    