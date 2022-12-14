import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dashbord from './Dashboard';
import AddUser from './AddUser';
import Setting from './Setting';
import Modal from './Modal';

const AdminDashboard = () => {
    const data = useSelector(state => state.userReducer)
    const allEmployee = data.allEmployee;
    const data2 = useSelector(state => state.dataReducer)
    const isModalOpen = data2.isModalOpen;
    const email = data2.modalUser;

    const dispatch = useDispatch();

    const [mode, setMode] = useState("dashboard");
    const class1 = mode=="dashboard" ? "section selected" : "section";
    const class2 = mode=="addEmployee" ? "section selected" : "section";
    const class3 = mode=="setting" ? "section selected" : "section";
  return (
    <div className='container'>
        <div className='topContainer'>
            <button className={class1} onClick={
                () => {
                    setMode("dashboard");
                    dispatch({type: "MODAL_CLOSE"});
                }
            }> Dashboard </button>
            <button className={class2} onClick={
                () => {
                    setMode("addEmployee");
                    dispatch({type: "MODAL_CLOSE"});
                }
            }> Add Employee </button>
            <button className={class3} onClick={
                () => {
                    setMode("setting");
                    dispatch({type: "MODAL_CLOSE"});
                }
            }> Setting </button>
        </div>

        <div className="bottomContainer">
            { isModalOpen ? <Modal email={email} /> : (mode == "dashboard" ? <Dashbord /> : mode == "addEmployee" ? <AddUser /> : <Setting />) }
        </div>
        

    </div>
  )
}

export default AdminDashboard