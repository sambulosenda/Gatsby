import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
     <Layout>
            <p> I am currently a developer at Whitbread</p>
            <p>Want to work with me <Link to="/contact">Contact</Link></p>
     </Layout>
       
    )
}
export default AboutPage