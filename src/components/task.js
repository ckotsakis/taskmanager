import React from 'react';

const Task = props => {
    return (

        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">Do something quickly...
                    <div class="dropdown pull-right">
                        <button class="btn btn-secondary btn-sm btn-light grey" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button class="dropdown-item" type="button">Edit Task</button></li>
                            <li><button class="dropdown-item" type="button">Change Status</button></li>
                            <li><button class="dropdown-item" type="button">Mark Completed</button></li>
                            <li><button class="dropdown-item" type="button">Delete Task</button></li>
                        </ul>
                    </div>
                </h5>
                <p class="card-text grey">Here is some text for this task. I hope you can get it sorted out in the next few days.</p>
                <div class="taskinfo">10/02/2021 <i class="fas fa-exclamation-circle icon red"></i> <span class="category">Work</span></div>
                
            </div>
            <div class="card-footer text-muted">
                <small class="text-muted">Last updated 3 mins ago by Me</small>
            </div>
        </div>

    )
}

export default Task;