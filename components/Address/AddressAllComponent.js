import React from 'react'
import Banner from '../banner/Banner'
import C2acomponent from '../custom/sections/C2acomponent'
import AddressForm from './AddressForm'
import AddressHeading from './AddressHeading'

const AddressAllComponent = () => {
    return (
        <div>
            <Banner/>
            <AddressHeading/>
            <AddressForm/>
            <C2acomponent/>
        </div>
    )
}

export default AddressAllComponent
