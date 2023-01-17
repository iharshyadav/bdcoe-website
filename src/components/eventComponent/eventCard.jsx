import React from 'react'
import img1 from '../../assets/images/codemaze.png'
import img2 from '../../assets/images/techkdown.png'

const EventCard = ({img, desc,code}) => {
    return <>
        <div className='card'>
            {
            code==="4567890"
            ?
            <img src={img1} alt='img'/>
            :
            code=== "23456"
            ?
            <img src={img2} alt='img'/>
            :
            <img src={img} alt='img'/>
            }
            <div className='info'>
                <p>{desc}</p>
            </div>
        </div>
    </>
}

export default EventCard