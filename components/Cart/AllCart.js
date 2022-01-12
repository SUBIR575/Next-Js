import React from 'react'
import Banner from '../banner/Banner'
import CartHeading from './CartHeading'
import MainCart from './MainCart'
import C2acomponent from '../custom/sections/C2acomponent'
const AllCart = () => {
    return (
        <div>
            <Banner/>
            <CartHeading/>
            <MainCart/>
            <C2acomponent/>
        </div>
    )
}

export default AllCart
