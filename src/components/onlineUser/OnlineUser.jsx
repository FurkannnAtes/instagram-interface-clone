import React from 'react'

const OnlineUser = () => {
    return (
        <div className=' d-flex align-items-center  position-relative '>
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4 me-2"
                style={{ width: "50px" }} alt="Avatar" />
            <span className='text-muted'>ExampleName</span>
            <div className="online"></div>
        </div>
    )
}

export default OnlineUser
