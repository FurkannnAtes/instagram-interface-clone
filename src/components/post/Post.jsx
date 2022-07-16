/* eslint-disable */
import React from 'react'

import "./Post.css"

const Post = ({ imgURL, content, like }) => {
    return (
        <div className='p-0 post-wrapper '>
            <div className="post-header">
                <div className="post-header-left">
                    <a href="#"><img src="/images/my-logo.jpg" className="rounded-circle" style={{ width: "50px" }}
                        alt="Avatar" /></a>
                    <a href="#" className='user-name'>Furkan Ateş</a>
                </div>
                <div className="post-header-right">
                    <button>
                        <i className="bi bi-three-dots"></i>
                    </button>
                </div>
            </div>
            <div className="post-image">
                <img className='w-100' src={imgURL} alt="Post Img" />
            </div>
            <div className="post-bottom">
                <button className="post-like-btn"><i className="bi bi-heart-fill"></i></button>
                <p className='post-like-amount'>{like} like</p>

                <p className='post-owner'><a href=""> Furkan Ateş : </a><span className='post-content'>{content}</span></p>
                <p className='post-date'>1 hours ago</p>
            </div>
        </div>
    )
}

export default Post
