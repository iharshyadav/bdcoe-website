import React from "react";
import About from "../components/about/about.jsx"
import ContactUs from "../components/contactUs/contactUs.jsx";
import Footer from "../components/footer/footer.jsx";
import Navbar from "../components/navbar/navbar";
import Domain from "../components/domain/domain"
import Hero from "../components/hero/hero.jsx";
const Home = () =>{
    return(
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Domain/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home;
