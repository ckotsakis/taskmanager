import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Task from './components/task';
import TaskList from './components/TaskList';
import Nav from './components/nav';
import SearchBar from './components/SearchBar';
import ChartStats from './components/ChartStats';
import Calendar from './components/Calendar';
import Welcome from './components/Welcome';

import Moment from 'moment';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


//Create the library
library.add(fab,fas);

class App extends React.Component {

  state = {data: null, statsdata: null, taskupdate: ''}

  componentDidMount = async () => {

    const response = await axios.get('http://192.168.1.8:8080/taskmanager', {});

    const response2 = await axios.get('http://192.168.1.8:8080/taskmanager/snippet', {});
    //console.log(response2.data);

    this.setState({data: response.data});
    this.setState({statsdata: response2.data});
    

  }

  componentDidUpdate() {
    console.log("App Component has been updated...");


  }

  onSearchBarSubmit = async (param) => {
    console.log("is this working? " + param.taskName);

  
    const task = {  "taskName": param.taskName,
                    "taskDescription": param.taskDescription,
                    "dueDate": Moment(param.dueDate).format("MM/DD/yyyy"),
                    "status": "1",
                    "priority": param.priority,
                    "category": param.category,
                    "createdBy": "Chris" };

    const postresp = await axios.post('http://192.168.1.8:8080/taskmanager', task);

    //this.setState({taskupdate: 'please refresh'});

    const response = await axios.get('http://192.168.1.8:8080/taskmanager', {});
    this.setState({data: response.data});
    

  }

  render() {
    return (
      <div>
        <Nav />
        <br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Welcome data={this.state.statsdata}/>
              <Calendar advance="0" />
              <Calendar advance="1" />
              
            </div>
            <div className="col-sm-5">
              <h3>Tasks</h3>
              <hr/>
              <SearchBar onSubmit={this.onSearchBarSubmit}/>
              <br/>
              <div class="sectiontitle">Today</div>
              <TaskList tasks={this.state.data}/>
            </div>
            <div className="col-sm-4">
              <ChartStats/>
              <ChartStats/>
            </div>
          </div>

        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));