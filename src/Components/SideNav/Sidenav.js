import React from 'react'
import Details from '../Details/Details'
import './Sidenav.css'

const Sidenav = () => {
    return (
        <>
            <div className="sidenav">
                <div className="alluser">
                    <h4>All User <span>Details</span></h4>
                    <p>236,234,789</p>
                </div>
                <div className="details">
                    <Details />
                </div>
            </div>
        </>
    )
}

export default Sidenav