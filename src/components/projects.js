export const Projects = () => (
    <section className="projects">
        <h2 className="text-center text-4xl p-2">Showcase</h2>
        <div className="h-1 w-1/3 bg-red-300 mx-auto">
        </div>
        <div className="flex justify-center">
            <button
            className=""
            >
            Previous
            </button>
            <button
            className=""
            >
            Next
            </button>
        </div>
        <div className="h-3/4 bg-gray-100 m-4 flex justify-center items-center">
            <article className="feature">
                <h3 className="text-center p-2 text-2xl">Nasa APOD website</h3>
                <img src="/assets/nasa-website.png" alt="nasa APOD website" className="feature-img"></img>
            </article>
        </div>
    </section>
)

export default Projects