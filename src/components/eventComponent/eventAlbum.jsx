import React from 'react'
import EventCard from './eventCard'
import Footer from '../footer/footer'
// import EventPopup from './EventPopup'


const EventAlbum = ({data}) =>{
    return <div className='wrapper1'>
    <div className='wrapper'>
    {
    data.map((i)=>(
        <EventCard
            key={i._id}
            code={i.code}
            img={i.poster}
            desc= {i.description}
            data={data}
        />
        
    ))}

    </div>
    
</div>
}

export default EventAlbum