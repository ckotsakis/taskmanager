import React from 'react';

const Task = props => {
    return (

        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Do something quickly...
                    <div className="dropdown pull-right">
                        <button className="btn btn-secondary btn-sm btn-light grey" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">x</button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button">Edit Task</button></li>
                            <li><button className="dropdown-item" type="button">Change Status</button></li>
                            <li><button className="dropdown-item" type="button">Mark Completed</button></li>
                            <li><button className="dropdown-item" type="button">Delete Task</button></li>
                        </ul>
                    </div>
                </h5>
                <p className="card-text grey">Here is some text for this task. I hope you can get it sorted out in the next few days.</p>
                <div className="taskinfo">10/02/2021 <span className="category">Work</span></div>
                
            </div>
            <div className="card-footer text-muted">
                <small className="text-muted">Last updated 3 mins ago by Me</small>
            </div>
        </div>

    )
}

export default Task;