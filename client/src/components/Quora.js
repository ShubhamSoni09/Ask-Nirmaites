import React from 'react'
import Feed from './Feed'
import Navbar from './navbar'

import SidebarOptions from './SidebarOptions'
function Quora() {
    return (
        <div className='quora'>
            <Navbar/>
            <div className='quora_content'>
                <SidebarOptions/>
            </div>
            <div className='quora_feed'>
                <Feed/>
            </div>

        </div>

      
    )
}

export default Quora
