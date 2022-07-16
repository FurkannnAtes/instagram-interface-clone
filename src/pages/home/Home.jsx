import React from 'react'
import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import RightBox from '../../components/rightBox/RightBox'

import "./Home.css"

const Home = () => {
    return (
        <div className='home-container container  p-0  ' >

            <Header />

            <div className="home-page  row">
                <div className="home-page-left col-8  p-0 ">
                    <div className="posts ">
                        <Post
                            imgURL="/images/post-1.png"
                            like="1"
                            content="Cat"

                        />
                        <Post
                            imgURL="/images/post-2.png"
                            like="112"
                            content="Londra streets"
                        />
                        <Post
                            imgURL="/images/post-3.png"
                            like="5"
                            content="Party"
                        />


                    </div>
                </div>
                <div className="home-page-right  col-4   p-0 ">
                    <RightBox />
                </div>
            </div>
        </div>
    )
}

export default Home
