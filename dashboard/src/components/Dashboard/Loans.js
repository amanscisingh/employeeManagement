import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ApplyLoans from './ApplyLoans';
import ApproveLoans from './ApproveLoans';
import Profile from './Profile';

const Loans = () => {
    const appControls = useSelector(state => state.appControls);
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const controllerMode = appControls.controllerMode;

    if (controllerMode === 'approve') { 
        return (
          <ApproveLoans />
        )

    } else if (controllerMode === 'profile')  {
       return (
           <Profile />
       )
    } else {
        return (
            <ApplyLoans />
        )
    }

}

export default Loans