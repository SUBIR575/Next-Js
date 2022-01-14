import React from 'react'
import Banner from '../banner/Banner'
import OrderTable from './OrderTable'
import OrderHeading from './OrderHeading'
import FooterComponent from '../custom/sections/FooterComponent'

const AllOrder = () => {
    return (
        <div>
           <Banner/> 
           <OrderHeading/>
           <OrderTable/>
           <FooterComponent/>
        </div>
    )
}

export default AllOrder
