import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiProtonmail } from 'react-icons/si'

export const Footer = () => (
    <section className="footer" id="contact-section">
        <a href='mailto:john.jxr@pm.me' className='flex justify-center p-4 lg:w-2/6 m-auto 
        bg-sec hover:bg-yellowVar cursor-pointer border-4 transition-all
         transition-duration-300 border-black xs:w-3/5 2xl:w-1/5'>
        <h4 className='text-2xl font-cp'>Email Me.</h4>
        <div className='ml-2'><SiProtonmail size={30}/></div>
        </a>
        <nav className="h-3/6 text-white flex flex-col justify-center items-center
                        lg:flex lg:flex-row lg:justify-around">
            <a className="footer-nav" href='https://www.linkedin.com/in/john-ruddock/'>
                <h6
                className='h-2/4 text-lg hover:text-white transition-all font-play'
                >LinkedIn</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaLinkedin size={20}/></div>
            </a>
            <a className="footer-nav" href='https://github.com/Johnjx'>
                <h6
                className='h-2/4 text-lg hover:text-white transition-all font-play'
                >GitHub</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaGithub size={20}/></div>
            </a>
            <a className="footer-nav" href='https://stacker.news/jx'>
                <h6
                className='h-2/4 text-lg hover:text-white transition-all font-play'
                >Stacker</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                >
                <img src="/assets/stacker-news-fav.png" alt='stacker news favicon' className='h-6 w-6'></img>    
                </div>
            </a>
            <a className="footer-nav" href='https://twitter.com/john_jxr'>
                <h6
                className='h-2/4 text-lg hover:text-white transition-all font-play'
                >Twitter</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaTwitter size={20}/></div>
            </a>
        </nav>
        <p className='text-center mt-4 text-white'>
        © 2022 John Ruddock.
        </p>
    </section>
)

export default Footer