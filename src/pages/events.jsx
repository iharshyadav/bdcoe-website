import React, {useEffect, useState} from 'react'
import EventAlbum  from '../components/eventComponent/eventAlbum'
import Header from '../components/eventComponent/header'
import Footer from "../components/footer/footer.jsx";
import Navbar from "../components/navbar/navbar";
import './events.css'

const Events = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://bdcoe.onrender.com/api/v1/event')
        .then(res => res.json())
        .then((res) => {
            const {message, data}=res;
            console.log(data);
            setData(data);
        })
    },[])
    return(
        <section id="events">
            <Navbar />
            <div className="event">
                <Header/>
                <EventAlbum
                    data={data}
                />
            </div>
            <Footer />
        </section>
    );
}

export default Events