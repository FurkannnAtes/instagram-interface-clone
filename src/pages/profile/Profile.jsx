import React from 'react'
import Header from '../../components/header/Header'


import "./Profile.css"

const Profile = () => {
    return (
        <div className='container '>
            <Header />
            <div className="profile-info row">
                <div className="profile-info-left col-3 col-sm-4 text-center "><img src="/images/my-logo.jpg" className="rounded-circle border img-fluid"
                    alt="Avatar" />
                </div>
                <div className="profile-info-right col-8  ">
                    <div className="profile-info-right-header">
                        <span className='user-name'>furkanates</span>
                        <span><button className='edit btn btn-primary btn-sm px-4'>edit</button></span>
                        <span><i className="bi bi-gear-fill"></i></span>
                        <span><i className="bi bi-arrow-bar-right text-danger"></i></span>
                    </div>
                    <div className="profile-info-right-body">
                        <span><span className='p-bolder'> 4  </span>Post</span>
                        <span><span className='p-bolder'> 1  </span>Followers</span>
                        <span><span className='p-bolder'> 1  </span>Following</span>

                    </div>
                    <div className="profile-info-right-footer">
                        <span className='name'>Furkan Ateş</span>
                        <span >I m a Frontend Web Devoloper</span>
                    </div>
                </div>
            </div>
            <div className="profile-buttons">
                <button style={{ borderTop: "3px solid black" }}><i className="bi bi-grid-3x3-gap-fill"></i>POSTS</button>
                <button><i className="bi bi-camera-video"></i>VIDEOS</button>
                <button><i className="bi bi-box-arrow-down"></i>SAVE</button>
                <button><i className="bi bi-person-square"></i>TAGGED</button>
            </div>
            <div className="profile-posts mt-4 row ">
                <div className="post col-md-6  col-lg-4 mb-4  "><img className='' src="/images/post-1.png" alt="post" /><i className="bi bi-heart-fill"></i>
                </div>
                <div className="post col-md-6 col-lg-4 mb-4"><img className='' src="/images/post-2.png" alt="post" /><i className="bi bi-heart-fill"></i></div>
                <div className="post col-md-6 col-lg-4 mb-4"><img className='' src="/images/post-3.png" alt="post" /><i className="bi bi-heart-fill"></i></div>
                <div className="post col-md-6 col-lg-4 mb-4"><img className='' src="/images/post1.jpg" alt="post" /><i className="bi bi-heart-fill"></i></div>


            </div>
        </div >
    )
}

export default Profile
