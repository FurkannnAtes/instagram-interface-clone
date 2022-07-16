/* eslint-disable */
import React from 'react'

import "./RightBox.css"

const RightBox = () => {
    return (
        <div className='right-box'>

            <div className="account">
                <a href="/"><img src="/images/my-logo.jpg" className="rounded-circle" style={{ width: "56px" }} /></a>
                <a href="/" className='account-titles'>
                    <a href="/">furkanates</a>
                    <span>Furkan Ateş</span>

                </a>
            </div>
            <span className='friends-title '>My Friends</span>
            <ul className='friend-list mt-2'>
                <li className='friend-item'>
                    <div className="friend-item-left">
                        <a href=""><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: "50px" }}
                            alt="Avatar" /></a>
                        <div className="friend-user-name"><a href="">elon</a>
                            <span>Elon Musk</span></div>
                    </div>
                    <div className="friend-item-right">
                        <button className='btn btn-sm btn-primary shadow-none'>
                            Go Profile  <i className="bi bi-arrow-right-circle ms-2"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default RightBox
