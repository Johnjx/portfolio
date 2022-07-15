export const Heading = () => (
    <div className="h-screen bg-sky-100">
        <div className="h-2/5 w-screen flex">
          <div className="w-11/12 h-full"></div>
          <div className="w-2/4 mt-16 mr-8">
            <lightning-widget name="John Ruddock" accent="#2d63e1" to="jx@getalby.com" image="https://pbs.twimg.com/profile_images/1452933125743460360/5xkRoFj7_400x400.jpg" />
          </div>
        </div>
        <div className="heading">
            <h1
            className="text-6xl p-5 w-1/3 ml-8 font-gv"
            >J.M.R
            </h1>
            <h2
            className="text-5xl p-3 w-1/3 ml-12 font-cp"
            >/ Full Stack Web Developer
            </h2>
            <h2
            className="text-5xl p-3 w-1/3 ml-12 font-cp text-yellow-400"
            >/ Aspiring Lightning Network Developer
            </h2>
        </div>
    </div>
)

export default Heading