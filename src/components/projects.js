import Nasa from "./projectComps/nasa"
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Projects = () => {
    const [nasa, setNasa] = useState(false);
    const slideIn = () => {
        setNasa(true);
    }
    const slideOut = () => {
        setNasa(false);
    }

    return (
    <section className="projects border-b-4 border-quad" id="showcase-section">
        <h2 className="text-center text-4xl p-2 font-cp text-ter">Showcase</h2>
        <div className="h-1 w-1/3 bg-sec mx-auto">
        </div>
        <div className="border-2 rounded-md shadow-md hover:border-quad bg-emerald-100
                        m-auto mt-8 transition-all
                        w-screen h-4/5 lg:w-3/4 lg:h-5/6
                        2xl:w-3/5 2xl:h-8/12" onMouseEnter={slideIn} onMouseLeave={slideOut}>
            <a className="feature" href="https://rainbow-muffin-38c867.netlify.app/">
                <h3 className="text-center p-2 text-2xl">Nasa Testing Ground</h3>
                <img src="/assets/nasa-website.png" alt="nasa APOD website"
                        className="lg:w-2/3 h-2/4 lg:m-auto"></img>
            </a>
            <AnimatePresence exitBeforeEnter>
            {nasa && <Nasa/>}
            </AnimatePresence>
        </div>
    </section>
    )
}

export default Projects