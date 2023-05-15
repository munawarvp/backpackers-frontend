import React, { useState, useEffect } from 'react'
import './userresortlist.css'
import Select from 'react-select';
import { DatePicker, Button } from 'antd';
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

// import Pagination from '@mui/material/Pagination';
import { Pagination } from 'antd';

import axios from 'axios';
import { BASE_URL } from '../../../utils/config';


function UserResortList() {
    const [locationList, setLocationlist] = useState([]);
    const [resortList, setResortList] = useState([])
    const [nextUrl, setnextUrl] = useState()
    const [prevUrl, setprevUrl] = useState()
    const [current, setCurrent] = useState(1);

    useEffect(() => {
        locations();
        resorts();
    }, [])
    async function locations() {
        const response = await axios.get(`${BASE_URL}/resorts/locations/`)
        setLocationlist(response.data)
    }
    async function resorts() {
        const response = await axios.get(`${BASE_URL}/resorts/userlistresorts`)
        console.log(response.data);
        setResortList(response.data.results)
        setnextUrl(response.data.next)
    }
    const loctions = locationList.map((item) => {
        return ({
            value: item.id, label: item.city_name
        })
    })
    const paginationHandler = async (url)=> {
        const response = await axios.get(url)
        console.log(response.data);
        setprevUrl(response.data.previous)
        setResortList(response.data.results)
    }

    const handlePageChange = (page)=> {
        console.log(page);
        if(page > current) {
            console.log('Increased');
            paginationHandler(nextUrl)
        }else if(page < current) {
            console.log('Decreased');
            paginationHandler(prevUrl)
        }
        setCurrent(page)
    }
    console.log(current);

    return (
        <div className="user-resortlist-main">
            <div className="resort-search-filter">
                <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                    <div>
                        <label htmlFor="location">Locations</label>
                        <Select className='drop-locations' options={loctions} value={loctions[0]} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="check_in">Check In</label>
                        <DatePicker className='date-for-checkin' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor="check_out">Check Out</label>
                        <DatePicker className='date-for-checkin' />
                    </div>
                    <Button type="primary" icon={<AiOutlineSearch />}>Search</Button>
                </div>
                <div className="total-count-resort">
                    <h3>Total number of resorts : 20</h3>
                </div>
            </div>


            <div className="filter-sort-resort">
                <div className='sort-resort-item'>
                    <h4>SORT BY</h4>
                </div>
                <div className='sort-resort-item'>
                    <h4>FILTER BY</h4>
                </div>
                <div className='sort-resort-item'>
                    <h4>PRICE</h4>
                </div>
            </div>

            {resortList.map((resort) => (
                <Link className='link' to={`/resort-details/${resort.id}`}>
                    <div className="resort-listing">
                        <div className="single-resort-card">
                            <div className="resort-card-image">
                                <img src={`${resort.image_one}`} alt="" />
                            </div>
                            <div className="resort-card-details">
                                <div>
                                    <div style={{ display: "flex" }}>
                                        <p className="rating-count">3.8 </p>
                                        <AiFillStar color='yellow' /><AiFillStar color='yellow' /><AiFillStar color='yellow' /><AiFillStar color='black' /><AiFillStar color='black' />
                                    </div>
                                    <div className='resort-address'>
                                        <h3>{resort.resort_name}</h3>
                                        <p className='resort-card-address'>{resort.place}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='resort-card-cancel'>Free cancelation till checkin</p>
                                    <p className='resort-card-review'>reviews(10)</p>
                                </div>
                            </div>
                            <div className="resort-card-price">
                                <div>
                                    <p className='card-price-amount'>{resort.price} ₹</p>
                                    <p className="card-price-cut">2000 ₹</p>
                                </div>
                                <button className='resort-card-btn'>View Deal</button>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            <div className="resort-pagination-contain">
                {/* <Pagination count={10}  color="secondary" onClick={handlePageChange} /> */}
                <Pagination defaultCurrent={current} total={50} onChange={handlePageChange} />
            </div>
        </div>
    )
}

export default UserResortList