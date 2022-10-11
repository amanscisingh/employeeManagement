import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllEmployee } from '../../actions/apiActions';

const Dashbord = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllEmployee());
    }, []);
    const data = useSelector(store => store.dataReducer);
    const allEmployee = data.allEmployee || [];
  return (
    <div>   
        <h1 style={ {fontSize: '30px', marginTop: '30px'} }>Admin Dashboard</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Joining Date</th>
            </tr>

            {
                allEmployee.map((emp, i) => {
                    return  <tr key={i} className='scale' onClick={() => {
                        dispatch({
                            type: "MODAL_OPEN",
                            payload: allEmployee[i].email
                        })
                    }}> 
                            <td> {allEmployee[i].name} { allEmployee[i].isBlocked ? '❌' : '✅'  } </td>
                            <td> {allEmployee[i].department} </td>
                            <td> {new Date(allEmployee[i].joining).toLocaleDateString() } </td>  
                        </tr>
                    })
            }

        </table>

    </div>
  )
}

export default Dashbord