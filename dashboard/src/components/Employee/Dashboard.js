import React, {useEffect, useState} from 'react'
import PieChart from './PieChart'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodayTasks, fetchWeeklyTasks } from '../../actions/apiActions';
import BarChart from './BarChart';
import AllTasks from './AllTasks';

const Dashboard = ({email}) => {
    const dispatch = useDispatch();
    const [todayDate, setTodayDate] = useState(new Date(Date.now()).toISOString().split('T')[0]);
    useEffect(()=> {
        // console.log(email)
        dispatch(fetchTodayTasks(todayDate, email));
        dispatch(fetchWeeklyTasks(todayDate, email));
    }, [todayDate])
    
    const data = useSelector(state => state.dataReducer);
    const todayTasks =  data.todayTasks;
    const prevDayTasks = data.prevDayTasks;
    const weeklyTasks = data.weeklyTasks;
    // calculate ['Meeting', 'Work', 'Break']
    let todayT = [0,0,0];
    let yesterdayT = [0,0,0];

    for(let i=0; i<todayTasks.length; i++) {
        if(todayTasks[i].type == 'meeting') {
            todayT[0]+=todayTasks[i].duration;
        } else if(todayTasks[i].type == 'work') {
            todayT[1]+=todayTasks[i].duration;
        } else {
            todayT[2]+=todayTasks[i].duration;
        }
    }

    for(let i=0; i<prevDayTasks.length; i++) {
        if(prevDayTasks[i].type == 'meeting') {
            yesterdayT[0]+=prevDayTasks[i].duration;
        } else if(prevDayTasks[i].type == 'work') {
            yesterdayT[1]+=prevDayTasks[i].duration;
        } else {
            yesterdayT[2]+=prevDayTasks[i].duration;
        }
    }

    // calculate ['Not Working', 'Working', 'Meeting']
    let weeklyT = [0, 0, 0];
    for(let i=0; i<weeklyTasks.length; i++) {
        if(weeklyTasks[i].type == 'break') {
            weeklyT[0]+=weeklyTasks[i].duration;
        } else if(weeklyTasks[i].type == 'meeting') {
            weeklyT[1]+=weeklyTasks[i].duration;
        } else {
            weeklyT[1]+=weeklyTasks[i].duration;
            weeklyT[2]+=weeklyTasks[i].duration;
        }
    }

  return (
    <div className='chartDashboard'>

        <div className="box center">
            <label htmlFor="date">Change Date 🕓 </label>
            <input type="date" name="date" id="date" value={todayDate}
                onChange={
                    (e)=> {
                        setTodayDate(e.target.value)
                    }
                }
            />
        </div>
        <hr style={{color:'#760A9C', width: '100%', margin: '0', padding:'0'}} />
            
        <div className="data">
            <AllTasks data = {todayTasks} />
        </div>

        <hr style={{color:'#760A9C', width: '100%', marginBottom: '10px', padding:'0'}} />

        <div className="pies">
            <PieChart dataPoint = {todayT} date = {'Today'}  />
            <PieChart dataPoint = {yesterdayT} date = {'Yesterday'} />
        </div>

        <div className="bars">
            <BarChart dataPoint = {weeklyT} date = {'Weekly Data'}  />
        </div>
    </div>
  )
}

export default Dashboard