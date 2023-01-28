import cardBackground from '../../assets/images/cardBack.svg'
import './card.css'
const Card = ({ name, domain, img, LI, GH, IG }) => {

    if (domain === 'BE') {
        domain = "Backend Developer"
    }
    else if (domain === 'AD') {
        domain = 'App Developer'
    }
    else if (domain === 'ML') {
        domain = 'Machine Learning'
    }
    else if (domain === 'FS') {
        domain = 'Full Stack Developer'
    }
    else if (domain === 'FE') {
        domain = 'Frontend Developer'
    }
    else if (domain === 'DE') {
        domain = 'UI/UX Designer'
    }
    else if (domain === 'CP') {
        domain = 'Competitive Programming'
    }
    return <>
        <div className='child-album'>
            <img
                className='background-card'
                src={cardBackground}
                alt="back"
            />
            <img className='overlay'
                src={img}
                alt='bdcoe'
            />
            <h3>{name}</h3>
            <p>{domain}</p>
            <div className='icons-member'>
                <a href={"https://www.linkedin.com/in/" + LI} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href={"https://github.com/" + GH} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    </>
}

export default Card;