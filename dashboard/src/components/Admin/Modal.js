import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../Employee/Dashboard'

const Modal = ({email}) => {

  return (
    <Dashboard email={email} />
  )
}

export default Modal