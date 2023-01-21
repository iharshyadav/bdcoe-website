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
           
            <div className="coehead hidden">
                
                <p>BIG DATA</p>
                <p>BIG DATA</p>            
                <p>CENTER OF EXCELLECE</p>
                <p>CENTER OF EXCELLECE</p>
            </div>


            <div className="t2 hidden">
               Decipher your Destiny
            </div>

            <div className="t3 hidden">
                We Learn | We Develop | We Execute    
            </div>
        </div>

    </div>
}

export default Hero;