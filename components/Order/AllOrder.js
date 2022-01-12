import React from 'react'
import Banner from '../banner/Banner'
import OrderTable from './OrderTable'
import C2aComponent from '../custom/sections/C2acomponent'
import OrderHeading from './OrderHeading'
const AllOrder = () => {
    return (
        <div>
           <Banner/> 
           <OrderHeading/>
           <OrderTable/>
           <C2aComponent/>
        </div>
    )
}

export default AllOrder
