import React from 'react'
import Banner from '../banner/Banner'
import FooterComponent from '../custom/sections/FooterComponent'
import CartHeading from './CartHeading'
import MainCart from './MainCart'

const AllCart = () => {
    return (
        <div>
            <Banner/>
            <CartHeading/>
            <MainCart/>
            <FooterComponent/>
        </div>
    )
}

export default AllCart
