import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dashbord from './Admin/Dashboard';
import AddUser from './Admin/AddUser';
import Setting from './Admin/Setting';

const AdminDashboard = () => {
    const allEmployee = useSelector(store => store.dataReducer.allEmployee);
    const [mode, setMode] = useState("dashboard");
    const class1 = mode=="dashboard" ? "section selected" : "section";
    const class2 = mode=="addEmployee" ? "section selected" : "section";
    const class3 = mode=="setting" ? "section selected" : "section";
  return (
    <div className='container'>
        <div className='topContainer'>
            <div className={class1} onClick={
                () => setMode("dashboard")
            }> Dashboard </div>
            <div className={class2} onClick={
                () => setMode("addEmployee")
            }> Add Employee </div>
            <div className={class3} onClick={
                () => setMode("setting")
            }> Setting </div>
        </div>

        <div className="bottomContainer">
            { mode == "dashboard" ? <Dashbord /> : mode == "addEmployee" ? <AddUser /> : <Setting /> }
        </div>
        

    </div>
  )
}

export default AdminDashboard