import React from 'react'
import Banner from '../banner/Banner'
import FooterComponent from '../custom/sections/FooterComponent'
import AllServices from './AllServices'
import Heading from './Heading'

const WomenServiceComponent = () => {
    return (
        <div>
            <Banner/>
            <Heading/>
            <AllServices/>
            <FooterComponent/>
        </div>
    )
}

export default WomenServiceComponent
