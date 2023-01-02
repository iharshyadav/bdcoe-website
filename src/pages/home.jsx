import React from "react";
import About from "../components/about/about.jsx"
import ContactUs from "../components/contactUs/contactUs.jsx";
import Footer from "../components/footer/footer.jsx";
import Navbar from "../components/navbar/navbar";
import Domain from "../components/domain/domain"
const Home = () =>{
    return(
        <>
            <Navbar/>
            <About/>
            <Domain/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home;
