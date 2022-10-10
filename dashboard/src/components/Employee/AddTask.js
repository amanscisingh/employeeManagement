import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../../actions/apiActions';

const AddTask = () => {
  const task = useSelector(state => state.dataReducer.addTask);
  const dispatch = useDispatch();

  return (
    <div>
        <h1 style={ {fontSize: '30px', marginTop: '30px', marginBottom: '30px'} }>Add New Task</h1>
        <div className='loginContainer'>

            <div className="box">
                <label htmlFor="description">Description</label>
                    <input type="description" description="description" value={task.description} onChange={
                        (e) => {
                            dispatch({
                                type: 'UPDATE_DESCRIPTION',
                                payload: e.target.value
                            })  
                        }
                    } />
            </div>
            <br />

            <div className="box">
                <label htmlFor="type">Type</label>
                <select name="type" value={task.type} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_TYPE',
                            payload:  e.target.value
                        })  
                    }
                } >
                    <option value="meeting"> Meeting </option>
                    <option value="work"> Work </option>
                    <option value="break"> Break </option>
                </select>
            </div>

            <br />

            <div className="box">
                <label htmlFor="startTime">Start Time</label>
                <input type="datetime-local" name="startTime" value={task.startTime} onChange={
                    (e) => {
                        dispatch({
                            type: 'UPDATE_START_TIME',
                            payload:  e.target.value
                        })  
                    }
                } />       
            </div> 
            <br />

            <div className="box">
                <label htmlFor="duration">Duration (in minutes) </label>
                    <input type="number" name="duration" value={task.duration} onChange={
                        (e) => {
                            dispatch({
                                type: 'UPDATE_DURATION',
                                payload: e.target.value
                            })  
                        }
                    } />
            </div>
            <br />


            <button onClick={
                () => {
                    if (task.startTime >  new Date(Date.now()) ) {
                        alert("Start Time can't be greater then current time");
        
                    } else {
                        // accept the registration
                        const user = {
                            description: task.description,
                            type: task.type,
                            startTime: task.startTime,
                            duration: task.duration
                        }

                        dispatch(createTask(user));
                    }


                    
                }
            }> Add Task </button>
        </div>
    </div>
  )
}

export default AddTask