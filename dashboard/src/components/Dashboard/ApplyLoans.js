import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ApplyLoans = () => {
    const appControls = useSelector(state => state.appControls);
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

  if (!userInfo.isAccountComplete) {
        return (
            <div className='bottomContainer'>
                <h2>You are not autholised to raise any loans Requests.</h2>
                <h3>Please visit the profile section and complete your profile first.</h3>
            </div>
        )

    } else {
        return (
            <div className='bottomContainer'>
                <h2>Your Applied Loabns will apper here...</h2>
            </div>
        )
    }
}

export default ApplyLoans   