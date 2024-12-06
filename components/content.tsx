import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoCheckmarkDone } from "react-icons/io5";




const content = () => {
    return (

        <section id="about" className="content about">
            <div className="container" data-aos="fade-up">

                <div className="flex lg:flex-row-reverse flex-col gap-4">
                    <div className="lg:w-2/5 " >
                        <a href="gallery.html"> <img src="https://www.arjangillsounds.com/assets/img/abouts.jpg" className="img-fluid" alt="" /> </a>
                    </div>
                    <div className="lg:w-2/3  px-2" data-aos="fade-right" data-aos-delay="100">
                        <h2 >The finest sound and DJ store in Punjab</h2>
                        <p className="italic ">
                            Step into our world of cutting-edge technology, premium equipment, and expert advice, where every audiophile's dream becomes a reality.</p>
                        <ul className="ml-6">

                            <li><IoCheckmarkDone className="icon" /> Bringing your events to life with exceptional live sound services. From concerts to conferences, we ensure flawless audio delivery, captivating audiences with crystal-clear, immersive sound experiences.</li>
                            <li><IoCheckmarkDone className="icon" />From high-end speakers to amplifiers, subwoofers to headphones, we cater to a wide range of audio enthusiasts, ensuring that every individual finds the perfect match for their unique requirements.</li>
                            <li><IoCheckmarkDone className="icon" />Knowledgeable and passionate audio experts are at your service, ready to guide you through the intricacies of sound technology.</li>
                        </ul>
                        <p>
                            At our audio sound system shop, we strive for nothing less than perfection in sound reproduction. We invite you to indulge your auditory senses and discover the true potential of your music in an environment dedicated to extraordinary audio experiences.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default content;