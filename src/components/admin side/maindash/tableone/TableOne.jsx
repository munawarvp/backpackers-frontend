import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './tableone.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/config';
import { getLocal } from '../../../../helpers/auth';
import jwtDecode from 'jwt-decode';

function createData(
    id,
    resort_name,
    place,
    phone_number,
    price,
    is_approved,
) {
    return { id, resort_name, place, phone_number, price, is_approved };
}



export default function BasicTable() {

    const [resortList, setResortList] = useState([])

    useEffect(() => {
        resorts();
    }, [])

    const token = getLocal()
    const decoded = jwtDecode(token)
    const user_id = decoded.user_id

    async function resorts() {
        const response = await axios.get(`${BASE_URL}/resorts/staff-dashboard-resort/${user_id}`)
        setResortList(response.data)
    }

    const rows = [
        ...resortList.map((item) => (
            createData(item.id, item.resort_name, item.place, item.phone_number,item.price, item.is_approved,)

        )) 
    ];

    return (
        <div className="Table">
            <h3>Top Resorts</h3>
            <TableContainer component={Paper}
                style={{boxShadow: '0px 13px 20px 0px #80808029'}}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Resort Name</TableCell>
                            <TableCell align="left">Place</TableCell>
                            <TableCell align="left">Room</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.resort_name}</TableCell>
                                <TableCell align="left">{row.place}</TableCell>
                                <TableCell align="left">{row.phone_number}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.is_approved ? <p>Approved</p> : <p>Not Approved</p>}</TableCell>
                                <TableCell align="left" className='Details' >View</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <h3>Recent Bookings</h3>
            <TableContainer component={Paper}
                style={{boxShadow: '0px 13px 20px 0px #80808029'}}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Resort Name</TableCell>
                            <TableCell align="left">Place</TableCell>
                            <TableCell align="left">Room</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.resort_name}</TableCell>
                                <TableCell align="left">{row.place}</TableCell>
                                <TableCell align="left">{row.phone_number}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.is_approved ? <p>Approved</p> : <p>Not Approved</p>}</TableCell>
                                <TableCell align="left" className='Details' >View</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}