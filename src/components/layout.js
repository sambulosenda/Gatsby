import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'
const Layout =(props) => {
    return(
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
            <Header/>{props.children}

            </div>
         
           <Footer/>
        </div>
    )
}

export default Layout