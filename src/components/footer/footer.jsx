import React from 'react'
import './footer.css'  

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="left">
            <div className="content">
            <h1><span> Big Data </span> - Centre Of Excellence</h1>
            <br/>
            <p className='cnt'>    
            is the R & D Centre established under Ajay Kumar Garg Engineering College, Ghaziabad. <br/>
            
            At BDCE , we strive to stimulate interest in Big Data concept and related technologies among the students of the Instutions. Besides making serious endeavors to spread knowledge on Big Data, we stand by the stuble acronym of TEAM - 'Together Everyone Achieves More'.
            </p>
            </div>
        </div>
        <div className="right">
            <div className="map">
            <div className="mapouter gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Big%20Data%20Center%20of%20Excellence&t=k&z=15&ie=UTF8&iwloc=&output=embed" title='map'></iframe></div>
            </div>
            <div className="menu">
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="#Domains"><li>Domains</li></a>
                    <a href="/team"><li>Team</li></a>
                    <a href="#About"><li>About</li></a>
                </ul>
            </div>
        </div>
        
    </div>
    <div className="copyright">
           <div className="social">  
                <ul>
                    <li><a href="mailto:bdcoe@akgec.ac.in" target="_blank" rel="noreferrer"><i class="fa-brands fa-google"></i></a></li>
                    <li><a href="https://www.linkedin.com/school/big-data-centre-of-excellence/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/@bigdatacentreofexcellence3334" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="https://www.instagram.com/bdcoe/" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram"></i></a></li>
                    <li><a href="https://github.com/Big-Data-Center-of-Excellence" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
        Copyright ©️ {new Date().getFullYear()} - Big Data Centre of Excellence
    </div>
    </> 
  )
}

export default Footer