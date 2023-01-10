 import './hero.css'
 import Icon from './server'

 const Hero = () =>{
    return <div className="home grid-container" id="home">
    {/* <div class="box1"></div> */}
    <div className='grid-item img-grid'>
        <Icon/>
    </div>
    <div className='grid-item'>
        <div className="t1">    
            <h1>BIG DATA - CENTER OF EXCELLENCE</h1>
        </div>
        <div className="t2">    
            <h2>Decipher Your Destiny</h2>
        </div>
        <div className="t3">          
            <h3>We Learn | We Develop | We Execute</h3>
        </div>
    </div>
    </div>
 }

 export default Hero;