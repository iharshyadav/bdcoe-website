import React, { useEffect, useState } from 'react'
import EventAlbum from '../components/eventComponent/eventAlbum'
import Footer from "../components/footer/footer.jsx";
import Navbar from "../components/navbar/navbar";
import axios from "axios"
import './events.css'

const Events = () => {
    const URL = "https://bdcoe.onrender.com/api/v1/event"
    const [isLoading, setisLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(URL)
                setData(response.data.data)
            } catch (err) {
                console.log(`Error: ${err.message}`)
            } finally {
                setisLoading(false)
            }
        })()
    }, [])
    return <>
        <Navbar />
        <section id="events">
            <div className="event">
                <h1>Events</h1>
                <hr />
                {
                    isLoading ?
                        <div className='wrapper1'>
                            <div className='wrapper'>
                                {[...Array(6)].map((x, i) =>
                                    <div className="card event_loader_card" key={i}>
                                        <div className='event_loader_image'></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        :
                        <EventAlbum
                            data={data}
                        />
                }
            </div>
        </section>
        <Footer />
    </>

}

export default Events