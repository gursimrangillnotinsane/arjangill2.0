
import { Source_Code_Pro } from 'next/font/google';
import Link from 'next/link';
const geist = Source_Code_Pro({
    weight: ['400',],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

const footer = () => {
    return (
        <section className={`${geist.className} bg-black footer pb-8 gap-5`}>
            <div className="grid grid-cols-4">
                <div className='flex justify-center'>
                    <img className='h-20' src="https://arjangillsounds.com/assets/img/logo.png" />
                </div>
                <div>
                    <h4 className='text-white'>Location</h4>
                    <p>
                        Sco No.3,4, <br />
                        Back Side Bus Stand,<br />
                        Arjan Gill Market, Khamanon (141801),<br />
                        Punjab, India</p>
                    <h4 className='text-white'>Email</h4>
                    <a href="mailto:arjangillsound91@gmail.com">ARJANGILLSOUND91@GMAIL.COM</a>



                </div>
                <div className='flex flex-col'>
                    <h4 className='text-white'>Navigation</h4>
                    <Link href="/">Products</Link>
                    <Link href="/">Gallery</Link>
                    <Link href="/">Contact Us</Link>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-white'>Follow us</h4>
                    <a href="">Insta</a>
                    <a href="">TikTok</a>
                    <a href="">YouTube</a>
                    <a href="">FaceBook</a>
                    <a href="">Whatsapp</a>
                </div>
            </div>

        </section>
    )

}

export default footer;