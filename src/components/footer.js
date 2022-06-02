import { FaFire, FaLinkedin, FaGithub } from 'react-icons/fa'

export const Footer = () => (
    <section className="footer">
        <nav className="bg-slate-300 h-4/6 flex flex-col items-center justify-evenly">
            <a className="footer-nav" href='https://www.linkedin.com/in/john-ruddock/'>
                <h6
                className='h-2/4'
                >LinkedIn</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaLinkedin/></div>
            </a>
            <a className="footer-nav" href='https://github.com/Johnjx'>
                <h6
                className='h-2/4'
                >GitHub</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaGithub/></div>
            </a>
            <a className="footer-nav" href='/'>
                <h6
                className='h-2/4'
                >Testing</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaFire/></div>
            </a>
            <a className="footer-nav" href='/'>
                <h6
                className='h-2/4'
                >Testing</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaFire/></div>
            </a>
            <a className="footer-nav" href='/'>
                <h6
                className='h-2/4'
                >Testing</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaFire/></div>
            </a>
            <a className="footer-nav" href='/'>
                <h6
                className='h-2/4'
                >Testing</h6>
                <div
                className='h-2/4 mt-1 ml-1'
                ><FaFire/></div>
            </a>
        </nav>
        <p className='text-center mt-8'>
        © 2022 John Ruddock.
        </p>
    </section>
)

export default Footer