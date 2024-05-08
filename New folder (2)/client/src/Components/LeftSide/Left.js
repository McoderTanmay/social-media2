import React, { useState } from 'react'
import "../LeftSide/Left.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom';
import {BsBookmark} from "react-icons/bs"
import { MdExplore } from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Profile from "../../assets/profile.jpg"


const Left = ({profileImg,
               modelDetails
              }) => {

  const [btnActive,setBtnActive] =useState("#")
  const [logOutExit,setLogOutExit] =useState(false)


  return (
    <div className="L-features">
      <Link to="/home" style={{textDecoration:"none",color:"black"}}>
        <div onClick={()=>setBtnActive("#")} id='L-box' className={btnActive === "#" ? "active" : ""} >
          <AiOutlineHome className='margin'/>
          <span>Home</span>
        </div>
      </Link>
    
      <div id='L-box' onClick={()=>setBtnActive("#search")} className={btnActive === "#search" ? "active" : ""}>
        <AiOutlineSearch
          className='margin'/>
         <span>Search</span>
      </div>
      <div id='L-box' onClick={()=>setBtnActive("#explore")} className={btnActive === "#explore" ? "active" : ""}>
        <MdExplore
          className='margin'/>
         <span>Explore</span>
      </div>
          

      <div id='L-box' onClick={()=>setBtnActive("#lists")} className={btnActive === "#lists" ? "active" : ""}>
        <LiaPhotoVideoSolid
        className='margin'/>
        <span>Reels</span>
      </div>
      <div id='L-box' onClick={()=>setBtnActive("#Messeges")} className={btnActive === "#Messeges" ? "active" : ""}>
        <RiMessengerLine
        className='margin'/>
        <span>Messeges</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#saved")} className={btnActive === "#saved" ? "active" : ""}>
        <BsBookmark
         className='margin'/>
        <span>Saved</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#settings")} className={btnActive === "#settings" ? "active" : ""}>
        <FiSettings 
        className='margin'/>
        <span>Settings</span>
      </div>

      <div className="left-user">
        <Link to="/home" style={{textDecoration:"none",color:"black"}}>
          <div className="user-name-userid">
            <img src={profileImg ? (profileImg) : Profile} alt="" />
              <div className='L-user'>
                <h1>{modelDetails ? (modelDetails.ModelName) : ""}</h1>
                <span>{modelDetails ? (modelDetails.ModelUserName) : ""}</span>
            </div>
          </div>
        </Link>
        <MoreHorizIcon onClick={()=>setLogOutExit(!logOutExit)} className='vert'/>
          
          {logOutExit && (
            <div className="logOutExitContainer">
              <button>Add an existing account</button>
              <Link to="/" style={{width:"100%"}}><button>Log out</button></Link>
            </div>
          )}
      </div>

    </div>
  )
}

export default Left