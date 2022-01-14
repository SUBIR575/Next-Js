import React from 'react'
import Banner from '../banner/Banner'
import FooterComponent from '../custom/sections/FooterComponent'
import AddressForm from './AddressForm'
import AddressHeading from './AddressHeading'

const AddressAllComponent = () => {
    return (
        <div>
            <Banner/>
            <AddressHeading/>
            <AddressForm/>
            <FooterComponent/>
        </div>
    )
}

export default AddressAllComponent
