import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p> I am currently a developer at Whitbread</p>
            <p>Want to work with me <Link to="/contact">Contact</Link></p>
            <Footer/>
        </div>
    )
}
export default AboutPage