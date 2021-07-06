import { tsPropertySignature } from '@babel/types';
import React from 'react';
import Task from './task';

const TaskList = props => {

    if (props.tasks != null) {
        const taskCards = props.tasks.map(task => {
            console.log(task.taskName);
            return (
                <Task key={task._id.$oid} task={task}/>
            )
        });
        return <div>{taskCards}</div>
    }
    return <div></div>;
}

export default TaskList;