export const NavBar = () => {
    return (
        <section className="h-14 w-full bg-quad fixed z-20 text-white flex justify-between xs:justify-around">
            <nav className="ml-5 w-1/3 flex justify-between items-center 
            text-sec font-play xs:w-2/3 xs:m-auto">
                <a href="#skills-section" className="hover:text-yellowVar xs:p-1">Skillset</a>
                <a href="#showcase-section" className="hover:text-yellowVar xs:p-1">Showcase</a>
                <a href="#focus-section" className="hover:text-yellowVar xs:p-1">Focus</a>
                <a href="#contact-section" className="hover:text-yellowVar xs:p-1">Contact</a>
            </nav>
            <div className="mr-5"></div>
        </section>
    )
}

export default NavBar