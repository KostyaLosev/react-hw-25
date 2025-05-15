import React from 'react'
import MainHome from '../../components/homePageComponents/mainHome/MainHome'
import Footer from "../../components/layout/footer/Footer";
import Header from "../../components/layout/header/Header";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <MainHome/>
            <Footer/>
        </div>
    )
}

export default HomePage;