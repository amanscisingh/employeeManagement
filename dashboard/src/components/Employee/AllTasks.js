import React from 'react'
import PropTypes from 'prop-types'

const AllTasks = ({data=[]}) => {
    var parseHTML = data.map((ele, ind) => 
    <tr key={ind}>
            <td>{ele.description}</td>
            <td>{ele.type}</td>
            <td>{new Date(ele.startTime).getHours() + ":" + new Date(ele.startTime).getMinutes() }</td>
            <td>{ele.duration}</td>
        </tr>
    );
    
  return (
    <>
        <table>
            <tr>
                <td>Description</td>
                <td>Type</td>
                <td>Start Time</td>
                <td>Duration</td>
            </tr>
            { parseHTML }

        </table>

        { data.length == 0 ? <div>  No Tasks Added for today! </div>  : null }
    </>
  )
}

AllTasks.propTypes = {
    data : PropTypes.array,
    // data.startTime : PropTypes.data
}

export default AllTasks