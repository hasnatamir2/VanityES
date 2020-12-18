import React from 'react'

import Header from './Header'
import GameInfo from './GameInfo'
import Navbar from './Navbar'
import SocialContact from './SocialContact'
import WhyUs from './WhyUs'
import Footer from './Footer'

export default function VanityES() {
    return (
        <>
         <Navbar/>
         <Header/>
         <GameInfo/>
         <WhyUs/>
         <SocialContact/>
         <Footer/>
        </>
    )
}
