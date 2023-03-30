import React from 'react'
import './Details.css'

const Details = () => {
    return (
        <div className='dtls'>
            <div className="one">
                <div className="box">
                    <img src="/icon22.png" alt="" />
                </div>
                <div className="value">
                    <p>Total eraning</p>
                    <span>value</span>
                </div>
            </div>
            <div className="two">
                <div className="box1">
                    <img src="/icon33.png" alt="" />
                </div>
                <div className="value">
                    <p>Sales</p>
                    <span>value</span>
                </div>
            </div>
            <div className="three">
                <div className="box2">
                    <img src="/Vector.png" alt="" />
                </div>
                <div className="value">
                    <p>Purchase</p>
                    <span>value</span>
                </div>
            </div>
        </div>
    )
}

export default Details