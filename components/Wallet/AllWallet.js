import React from 'react'
import WalletHeading from './WalletHeading'
import WalletTable from './WalletTable'
import Banner from '../banner/Banner'
import FooterComponent from '../custom/sections/FooterComponent'

const AllWallet = () => {
    return (
        <div>
            <Banner/>
            <WalletHeading/>
            <WalletTable/>
            <FooterComponent/>
        </div>
    )
}

export default AllWallet
