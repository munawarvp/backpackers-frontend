import React from 'react'
import headerImage from '../../../images/hero.png'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="section">
            <div id="hero">
                <div className="background">
                    <img className='w-full brightness-60' src={headerImage} alt="" />
                </div>
                <div className="absolute top-12 lg:top-0 h-full w-full flex flex-col justify-center items-center gap-4 text-center z-3">
                    <div className="w-60 text-white lg:w-10/12">
                        <h1 className='text-sm lg:text-6xl'>HOLIDAYS TO BE REMEBERED</h1>
                        <p className='text-sm lg:text-xl'>
                            Make your vacation plans with us. You will enjoy the places and resorts we are providing.
                            There is many more to explore and experience in various regions.
                        </p>
                    </div>
                    <div className="search">
                        <div className="container">
                            <label htmlFor="">Where you want to go</label>
                            <input type="text" placeholder="Search Your location" />
                        </div>
                        <div className="container">
                            <label htmlFor="">Check-in</label>
                            <input type="date" />
                        </div>
                        <div className="container">
                            <label htmlFor="">Check-out</label>
                            <input type="date" />
                        </div>
                        <Link to={'/resorts-list'}><button className='searching-btn lg:w-40'>Explore Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header