import { Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const review = () => {
    const name = ["Varinder Sandhu", "Inder Mehra", "Yogesh Batra", "Platinum Desire Music", "Khed Mela"];
    const review = ["Best quality sound system in punjab.", "Awesome experience", "A very good quality sound provide by them to singers by their awsome music system", "Ghaint Sound 👌👌", "very talented & expert in their fields"];
    const img = ["assets/img/testimonials/varinder.png", "assets/img/testimonials/indra.png", "assets/img/testimonials/yogesh.png", "assets/img/testimonials/platinum.png", "assets/img/testimonials/khed.png"];
    return (
        <section className="bg-[rgb(16_16_16/54%)] pb-16 ">
            <Swiper pagination={true}
                modules={[Pagination, Scrollbar]}
                scrollbar={{ draggable: true }}
                loop={true}
                slidesPerView={1}
                className="mySwiper">
                {name.map((name, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center text-white pb-14'>
                                <img src={`https://arjangillsounds.com/${img[index]}`} className="testimonial-img" alt="" />
                                <h4>{name}</h4>
                                <p style={{ color: '#b8b8b8' }}>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    {review[index]}
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
            {/* <div className="container" data-aos="zoom-in">

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="assets/img/testimonials/varinder.png" className="testimonial-img" alt="" />
                                <h3>Varinder Sandhu</h3>
                                <h4>Forestep Institite</h4>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Best quality sound system in punjab.
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="assets/img/testimonials/indra.png" className="testimonial-img" alt="" />
                                <h3>Inder Mehra</h3>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Awesome experience
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="assets/img/testimonials/yogesh.png" className="testimonial-img" alt="" />
                                <h3>Yogesh Batra</h3>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    A very good quality sound provide by them to singers by their awsome music system                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="assets/img/testimonials/platinum.png" className="testimonial-img" alt="" />
                                <h3>Platinum Desire Music</h3>
                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    Ghaint Sound 👌👌
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="assets/img/testimonials/khed.png" className="testimonial-img" alt="" />
                                <h3>Khed Mela                </h3>

                                <p>
                                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                    very talented & expert in their fields
                                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div> */}
        </section>
    )
}

export default review;