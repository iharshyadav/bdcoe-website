import React, { useEffect } from 'react'
import './about.css'
import about from '../../assets/images/about.svg'
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);
  return (
    <section className='about section' id='about'>
      <div className='about__container'>
        <div className='about__content' data-aos="fade-right">
          <h1 className='about__title'>About Us</h1>

          <div className='about__description1'>
            Big Data Centre of Excellence is the Research and Development centre of Ajay Kumar Garg Engineering College.
          </div>

          <div className='about__description2'>
            We are a student run community of data enthusiasts at Ajay Kumar Garg Engineering College, Ghaziabad. We strive to provide our members with the knowledge, skills, and resources needed to excel in the world of Big Data. We also bring in industry professionals and leaders to give our members access to the most up-to-date trends and insights. Big Data Centre of Excellence was established in the year 2015 and since {new Date().getFullYear() - 2015} years it has been motivating and guiding the students into the world of Big Data. We are the first 'Centre of Excellence' in A.K.T.U. working in the field of Big Data.
            <br />
            <br />
            Big Data is becoming an increasingly important tool for businesses to better understand their customers, markets, and operations. Big Data analytics can help companies gain valuable insights into customer behavior, market trends, and product performance. Furthermore, Big Data can be used to detect anomalies and identify potential risks, making it an invaluable tool for preventing fraud and other security threats. In recent years, Big Data has become a hot topic in the tech industry, and many companies are now investing heavily in the technology to gain a competitive edge.
          </div>
        </div>

        <div className='about__img' data-aos='fade-up'>
          <img src={about} className='about__img' alt="img" />
        </div>
      </div>
    </section>
  )
}

export default About