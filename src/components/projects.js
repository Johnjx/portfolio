export const Projects = () => (
    <section className="projects border-b-4 border-quad" id="showcase-section">
        <h2 className="text-center text-4xl p-2 font-cp text-ter">Showcase</h2>
        <div className="h-1 w-1/3 bg-sec mx-auto">
        </div>
        <div className="h-4/5 w-3/4 border-2 rounded-md shadow-md hover:border-quad bg-emerald-100 m-auto mt-8 flex justify-center transition-all">
            <a className="feature" href="https://rainbow-muffin-38c867.netlify.app/">
                <h3 className="text-center p-2 text-2xl">Nasa APOD website</h3>
                <img src="/assets/nasa-website.png" alt="nasa APOD website" className="feature-img"></img>
            </a>
        </div>
    </section>
)

export default Projects