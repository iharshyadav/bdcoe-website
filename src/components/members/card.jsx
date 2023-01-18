import React,{useState} from 'react'
import './card.css'
const Card = ({name,domain,img,LI,GH,IG}) =>{
const [Hover,setHover]=useState(false);
if(domain==='BE'){
    domain="Backend Developer"
}
else if(domain==='AD'){
    domain='App Developer'
}
else if(domain==='ML'){
    domain='Machine Learning'
}
else if(domain==='FS'){
    domain='Full Stack Developer'
}
else if(domain==='FE'){
    domain='Frontend Developer'
}
else if(domain==='DE'){
    domain='UI/UX Designer'
}
return<>
    <div className='child-album' >
        {Hover &&  <div className='icons-member' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <a href={"https://www.linkedin.com/in/"+LI} target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
            <a href={"https://www.instagram.com/"+ (IG ? IG:"bdcoe")} target="_blank" rel="noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
            <a href={"https://github.com/"+GH} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>}
        <img className='overlay' 
            src={img}
            onMouseEnter={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
            style={Hover ? {opacity:0.3} : null}
            alt='bdcoe'
        />
        <h3>{name}</h3>
        <p>{domain}</p>
    </div>
</>
}

export default Card;