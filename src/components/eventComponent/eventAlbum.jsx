import React from 'react'
import EventCard from './eventCard'


const EventAlbum = ({data}) =>{
    return <div className='wrapper1'>
    <div className='wrapper'>
    {
    data.map((i)=>(
        <EventCard
            key={i._id}
            code={i.code}
            img={i.images}
            desc= {i.description}
        />
    ))}
    </div>
</div>
}

export default EventAlbum