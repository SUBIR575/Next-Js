import React from 'react'
import Banner from '../banner/Banner'
import C2acomponent from '../custom/sections/C2acomponent'
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
            <C2acomponent/>
        </div>
    )
}

export default Checkout
