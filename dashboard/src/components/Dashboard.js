import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEmployee, fetchTodayTasks, fetchWeeklyTasks } from '../actions/apiActions';
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard';

const Dashboard = () => {
  const userData = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const cDate = new Date(Date.now()).toLocaleDateString();
  const role = userData.user.role;

  useEffect(()=>{
    dispatch({
      type: 'UPDATE_DATE',
      payload: cDate
    });
    
    if(role === 'admin') {
      dispatch(fetchAllEmployee());
    }

    if(role === 'employee') {
      dispatch(fetchTodayTasks());
      dispatch(fetchWeeklyTasks());
    }
  }, []);

  return (
    <div className="container">
      { role === 'admin' ?  <AdminDashboard /> : <EmployeeDashboard /> }
    </div>

    // <EmployeeDashboard />
  )
}

export default Dashboard