import { Source_Code_Pro } from 'next/font/google';
const geist = Source_Code_Pro({
    weight: ['400',],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
const header = () => {
    return (
        <nav className={geist.className}>
            <div className="logo">
                {/* <a href="#">Code</a> */}
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Work</a>
                <a href="#">Experience</a>
                <a href="#">Job</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}

export default header;