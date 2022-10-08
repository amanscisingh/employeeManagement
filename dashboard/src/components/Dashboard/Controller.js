import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Controller = () => {
    const appControls = useSelector(state => state.appControls);
    const dispatch = useDispatch();
    
  return (
    <div className='controllerContainer'>
        <div className="controlButtons" onClick={
            () => {
                dispatch({ type: 'TOGGLE_CONTROLLER_MODE_APPROVE' });
            }
        }
        style={{
            transform: appControls.controllerMode === 'approve' ? `scale(1.1)` : `scale(1)`,
        }}
        >Loan Requests</div>

        <div className="controlButtons" onClick={
            () => {
                dispatch({ type: 'TOGGLE_CONTROLLER_MODE_PROFILE' });
            }
        }
        style={{
            transform: appControls.controllerMode === 'profile' ? `scale(1.1)` : `scale(1)`,
        }}
        >Profile</div>


        <div className="controlButtons" onClick={
            () => {
                dispatch({ type: 'TOGGLE_CONTROLLER_MODE_APPLY' });
            }
        }
        style={{
            transform: appControls.controllerMode === 'apply' ? `scale(1.1)` : `scale(1)`
        }}>Applied Loans</div>

    </div>
  )
}

export default Controller