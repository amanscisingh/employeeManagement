import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dashbord from './Employee/Dashboard';
import AddTask from './Employee/AddTask';
import Setting from './Employee/Setting';

const EmployeeDashboard = () => {
    const [mode, setMode] = useState("dashboard");
    const class1 = mode=="dashboard" ? "section selected" : "section";
    const class2 = mode=="addTask" ? "section selected" : "section";
    const class3 = mode=="setting" ? "section selected" : "section";
  return (
    <div className='container'>
        <div className='topContainer'>
            <div className={class1} onClick={
                () => setMode("dashboard")
            }> Dashboard </div>
            <div className={class2} onClick={
                () => setMode("addTask")
            }> Add Task </div>
            <div className={class3} onClick={
                () => setMode("setting")
            }> Setting </div>
        </div>

        <div className="bottomContainer">
            { mode == "dashboard" ? <Dashbord /> : mode == "addTask" ? <AddTask /> : <Setting /> }
        </div>
        

    </div>
  )
}

export default EmployeeDashboard