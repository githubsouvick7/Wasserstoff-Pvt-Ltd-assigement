import React from 'react'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import InputBox from '../InputBox/InputBox'
import Navbar from '../Navigation/Navbar'
import Icon from '../Icon/Icon'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <HeaderLogo />
            <InputBox />
            <Navbar />
            <Icon />
        </div>
    )
}

export default Header