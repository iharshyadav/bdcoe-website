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
        <div className='grid-item hidden'>
           
            <div className="coehead hidden">
                <div className="bigdata" style={{textAlign: "center"}}>
                <p className="toptxt">BIG DATA</p>
                <p>BIG DATA</p>
                </div>
                <div>
                <p className="toptxt">CENTRE OF EXCELLENCE</p>
                <p>CENTRE OF EXCELLNECE</p>   
                </div>
                
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