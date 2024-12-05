import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbCube } from "react-icons/tb";
import { MdOutlineShield } from "react-icons/md";
import { TbCheckbox } from "react-icons/tb";
const whyus = () => {
    const heading = ["Quality", "Affordability", "Availability", "Warranty"];
    const description = ["We provide the best quality in live sound and original equipments of major companies",
        "We provide services in cheap price and are majorly availabe but not limited to North-East part of India",
        "Here you can find all kinds of live sound hardware such as speakers, amplifiers, mixers, cables , ets",
        "We provide warranty on the original companies product"];
    const icons = [TbCheckbox, FaRegMoneyBillAlt, TbCube, MdOutlineShield];
    return (
        <>
            <section id="features" className="features">
                <div className="container  text-white" data-aos="fade-up">
                    <div className="flex lg:flex-row flex-col">
                        <div className="image min-h-[400px] lg:w-2/3 bg-cover bg-center	" style={{ backgroundImage: 'url("https://arjangillsounds.com/assets/img/wallpaperflare.com_wallpaper.jpg")' }} data-aos="fade-right"></div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                            {heading.map((head, index) => {
                                return (
                                    <div key={index} className="flex m-4" data-aos="zoom-in" data-aos-delay="150">
                                        <div className="w-20 flex justify-center">
                                            {React.createElement(icons[index], { className: "icon text-8xl h-10" })}
                                        </div>
                                        <div>
                                            <h4>{head}</h4>
                                            <p>{description[index]}</p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default whyus;