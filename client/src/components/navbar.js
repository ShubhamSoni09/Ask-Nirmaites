import React from 'react'
import '../css/navbar.css'
import logo from '../logo.png';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar, Button } from '@material-ui/core';
function navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className="icons">
                <div className="icon">
                    <HomeIcon />
                </div>
                <div className="icon">
                    <FeaturedPlayListOutlinedIcon />
                </div>
                <div className="icon">
                    <AssignmentTurnedInOutlinedIcon/>
                </div>        
                <div className="icon">
                    <PeopleAltOutlinedIcon/>
                </div>        
                <div className="icon">
                    <NotificationsNoneOutlinedIcon/>
                </div>        
            </div>
            <div className="searchbar">
                <SearchIcon/>
                <input type="text" placeholder="Search for your queries"/>
            </div>
            <div className="remainder">
                <div className="avatar">
                    <Avatar/>
                </div>
                <LanguageIcon/>
                <Button>Add Queries</Button>
            </div>    
        </div>
    )
}

export default navbar
