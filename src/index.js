import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Task from './components/task';
import TaskList from './components/TaskList';
import Nav from './components/nav';
import SearchBar from './components/SearchBar';
import ChartStats from './components/ChartStats';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


//Create the library
library.add(fab,fas);

class App extends React.Component {

  state = {data: null}

  componentDidMount = async () => {
    const response = await axios.get('http://192.168.1.8:8080/taskmanager', {
    });
    //console.log(response.data);
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
              Column 1
            </div>
            <div className="col-sm-5">
              <h3>Tasks</h3>
              <hr/>
              <SearchBar/>
              <br/>
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