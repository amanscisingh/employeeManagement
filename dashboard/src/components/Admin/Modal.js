import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { blockUser } from '../../actions/apiActions'
import Dashboard from '../Employee/Dashboard'

const Modal = ({email}) => {
const dispatch = useDispatch();
  return (
    <div>
        <button style={{marginTop: '18px', cursor: 'pointer'}} onClick={
            ()=> {
                dispatch(blockUser(email));
            }
        } >Block/Unblock User </button>
        <Dashboard email={email} />
    </div>
  )
}

export default Modal