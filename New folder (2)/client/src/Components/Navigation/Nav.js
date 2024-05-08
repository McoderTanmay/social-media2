import React from 'react'
import "../Navigation/Nav.css"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import Profile from "../../assets/profile.jpg"

const Nav = ({profileImg}) => {


  
  return (
    <nav>
        <div className="n-logo">
            <Link to="/home" className='logo' style={{color:"black",textDecoration:"none"}}>
              <h1>Face <span>Gram</span></h1>
            </Link>
        </div>

      <div className="n-form-button" >

        <form className='n-form' onSubmit={(e)=>e.preventDefault()} >
          <SearchIcon className='search-icon'/>
          <input type="text" 
          placeholder='Search post'
          id='n-search'
          />
        </form>
      </div>


       <div className="n-profile" >
          <Link to="/home"> 
            <img src={profileImg ? (profileImg) : Profile} className='n-img' style={{marginBottom:"-7px"}} alt="img"/>
          </Link>
      </div>
  
    </nav>
  )
}

export default Nav