import Countdown from '../components/Countdown';

import './ComingSoon.css'
import logo from '../assets/logo-white.png';

const ComingSoon = () => {
    return (
        <div className="ComingSoon">
            <img src={logo} alt="BDCOE" />
            <div className="bdcoe">Big Data Centre of Excellence</div>
            <div className="soon">Coming Soon</div>
            <Countdown />
            <div className="social">
                <a href="https://www.instagram.com/bdcoe/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="mailto:bdcoe@akgec.ac.in"><i className="bi bi-globe"></i></a>
                <a href="https://www.linkedin.com/school/big-data-centre-of-excellence/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            </div>
        </div>
    );
}

export default ComingSoon;