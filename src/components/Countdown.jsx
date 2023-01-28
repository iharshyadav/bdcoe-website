import { useEffect, useState } from 'react';

import './Countdown.css'

const Countdown = () => {

    const launchDate = new Date('2023-01-06T18:30:00.000Z').getTime();

    const [currentTime, setCurrentTime] = useState(new Date().getTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().getTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="Countdown">
            <div className="box">
                <div>{('0' + Math.floor((launchDate - currentTime) / (24 * 60 * 60 * 1000))).slice(-2)}</div>
                <div className="unit">Days</div>
            </div>
            <div className="box">
                <div>{('0' + (Math.floor((launchDate - currentTime) / (60 * 60 * 1000)) - Math.floor((launchDate - currentTime) / (24 * 60 * 60 * 1000)) * 24)).slice(-2)}</div>
                <div className="unit">Hours</div>
            </div>
            <div className="box">
                <div>{('0' + (Math.floor((launchDate - currentTime) / (60 * 1000)) - Math.floor((launchDate - currentTime) / (60 * 60 * 1000)) * 60)).slice(-2)}</div>
                <div className="unit">Minutes</div>
            </div>
            <div className="box">
                <div>{('0' + (Math.floor((launchDate - currentTime) / 1000) - Math.floor((launchDate - currentTime) / (60 * 1000)) * 60)).slice(-2)}</div>
                <div className="unit">Seconds</div>
            </div>
        </div>
    );
}

export default Countdown;