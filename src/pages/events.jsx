import React, {useEffect, useState} from 'react'
import EventAlbum  from '../components/eventComponent/eventAlbum'
import Header from '../components/eventComponent/header'
import './events.css'

const Events = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://bdcoe.onrender.com/api/v1/event')
        .then(res => res.json())
        .then((res) => {
            const {message, data}=res;
            console.log(message);
            setData(data);
        })
    })
    return(
        <section id="events">
            <div className="event">
                <Header/>
                <EventAlbum
                    data={data}
                />
            </div>
        </section>
    );
}

export default Events