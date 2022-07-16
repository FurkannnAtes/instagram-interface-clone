import React from 'react'
import Logo from '../logo/Logo'

import { Link } from "react-router-dom";

import "./Header.css"

const Header = () => {
    return (
        <div className='header-bg  '>
            <div className='header-container container d-flex justify-content-between align-items-center p-0' >


                <Link to="/Home"> <Logo /></Link>

                <div className="search ">
                    <i className="bi bi-search  "></i>
                    <input type="text" placeholder='Search' />


                </div>
                <nav className='navbar d-flex justify-content-around align-items-center   '>

                    <a href="/Home"><i className="bi bi-house"></i></a>
                    <Link to="/Messenger"><i className="bi bi-chat-left-text"></i></Link>
                    <a href="/Home"><i className="bi bi-plus-square"></i></a>

                    <Link to="/Profile/Furkanates"> <img src="/images/my-logo.jpg" className="rounded-circle border" style={{ width: "50px" }}
                        alt="Avatar" />
                    </Link>
                </nav>

            </div>
        </div>
    )
}

export default Header
