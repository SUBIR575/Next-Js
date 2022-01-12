import React from 'react'
import { Button } from 'reactstrap'

const AddressHeading = () => {
    return (
        <div>
            <div>
                <div className="title-one">
                    <h1 className="title">Select Location</h1>
                    <Button style={{padding:'4px 25px',backgroundColor:'#838441'}}>Change Location</Button>
                </div>
            </div>
        </div>
    )
}

export default AddressHeading
