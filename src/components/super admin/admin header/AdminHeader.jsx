import React from 'react'
import './adminheader.css'
import { getLocal } from '../../../helpers/auth'
import jwtDecode from 'jwt-decode'
import { CgProfile } from "react-icons/cg"

function AdminHeader() {
    const token = getLocal();
    const decoded = jwtDecode(token)
    const user = decoded.username
  return (
    <div className='super-div'>
        <div className='header-left'>
            <h1 className='text-xl font-bold'>Super Admin</h1>
            <form> 
              <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div>
        <div className="header-right">
            <h3 className='user-name-header'>{user}</h3>
            <CgProfile size={35}/>
        </div>
    </div>
  )
}

export default AdminHeader