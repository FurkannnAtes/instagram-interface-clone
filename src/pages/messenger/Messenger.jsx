import React from 'react'
import Header from '../../components/header/Header'
import OnlineUser from '../../components/onlineUser/OnlineUser'

import "./Messenger.css"

const Messenger = () => {
    return (
        <div className='messenger-container '>
            <Header />
            <div className="row h-100">
                <div className="messenger-left col-6 col-lg-4 ">
                    <div className="messenger-left-head ">
                        <input className='form-control  ' type="text" placeholder='Search For Friends' />
                    </div>
                    <div className="messenger-left-body">
                        <img src="/images/my-logo.jpg" className="rounded-circle border" style={{ width: "50px" }}
                            alt="Avatar" /> elonmusk
                    </div>
                </div>
                <div className="messenger-middle col-6  col-lg-5  ">
                    <h6 className='mt-3 text-muted ms-2'>Message</h6>

                    <form action="" >
                        <input className=' me-2 message-input' type="text" placeholder='message' />
                        <button type='submit' className=' btn btn-success'>
                            Submit
                        </button>
                    </form>
                </div>
                <div className="messenger-right  col-lg-3 ">
                    <div className="online-user-box">
                        <h6>Online Users</h6>
                        <OnlineUser />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messenger
