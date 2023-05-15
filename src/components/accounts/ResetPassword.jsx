import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

import Background from '../../images/travelling.jpg'

function ResetPassword() {
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const history = useNavigate()

    const user_id = localStorage.getItem('user_id')
    // console.log(user_id);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === password2) {
            const response = await fetch('http://localhost:8000/api/resetpassword/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id,
                    password
                })
            })
            if (response.status === 200) {
                toast.success('Password updated')
                localStorage.removeItem('user_id')
                history('/login')
            }
        }
    }

    return (
        <div className='main-div'>
            <Toaster position='top-center' reverseOrder='false' ></Toaster>
            <div className="login-background-contain">
                <img src={Background} alt="" />
            </div>
            <div className='forgot-travel-image'>
                <h1 className='login-text'>Reset Your Password</h1>
                <p>Give Your New Password</p>
                <form className='login-input' onSubmit={handleSubmit} >
                    <div className="login-input-contain">
                        <input className='input-field' type="text" name='password' placeholder='password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <input className='input-field rmv-mb' type="password" name='password2' placeholder='Confirm password'
                        onChange={e => setPassword2(e.target.value)}
                    />
                    <div className="signup-navi">
                        <p><Link className='lo-sign' to='/login'>Already a member..?</Link></p>
                    </div>
                    <input className='login-btn' type="submit" value='RESET' />


                </form>
            </div>

        </div>
    )
}

export default ResetPassword