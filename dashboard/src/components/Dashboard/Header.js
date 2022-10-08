import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const userInfo = useSelector(state => state.userInfo);

  return (
    <div className='headerContainer'>
        <img src={userInfo.photo} alt="logo" srcset="" width="50px" height="50px" style={{ borderRadius:"50%" }} />
        <h1>{userInfo.name}</h1>
        <img src={userInfo.photo} alt="profile photo" srcset="" width="50px" height="50px" style={{ borderRadius:"50%" }} />
    </div>
  )
}

export default Header