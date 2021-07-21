import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/QuoraBox.css"

function QuoraBox(){
    return <div className="quoraBox">
        <div className="quoraBox_info">
            <Avatar/>
            <h5>Username</h5>
        </div>
        <div className="quoraBox_quora">
            <p>What is your question?</p>
        </div>
    </div>
}

export default QuoraBox;