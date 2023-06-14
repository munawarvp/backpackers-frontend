import React from 'react'
import './maindash.css'
import Cards from './cards/Cards'
import TableOne from './tableone/TableOne'
import { getLocal } from '../../../helpers/auth'
import jwtDecode from 'jwt-decode'

function MainDash() {
  const user = getLocal()
  const decoded = jwtDecode(user)
  
  return (
    <div className="MainDash">
      <div className="headings">
        <h1 className='font-extrabold text-2xl mt-5'>Dashboard</h1>
        <h3>{decoded.username}</h3>
      </div>
      <Cards/>
      <TableOne/>
    </div>
  )
}

export default MainDash