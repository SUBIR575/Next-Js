import React from 'react'
import Banner from '../banner/Banner'
import FooterComponent from '../custom/sections/FooterComponent'
import CheckoutAddress from './CheckoutAddress'
import CheckoutHeading from './CheckoutHeading'
import CheckoutPayment from './CheckoutPayment'
import CheckoutTime from './CheckoutTime'

const Checkout = () => {
    return (
        <div>
            <Banner/>
            <CheckoutHeading/>
            <CheckoutAddress/>
            <CheckoutTime/>
            <CheckoutPayment/>
            <FooterComponent/>
        </div>
    )
}

export default Checkout
