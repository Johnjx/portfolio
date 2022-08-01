export const NavBar = () => {
    return (
        <section className="flex justify-around h-14 w-full bg-quad fixed z-20 text-white">
            <nav className="ml-5 flex justify-between items-center 
            text-sec font-play w-2/3 m-auto">
                <a href="#skills-section" className="hover:text-yellowVar p-1">Skillset</a>
                <a href="#showcase-section" className="hover:text-yellowVar p-1">Showcase</a>
                <a href="#focus-section" className="hover:text-yellowVar p-1">Focus</a>
                <a href="#contact-section" className="hover:text-yellowVar p-1">Contact</a>
            </nav>
            <div className="mr-5"></div>
        </section>
    )
}

export default NavBar