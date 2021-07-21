import React from 'react'
import '../css/Feed.css'
import Post from './Post'
import QuoraBox from './QuoraBox'


function Feed(){
    return <div className="feed">
        <QuoraBox/>
        <Post/>  
        <Post/>  
        <Post/>  
        <Post/>  
        <Post/>  
    </div>
}

export default Feed;