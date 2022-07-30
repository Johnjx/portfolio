import { BsCurrencyBitcoin } from 'react-icons/bs'
import { GiLightningTrio } from 'react-icons/gi'
import { IoLogoJavascript } from 'react-icons/io'
import { SiOpenai, SiHandshakeProtocol } from 'react-icons/si'
import { IoLogoGameControllerB } from 'react-icons/io'

export const Focus = () => (
    <section className="focus bg-prim" id="focus-section">
        <h2 className='text-center text-4xl p-4 font-cp'>Focus</h2>
        <div className="h-1 w-1/3 bg-ter mx-auto mb-4">
        </div>
        <div className="border-2 rounded-md shadow-md hover:border-quad xs:flex flex-col items-center
                        lg:flex lg:flex-row lg:flex-wrap lg:justify-evenly
                        2xl:h-4/6 2xl:w-5/6 2xl:m-auto">
            <article className='focus-piece mt-4'>
                <BsCurrencyBitcoin size={30} className="text-ter"/>
                <h5 className='text-xl font-play'>Bitcoin</h5>
                <p className='text-center w-3/4 font-open xs:hidden lg:block'>
                Base layer of trust for the internet, settlement layer for money. It is a currency and a network at the same time. Unmatched security level & ~99% uptime since inception.
                </p>
            </article>
            <article className='focus-piece mt-4'>
                <GiLightningTrio size={30} className="text-ter"/>
                <h5 className='text-xl font-play'>Lightning</h5>
                <p className='text-center w-3/4 font-open xs:hidden lg:block'>
                Layer two network for instant, nearly zee-fee BTC payments. It is known as the medium of exchange layer but there are many use-cases still being explored for this early network.
                </p>
            </article>
            <article className='focus-piece mt-4'>
                <IoLogoJavascript size={30} className="text-ter"/>
                <h5 className='text-xl font-play'>Javascript</h5>
                <p className='text-center w-3/4 font-open xs:hidden lg:block'>
                My first programming language. The native language of the web browser that has seen much bolstering to become a powerhouse. Always excited to learn new tricks here.
                </p>
            </article>
            <article className='focus-piece'>
                <IoLogoGameControllerB size={30} className="text-ter"/>
                <h5 className='text-xl font-play'>Gaming</h5>
                <p className='text-center w-3/4 font-open xs:hidden lg:block'>
                I've been a gamer my whole life. I've always loved the immersion and competitive nature of this pass-time. For the same reasons I also enjoy sports. Main game is World of Warcraft ⚔.
                </p>
            </article>
            <article className='focus-piece'>
                <SiOpenai size={30} className="text-ter"/>
                <h5 className='text-xl font-play xs:text-center'>Artificial Intelligence</h5>
                <p className='text-center w-3/4 font-open xs:hidden lg:block'>
                There are many ways in which AI has been surfacing. I believe in the short term this will be an immense boost to humanity. In the long term... who knows what will happen 🤖.
                </p>
            </article>
            <article className='xs:hidden 2xl:flex 2xl:flex-col 2xl:h-2/5 2xl:w-4/12
                                2xl:justify-center 2xl:items-center'>
                <SiHandshakeProtocol size={30} className="text-ter"/>
                <h5 className='text-xl font-play'>Roadmap...</h5>
                <p className='text-center w-3/4 font-open xs:hidden lg:block'>
                • Python <br/>
                • C++ <br/>
                • Interesting POW chains <br/>
                • Rust and React Native...
                </p>
            </article>
        </div>
    </section>
)

export default Focus