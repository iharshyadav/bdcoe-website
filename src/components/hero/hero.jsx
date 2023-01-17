import React, { useEffect } from "react"
import './hero.css'
import Graphic from './graphic'
import Aos from "aos";
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return <div className="home grid-container" id="home">
        <div className='grid-item img-grid'>
            <Graphic/>
        </div>
        <div className='grid-item hidden'
        // data-aos="flip-left"
        >
            <div className="t1">
                <h1>BIG DATA </h1>
                <h1>CENTRE OF EXCELLENCE</h1>
            </div>
            <div className="t2 hidden">
                <h2>Decipher Your Destiny</h2>
            </div>
            <div className="t3 hidden">
                <h3>We Learn | We Develop | We Execute</h3>
            </div>
        </div>
    </div>
}

export default Hero;