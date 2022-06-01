import { FaFire } from 'react-icons/fa'

export const Focus = () => (
    <section className="focus">
        <h3>Focus.</h3>
        <div className="h-5/6 bg-slate-200 flex flex-wrap justify-around">
            <article className='focus-piece'>
                <FaFire size={30}/>
                <h5>Test piece</h5>
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim.
                </p>
            </article>
            <article className='focus-piece'>
                <FaFire size={30}/>
                <h5>Test piece</h5>
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim.
                </p>
            </article>
            <article className='focus-piece'>
                <FaFire size={30}/>
                <h5>Test piece</h5>
                <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim.
                </p>
            </article>
        </div>
    </section>
)

export default Focus