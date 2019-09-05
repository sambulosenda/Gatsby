import React from 'react';
import { Link } from 'gatsby'
import Footer from '../components/footer'
const indexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>My name is Sambulo Senda a fullstack developer based in Luton</h2>
            <p>Need a developer ? <Link to="/contact">Contact me</Link></p>
            <Footer/>
        </div>
    )
}
export default indexPage;*
