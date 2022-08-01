import AnimatedPage from "../animations/animatedPage"

export const Nasa = () => {
    return (
        <AnimatedPage>
        <div>
            <p className="hidden text-center p-4 font-merri sm:block">A school project which I improved upon through independent research.</p>
            <p className="text-center p-4 font-merri">Pulls NASA APOD with custom date selection page.</p>
            <p className="text-center p-4 font-merri">React / Tailwind CSS / Axios / Framer Motion / React Router</p>
        </div>
        </AnimatedPage>
    )
}

export default Nasa