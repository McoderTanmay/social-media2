import React, { useState } from 'react'
import { FollowimgData } from '../../../../Data/FollowingData'
import "../Following/FollowingU.css"
import FollowingUList from './FollowingUList'


const FollowingU = ({following,setFollowing}) => {
  
  return (
    <div className="following-comp">
      <h2>Who is following you</h2>
      {FollowimgData.map((data,id)=>(

        <FollowingUList 
        following={following}
        setFollowing={setFollowing}
        data={data}
        key={id}
        />
      ))}
      
      <button className='SM-btn'>Show more</button>
    </div>
    
  )
}

export default FollowingU