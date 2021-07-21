import React from 'react'
import Feed from './Feed'
import Navbar from './navbar'
import '../css/Quora.css'
import '../css/Feed.css'
import Sidebar from './sidebar'
import Post from './Post'
function Quora() {
    return (
        <div className='quora'>
            <Navbar/>
            <div className='quora_content'>
                <Sidebar/>
                <Feed/>
            </div>

        </div>

      
    )
}

export default Quora
