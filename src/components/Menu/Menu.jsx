import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            Statistics
          </li>
          <li>
            Overview
          </li>
          <li>
            <NavLink to="/Dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            Analytics
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu