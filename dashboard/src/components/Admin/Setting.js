import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../actions/apiActions';

const Setting = () => {
  const updateInfo = useSelector(state => state.userReducer.updateInfo);
    console.log(updateInfo)
    const dispatch = useDispatch();
  return (
    <div>
        <h1 style={ {fontSize: '30px', marginTop: '30px', marginBottom: '30px'} }>Update Details</h1>
        <div className='loginContainer'>

            <div className="box">
                <label htmlFor="email">Name</label>
                    <input type="name" name="name" value={updateInfo.name} onChange={
                        (e) => {
                            dispatch({
                                type: 'CHANGE_NAME',
                                payload: e.target.value
                            })  
                        }
                    } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="email">Email ID</label>
                <input type="email" disabled name="email" value={updateInfo.email} onChange={
                        (e) => {
                            dispatch({
                                type: 'CHANGE_EMAIL',
                                payload: e.target.value
                            })  
                        }
                    } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="password">Current Password</label>
                <input type="password" name="password" value={updateInfo.password} onChange={
                    (e) => {
                        dispatch({
                            type: 'CHANGE_PASSWORD',
                            payload:  e.target.value
                        })  
                    }
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="password2">New Password</label>
                <input type="password2" name="password2" value={updateInfo.password2} onChange={
                    (e) => {
                        dispatch({
                            type: 'CHANGE_PASSWORD2',
                            payload:  e.target.value
                        })  
                    }
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="contact">Contact Number</label>
                <input type="tel" name="contact" value={updateInfo.contact} onChange={
                    (e) => {
                        dispatch({
                            type: 'CHANGE_CONTACT',
                            payload:  e.target.value
                        })  
                    }
                    
                } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="joining">Joining Date</label>
                <input type="date" name="joining" disabled value={new Date(updateInfo.joining).toISOString().split('T')[0]} onChange={
                    (e) => {
                        dispatch({
                            type: 'CHANGE_JOINING',
                            payload:  e.target.value
                        })  
                    }
                } />       
            </div> 
            <br />

            <div className="box">
                <label htmlFor="department">Department</label>
                <select name="department" value={updateInfo.department} onChange={
                    (e) => {
                        dispatch({
                            type: 'CHANGE_DEPARTMENT',
                            payload:  e.target.value
                        })  
                    }
                } >
                    { updateInfo.department == 'technical' ? <option value="technical" selected > Technical </option> : <option value="technical" > Technical </option> }
                    { updateInfo.department == 'sales' ? <option value="sales" selected > Sales </option> : <option value="sales"  > Sales </option> }
                    { updateInfo.department == 'hr' ? <option value="hr" selected > HR </option> : <option value="hr"  > HR </option> }
                </select>
            </div>

            <br />

            <div className="buttonBox">
                <button onClick={
                    () => {
                        if (updateInfo.name.length < 3 ) {
                            alert('Name must be at least 3 characters long');
                        } else if(updateInfo.password.length != 0 && updateInfo.password.length < 3 ) {
                            alert('Password must be at least 3 characters long');
                        } else if (updateInfo.contact == null) {
                            alert('Contact should not be empty');
                        } else if (updateInfo.joining == null) {
                            alert('Joining Date should not be empty');
                        } else {
                            // accept the registration
                            const user = {
                                name: updateInfo.name,
                                email: updateInfo.email,
                                password: updateInfo.password,
                                password2: updateInfo.password2,
                                contact: updateInfo.contact,
                                department: updateInfo.department
                            }

                            dispatch(updateUser(user));
                        }


                        
                    }
                }> Update </button>

                <button onClick={
                    ()=> {
                        window.localStorage.clear();
                        window.location.reload();
                    }
                }> Logout </button>

            </div>
        </div>
    </div>
  )
}

export default Setting