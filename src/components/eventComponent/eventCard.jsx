import React,{useState} from "react";
// import EventPopup from "./EventPopup";
// import'./eventPopup.css'
import img1 from "../../assets/images/codemaze.png";
import img2 from "../../assets/images/techkdown.png";
import EventReport from "../../pages/EventReport";
import { Link } from "react-router-dom";

const EventCard = ({ data,code,img }) => {

  const to = {
    pathname: `/event/${code}`,
    code
  }

  return (
    <>
    <Link to={to} >
      <div className="card">
          <img src={img} alt="img" />
      </div>
      </Link>
    </>
  );
};

export default EventCard;
