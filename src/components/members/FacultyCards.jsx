import React from 'react'
import './card.css'
import './album.css'
import cardBackground from '../../assets/images/cardBack.svg'


function FacultyCards() {
  return (
  <div className='container-album'>
    <div className='child-album'  style={{paddingBottom: "1em"}}>
               <img
            className='background-card'
            src={cardBackground}
            alt="back"
        />
        <img className='overlay'
            src="https://www.akgec.ac.in/wp-content/uploads/2019/11/Ruchi-Gupta-1.jpg"
            alt='bdcoe'
        />
        <h3 style={{paddingBottom:"1em"}}>Dr. Ruchi Gupta</h3>
        <h4>IT Department</h4>

    </div>
    <div className='child-album' style={{paddingBottom: "1em"}}>
               <img
            className='background-card'
            src={cardBackground}
            alt="back"
        />
        <img className='overlay'
            src="https://www.akgec.ac.in/wp-content/uploads/2022/12/Mukesh.jpg"
            alt='bdcoe'
        />
        <h3 style={{paddingBottom:"1em"}}>Mr. Mukesh K Singh</h3>
        <h4>IT Department</h4>

    </div>
    </div>
  )
}

export default FacultyCards