import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../../actions/apiActions';

const AddUser = () => {
    const userInfo = useSelector(state => state.dataReducer.userInfo);
    // console.log(userInfo)
    const dispatch = useDispatch();


  return (
    <div>
        <h1 style={ {fontSize: '30px', marginTop: '30px', marginBottom: '30px'} }>Add Employee</h1>
        <div className='loginContainer'>

            <div className="box">
                <label htmlFor="role">Is Admin? </label>
                <input type="checkbox" name="role" value={userInfo.role} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_ROLE',
                            payload: e.target.checked
                        })  
                    }
                } />
                <i style={ {fontSize: '15px'}}>(check if you want to create admin credentials) </i>
            </div>
            
            <br/>

            <div className="box">
                <label htmlFor="name">Name</label>
                <input data-cy="employeeNameField" type="text" placeholder='Employee name' name="name" value={userInfo.name} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_NAME',
                            payload: e.target.value
                        })  
                    }
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="email">Email ID</label>
                <input data-cy="employeeEmailField" type="email" placeholder='Employee email' name="email" value={userInfo.email} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_EMAIL',
                            payload: e.target.value
                        })  
                    }
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="password">Password</label>
                <input data-cy="employeePassField" type="password" placeholder='Enter employee' name="password" value={userInfo.password} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_PASSWORD',
                            payload:  e.target.value
                        })  
                    }
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="contact">Contact Number</label>
                <input data-cy="employeeContactField" type="number" placeholder='Enter contact' name="contact" value={userInfo.contact} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_CONTACT',
                            payload:  e.target.value
                        })  
                    }
                    
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="joining">Joining Date</label>
                <input data-cy="employeeJoiningField" type="date" placeholder='Enter joining date' name="joining" value={userInfo.joining} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_JOINING',
                            payload:  e.target.value
                        })  
                    }
                } />       
            </div> 
            <br />

            <div className="box">
                <label htmlFor="department">Department</label>
                <select data-cy="employeeDeptField" name="department" placeholder='Choose department' value={userInfo.department} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_DEPARTMENT',
                            payload:  e.target.value
                        })  
                    }
                } >
                    <option value="technical"> Technical </option>
                    <option value="sales"> Sales </option>
                    <option value="hr"> HR </option>
                </select>
            </div>

            <br />
            <button data-cy="addEmployeeButton" className='add_employee' onClick={
                () => {
                    console.log(userInfo)
                    console.log(new Date(userInfo.joining) > new Date(Date.now()))
                    console.log(new Date(userInfo.joining))
                    console.log(new Date(Date.now()));
                    if (userInfo.name.length < 3 ) {
                        alert('Name must be at least 3 characters long');
                    } else if (userInfo.email.length < 3 ) {
                        alert('Email must be at least 3 characters long');
                    } else if(!userInfo.email.includes('@')) {
                        alert('Email must contain @');
                    } else if(userInfo.password.length < 3 ) {
                        alert('Password must be at least 3 characters long');
                    } else if (userInfo.contact == null) {
                        alert('Contact should not be empty');
                    } else if (userInfo.joining == null) {
                        alert('Joining Date should not be empty');
                    } else if (new Date(userInfo.joining) > new Date(Date.now())) {
                        alert('Joining Date should not be greater than today');
                    } else {
                        // accept the registration
                        const user = {
                            name: userInfo.name,
                            email: userInfo.email,
                            password: userInfo.password,
                            role: userInfo.role,
                            contact: userInfo.contact,
                            joining: userInfo.joining,
                            department: userInfo.department
                        }

                        dispatch(registerNewUser(user));
                    }


                    
                }
            }> { userInfo.role == 'admin' ? "Add Admin" : "Add Employee" } </button>
        </div>
    </div>
  )
}

export default AddUser