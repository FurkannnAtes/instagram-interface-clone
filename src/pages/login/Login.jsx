import React from 'react'
import { Link } from "react-router-dom";

import "./Login.css"

const Login = () => {
    return (
        <div className=' form-container container '>
            <div className="form   p-5 m-0">
                <h1>Login</h1>
                <form className=' ' action="">
                    <input type="email" className='form-control mb-3' placeholder='Email *' />
                    <input type="password" className='form-control mb-3' placeholder='Password *' />
                    <Link to="/Home"> <button className='btn btn-success w-100' type='submit'>Login </button></Link>
                </form>

            </div>
            <p>Just press the Login button to see the rest of the project </p>
        </div>
    )
}

export default Login
