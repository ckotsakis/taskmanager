import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import Moment from "moment";

import "react-datepicker/dist/react-datepicker.css";



class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {taskName: '', taskDescrption:'', category: '', dueDate: new Date()};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    onFormSubmit = event => {

        event.preventDefault();
        
        this.props.onSubmit(this.state);

       this.setState({taskName: '', taskDescrption: ''});
        //this.props.onSubmit("omg it worked?");

    }

    handleDateChange(date) {
        console.log(date);

        //const strdate = Moment(date).format("MM/DD/yyyy");
        console.log(Moment(date).format("MM/DD/yyyy"));

        this.setState({dueDate: date});

        //this.setState({dueDate: new Date()});

        //console.log(this.state.duedate);
    }


    handleChange(event) {

        const target = event.target;
        //const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        //this.setState({[name]: value});

        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({[name]: event.target.value});
    }



    render() {

        return (
            <div>
            
                <table width="100%">
                    <tbody>
                        <tr>
                            <td><input className="form-control me-2 inputctrl" type="search" placeholder="Search" aria-label="Search" /></td>
                            <td>&nbsp;<button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#createTask"><FontAwesomeIcon icon={["fas", "plus"]} /> NEW TASK</button></td>
                        </tr>
                    </tbody>
                </table>


                <form id="testpost" onSubmit={(event) => this.onFormSubmit(event)}>

                    <div className="modal fade" id="createTask" tabindex="-1" aria-labelledby="createTaskLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="createTaskLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label for="taskName" className="form-label">Task Title</label>
                                        <input type="text" className="form-control" id="taskName" name="taskName" aria-describedby="taskHelp" onChange={this.handleChange} value={this.state.taskName} />
                                        <div id="taskHelp" className="form-text">Provide a title for your task</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="taskDescription" class="form-label">Task Description</label>
                                        <textarea class="form-control" id="taskDescription" name="taskDescription" rows="3" onChange={this.handleChange}></textarea>
                                        <div id="taskDescriptionHelp" className="form-text">Describe your task</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="category" className="form-label">Category</label>
                                        <input type="text" className="form-control" id="category" name="category" aria-describedby="categoryHelp" onChange={this.handleChange}/>
                                        <div id="categoryHelp" className="form-text">Categorize your task</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="dueDate" className="form-label">Due Date</label>
                                        <DatePicker
                                            selected={ this.state.dueDate }
                                            wrapperClassName="datePicker"
                                            className="form-control"
                                            dateFormat="MM/dd/yyyy"
                                            name="dueDate"
                                            onChange={this.handleDateChange}
                                        />
                                        <div id="duedatehelp" className="form-text">When is it due?</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="priority" className="form-label">Priority</label>
                                        <select className="form-select" name="priority" aria-label="Default select example" onChange={this.handleChange}>
                                            <option value="0" selected>Low</option>
                                            <option value="1">Medium</option>
                                            <option value="2">High</option>
                                        </select>
                                        <div id="priorityhelp" class="form-text">Set the priority</div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


            </div>



        )
    }
}

export default SearchBar;