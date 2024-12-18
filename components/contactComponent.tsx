const contactComponent = () => {
    const heading = ["For live show booking", "For Retail, Custom Installation and Manufacturing"];
    const text = [
        {
            href: 'https://wa.me/9417538691?text=I%20would%20like%20to%20know%20more%20about$20booking%20a%20show.',
            title: 'Harpreet Singh',
            number: '+91 94175 38691',
            callto: '+919417538691'
        },
        {
            href: 'https://wa.me/9855327591?text=I%20would%20like%20to%20get%20more%20info%20on%20products',
            title: 'Bikramjit Singh',
            number: '+91 98553 27591',
            callto: '+919855327591'
        },

    ]
    return (
        <section>
            <div>
                <h2>Contact us</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-4" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d856.6291478865978!2d76.340228!3d30.816188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910069899c965d3%3A0xa162bbf19f097bd8!2sARJAN%20GILL%20SOUND%20AND%20LIGHT%2C%20BEST%20DJ%20%26%20LIVE%20SOUND%20%7C%20SPEAKER%20%7C%20AMPLIFIER%20%7C%20DJ%20LIGHTS%20SHOP!5e0!3m2!1sen!2sin!4v1734490106643!5m2!1sen!2sin" className="w-full" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {
                    heading.map((head, index) => {
                        return (
                            // make this look good, add a divider maybe
                            <div key={index} className={`flex flex-col col-span-${index + 1} `}>
                                <h4>{head}</h4>
                                <div>
                                    <p>Call:</p> <a href={text[index].callto}>{text[index].number}</a>
                                </div>
                                <div>
                                    <p>Text:</p><a href={text[index].href} target="_blank" title={text[index].title}>{text[index].number}</a>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </section>
    )
}

export default contactComponent;