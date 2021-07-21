import { Avatar, Button } from '@material-ui/core'

import React from 'react'
import '../css/Post.css'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";


function Post(){
    return(
        <div className="post">
            <div className="post_info">
                <Avatar/>
                <h5>Username</h5>
                <small> 07/02/2014 </small>
            </div>
       

            <div className="post_body">
                <div className="post_question">
                    <p>Is Nirma University good for Management Studies?</p>
                    <Button classname="post_btnAnswer">Answer</Button>
                </div>
            </div>

            <div className="post_answer">
                <p></p>
            </div>

            <img src ="https://management.nirmauni.ac.in/wp-content/uploads/sites/24/2018/12/video_img.jpg" alt=""></img>
            <div className="post_footer">
                <div className="post_footerAction">
                <ArrowUpwardOutlinedIcon />
                <ArrowDownwardOutlinedIcon />
                
                </div>

                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />

                <div className="post_footerLeft">
                <ShareOutlined />
                <MoreHorizOutlined />
                </div>
            </div>

            
            



        </div>
    )
}

export default Post;