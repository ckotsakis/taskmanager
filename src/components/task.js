import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Task = props => {
    console.log(props.task._id);
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{props.task.taskName}
                    <div className="dropdown pull-right">
                        <button className="btn btn-secondary btn-sm btn-light grey" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={["fas","ellipsis-v"]}/></button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">Edit Task</button></li>
                            <li><button className="dropdown-item" type="button">Change Status</button></li>
                            <li><button className="dropdown-item" type="button">Mark Completed</button></li>
                            <li><button className="dropdown-item" type="button">Delete Task</button></li>
                        </ul>
                    </div>
                </h5>
                <p className="card-text grey">{props.task.taskDescription}</p>
                <div className="taskinfo">{props.task.createdOn.$date}  {(props.task.category != null) ? <span className="category">{props.task.category}</span>: <div/>}
                </div>
                
                
            </div>
            <div className="card-footer text-muted">
                <small className="text-muted">Last updated 3 mins ago by Me</small>
            </div>
        </div>
    )
        

};

export default Task;