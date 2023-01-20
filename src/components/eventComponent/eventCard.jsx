import React,{useState} from "react";
import { Link } from "react-router-dom";

const EventCard = ({code,img }) => {

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
