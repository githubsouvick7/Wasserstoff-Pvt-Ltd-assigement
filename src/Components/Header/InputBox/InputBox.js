import React from 'react'
import './InputBox.css'

const InputBox = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Search Here' className='search-box' />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export default InputBox