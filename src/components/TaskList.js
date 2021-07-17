import React from 'react';
import Task from './task';
import moment from 'moment';

const TaskList = props => {

    let now = new moment();
    let dt = new Date();
    let diff = 0;
    var current = null;
   
    if (props.tasks != null) {
        const taskCards = props.tasks.map(task => {
            
            dt = new moment(task.dueDate.$date);
            diff = dt.startOf('day').diff(now.startOf('day'),'days');
            var text = '';

            if(diff < 0 && current != -1){
                current = -1;
                text = 'Late';
            } else if(diff == 0 && current != 0){
                current = diff;
                text = 'Today';
            } else if(diff == 1 && current != 1){
                current = 1;
                text = 'Tommorrow';
            } else if(diff < 7 && diff > 0 && current != 7){
                current = 7;
                text = 'This week';
            } 

            //console.log(a.diff(b, 'days'));
            console.log(diff);
            //console.log(moment(task.dueDate).format("MM/DD/YYYY"));

            return (
                <div>
                     <div class="sectiontitle">{text}</div>
                    <Task key={task._id.$oid} task={task} />
                </div>
            )
        });
        return <div>{taskCards}</div>
    }
    return <div></div>;
}

export default TaskList;