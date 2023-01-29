import React, { useEffect, useState } from 'react'
import EventAlbum from '../components/eventComponent/eventAlbum'
import Footer from "../components/footer/footer.jsx";
import Navbar from "../components/navbar/navbar";
import './events.css'

const Events = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://bdcoe.onrender.com/api/v1/event')
            .then(res => res.json())
            .then((res) => {
                setData(res.data);
            })
    }, [])
    return (
        <section id="events">
            <Navbar />
            <div className="event">
                <h1>Events</h1>
                <hr />
                <EventAlbum
                    data={data}
                />
            </div>
            <Footer />
        </section>
    );
}

export default Events