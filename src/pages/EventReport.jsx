import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import "./EventReport.css";
import Footer from '../components/footer/footer';
import img1 from "../assets/images/codemaze.png";
import img2 from "../assets/images/techkdown.png";
// import Gallery from "react-photo-album";

const EventReport = () => {

    const [data,setData] = useState([])
    const {code} = useParams()
    useEffect(() => {
        fetch(`https://bdcoe.onrender.com/api/v1/event/${code}` )
        .then(res => res.json())
        .then((res) => {
            const {message, data}=res;
            // console.log(data);
            setData(data);
        })
    },[])

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return (
    <>
      <div className="eventreport">
            
            <div className="eventhero">
            <div className="eventtitle">
          <p>{data.eventname}</p>
        </div>
        <div className="eventdate">
          <div className="divdate">
            <div className="date">
              <p>{new Date(data.start).getDate()}</p>
            </div>
            <div className="month">
              <p>{month[new Date(data.start).getMonth()]}</p>
            </div>
            <div className="year">
              <p>{new Date(data.start).getFullYear()}</p>
            </div>
          </div>
          <div className="day">
            <p>{weekday[new Date(data.start).getDay()]}</p>
          </div>
        </div>
      </div>
        

                <div className="eventdesc">
        <div className="desc">{data.description}
        </div>
        <div className="poster">
          <img src={data.poster} width="300rem" alt="" />
        </div>
      </div>
    {/* })} */}
      <div className="eventphotos">
        <h2 className="eventphotohead">Event Photos</h2>
        {/* <Gallery images={} /> */}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EventReport;
