import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/apiActions';

const Login = () => {
    const userInfo = useSelector(state => state.userInfo);
    const loginInfo = useSelector(state => state.loginInfo);
    const dispatch = useDispatch();

  return (
    <div className='loginContainer'>
        <h2>Login</h2>
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={userInfo.email} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_EMAIL',
                    payload: e.target.value
                })  
            }
        } />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={userInfo.password} onChange={
            (e) => {
                dispatch({
                    type: 'UPDATE_PASSWORD',
                    payload: e.target.value
                })  
            }
        } />

        <br />
        <button onClick={
            () => {
                if (userInfo.email < 3) {
                    alert('Email must be at least 3 characters long');
                } else if( userInfo.email.includes('@') === false ) {
                    alert('Email must contain @');
                } else if( userInfo.password < 3 ) {
                    alert('Password must be at least 3 characters long');
                } else {
                    const userData = {
                        email: userInfo.email,
                        password: userInfo.password
                    }
                    dispatch(loginUser(userData))
            
                }
            }
        }>Sign In</button>
    </div>
  )
}

export default Login