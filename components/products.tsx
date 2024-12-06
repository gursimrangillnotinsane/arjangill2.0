

const products = () => {
    return (
        <section className=" pb-10 px-0">
            <div className="w-full flex justify-center items-center lg:pt-0 pt-20 after:content-[''] after:w-32 after:bg-red-500 after:h-0.5 after:m-3" >
                <p>Products</p>
            </div>
            <div className="pl-14">
                <h2> Products</h2>
            </div>


            <div className=" grid  lg:grid-col-3 grid-col-1 lg:grid-rows-2 grid-rows-4 h-[70vh]" >
                <div className="lg:row-span-2 image ">
                    <div className="imageproduct w-full h-full bg-cover bg-center flex justify-center items-center	" style={{ backgroundImage: `url("https://c1.wallpaperflare.com/preview/28/825/259/radio-mixer-audio-studio.jpg")`, }} data-aos="fade-right">
                        <div className="headingpro">
                            <h4>Mixers</h4>
                        </div>

                    </div>
                </div>
                <div className="lg:row-span-2 row-start-2 ">
                    <div className="imageproduct w-full h-full bg-cover bg-center flex justify-center items-center		" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://c4.wallpaperflare.com/wallpaper/665/476/857/speakers-wallpaper-preview.jpg")' }} data-aos="fade-right">
                        <div className="headingpro">
                            <h4>Amplifiers</h4>
                        </div>
                    </div>
                </div>
                <div className="lg:col-start-3 lg:row-start-1 row-start-3">
                    <div className="imageproduct w-full h-full bg-cover bg-center	flex justify-center items-center	" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://c0.wallpaperflare.com/preview/941/532/943/audio-bright-close-up-dark.jpg")' }} data-aos="fade-right">
                        <div className="headingpro">
                            <h4>Microphpones</h4>
                        </div>
                    </div>
                </div>

                <div className="lg:col-start-3 lg:row-start-2">
                    <div className="imageproduct w-full h-full bg-cover bg-center	flex justify-center items-center	" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://c4.wallpaperflare.com/wallpaper/336/159/660/macro-music-background-dj-wallpaper-preview.jpg")' }} data-aos="fade-right">
                        <div className="headingpro">
                            <h4>View More</h4>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default products;