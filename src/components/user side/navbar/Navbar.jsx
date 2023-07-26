import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { getLocal } from '../../../helpers/auth'
import jwtDecode from 'jwt-decode'
import { UilSignOutAlt } from "@iconscout/react-unicons"
import { MdHomeWork } from 'react-icons/md'
import { BsFillBuildingFill } from 'react-icons/bs'
import { FaHiking } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { HiLocationMarker, HiUserCircle } from 'react-icons/hi'

function Navbar() {
  const history = useNavigate();
  const user_auth = getLocal();
  let user_name;
  if(user_auth){
    user_name = jwtDecode(user_auth)
    
  }


  const logout = () => {
    localStorage.removeItem('authToken')
    history('/login')
  }

  const userProfile = () => {
    const token = getLocal();
    if (token){
      const {username} = jwtDecode(token)
      console.log(username)
      history(`/user-profile/${username}`)
    }
  }
  return (
    // .header-navbar
    // <div className="flex justify-between items-center md:mt-6 lg:mt-8 xl:mt-2 rounded-lg px-4 md:px-6 lg:px-8 shadow-md h-10 md:h-16 lg:h-20">
    <div className="header-navbar">
        <div className="brand" onClick={()=>history('/')}>
            <div className="nav-container font-bold">
                <img src="" alt="" />
                Backpackers
            </div>
            <div className="bg-white p-5 absolute right-0 top-0 w-2/4 h-full rounded z-50 lg:hidden">
              <ul className='flex flex-col gap-8 lg:hidden '>
                <li><Link className='flex place-items-center gap-2 nav-item' to="/"><MdHomeWork/> <p>Home</p></Link></li>
                <li><Link className='flex place-items-center gap-2 nav-item' to="/resorts-list"><BsFillBuildingFill/>  Resorts</Link></li>
                <li><Link className='flex place-items-center gap-2 nav-item' to="/adventure-list"><FaHiking/> Adventures</Link></li>
                <li><Link className='flex place-items-center gap-2 nav-item' to="/destination-list"><HiLocationMarker/> Destinations</Link></li>
                {user_auth && <li onClick={userProfile}><Link className='flex place-items-center gap-2 nav-item' ><HiLocationMarker/> Profile</Link></li>}
                {user_auth ? <li className='flex gap-2' onClick={logout}><UilSignOutAlt/> Logout</li> : <Link to='/login'><button className='login-btn'>Login</button></Link>}
              </ul>
              
            </div>
        </div>
        <ul className='hidden lg:flex lg:gap-16 '>
            <li><Link className='hidden lg:flex gap-2 nav-item' to="/"><MdHomeWork/> <p>Home</p></Link></li>
            <li><Link className='hidden lg:flex gap-2 nav-item' to="/resorts-list"><BsFillBuildingFill/>  Resorts</Link></li>
            <li><Link className='hidden lg:flex gap-2 nav-item' to="/adventure-list"><FaHiking/> Adventures</Link></li>
            <li><Link className='hidden lg:flex gap-2 nav-item' to="/destination-list"><HiLocationMarker/> Destinations</Link></li>
        </ul>
        { user_auth && user_name.is_staff ? <Link to='/admin-dashboard'><button className='login-btn'>Admin</button></Link> : null}
        {user_auth ? <div className='nav-right-group'><div className='mr-2' onClick={userProfile} style={{display:"flex", alignItems:"center"}}><HiUserCircle size={37}/><h3 className='hidden lg:flex'>{user_name.username}</h3></div>  <UilSignOutAlt className='hidden lg:flex' onClick={logout} /> <FiMenu size={25} className='mr-2 lg:hidden'/></div> : <Link to='/login'><button className='login-btn'>Login</button></Link>}
        
        
    </div>
    // <div>
    //   <h1 className='text-yellow-300'>My Home</h1>
    // </div>
  )
}

export default Navbar