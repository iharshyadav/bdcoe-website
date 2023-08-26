import React, { useState } from 'react'
import Album from '../components/members/album'
import Footer from '../components/footer/footer'
import './members.css'
import FacultyCards from '../components/members/FacultyCards'
import Navbar from '../components/navbar/navbar'
const Members = () => {
    const [batch, setBatch] = useState('2024');
    return <>
        <Navbar />
        <div className='members'>
            <header>
                <h1>Our Team</h1>
            </header>
            <select className='dropBatch' onChange={(e) => { setBatch(e.target.value) }} name="year">
                <option value={'2024'}>4th Year</option>
                <option value={'2025'}>3rd Year</option>
                <option value={'2080'}>Faculty</option>
                <option value={'1'}>Alumni</option>
            </select>
            {batch === '2080' ? <FacultyCards /> : <Album batch={batch} />}
            <footer>
                <h1>Creativity Inspires Our Implementation</h1>
                <p>We at BDCOE are a passionate group of people who work towards bringing a change in the ecosystem of development around the campus. We want to create a healthy environment for the budding developers to exploring solutions to real life problems and promote the developer culture.</p>
            </footer>
        </div>
        <Footer />
    </>
}

export default Members;