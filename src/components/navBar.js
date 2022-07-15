export const NavBar = () => {
    return (
        <nav className="h-14 w-full bg-quad fixed z-20 text-white flex justify-between">
            <nav className="ml-5 w-1/3 flex justify-between items-center 
            text-sec font-play">
                <a href="#vision-section" className="hover:text-yellowVar">Vision</a>
                <a href="#showcase-section" className="hover:text-yellowVar">Showcase</a>
                <a href="#focus-section" className="hover:text-yellowVar">Focus</a>
                <a href="#contact-section" className="hover:text-yellowVar">Contact</a>
            </nav>
            <div className="mr-5"></div>
        </nav>
    )
}

export default NavBar