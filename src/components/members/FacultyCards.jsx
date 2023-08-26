import React from 'react'
import './card.css'
import './album.css'
import cardBackground from '../../assets/images/cardBack.svg'


function FacultyCards() {
  return (
    <div className='container-album'>
      <div className='child-album' style={{ paddingBottom: "1em" }}>
        <img
          className='background-card'
          src={cardBackground}
          alt="back"
        />
        <img className='overlay'
          src="https://www.akgec.ac.in/wp-content/uploads/2023/04/RUCHI-GUPTA.jpg"
          alt='bdcoe'
        />
        <h3 style={{ paddingBottom: "1em" }}>Dr. Ruchi Gupta</h3>
        <h4>Associate Professor</h4>

      </div>
      <div className='child-album' style={{ paddingBottom: "1em" }}>
        <img
          className='background-card'
          src={cardBackground}
          alt="back"
        />
        <img className='overlay'
          src="https://www.akgec.ac.in/wp-content/uploads/2023/04/achintya.jpg"
          alt='bdcoe'
        />
        <h3 style={{ paddingBottom: "1em" }}>Mr. Achintya Pandey</h3>
        <h4>Assistant Professor</h4>
      </div>
    </div>
  )
}

export default FacultyCards