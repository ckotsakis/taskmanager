import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import moment from 'moment';
import { createPortal } from 'react-dom';

const Task = props => {
    
    //console.log(props.task._id);
    
    let color = 'red';
    if (props.task.priority === '0') {
        color = 'green';
    } else {
        color = 'orange';
    }

    let status = '';
    switch(props.task.status) {
        case '1':
            status = "New";
            break;
        case '2':
            status = "In Progress";
            break;
        case '3':
            status = "On Hold";
            break;
        case '4':
            status = "Completed";
            break;
    }

    let now = new moment();
    let dt = new moment(props.task.createdOn.$date);
    let diff = now.diff(dt,'days');

    let created = '';
    if (diff < 1) {
        created = 'Created Today';
    } else if (diff === 1) {
        created = 'Created Yesterday';
    } else {
        created = 'Created on ' + dt.format("dddd MMM Do YYYY");
    }

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
                <div className="taskinfo">
                    <Moment format="MM/DD/YYYY">{props.task.dueDate.$date}</Moment> &nbsp;
                    {(props.task.category != null) ? <span className="category">{props.task.category}</span>: ''} &nbsp;
                    <span className={(props.task.priority === '2')?'red':color}><FontAwesomeIcon icon={["fas", "circle"]} size="xs" /> </span>
                </div>
                
                
            </div>
            <div className="card-footer text-muted">
                <small className="text-muted">{created}</small>
                <span className="pull-right">{status}</span>
            </div>
        </div>
    )
        

};

export default Task;