import React from 'react'
import WalletHeading from './WalletHeading'
import WalletTable from './WalletTable'
import Banner from '../banner/Banner'
import C2aComponent from '../custom/sections/C2acomponent'
const AllWallet = () => {
    return (
        <div>
            <Banner/>
            <WalletHeading/>
            <WalletTable/>
            <C2aComponent/>
        </div>
    )
}

export default AllWallet
