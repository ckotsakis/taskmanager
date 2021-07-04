import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Task from './components/task'
import Nav from './components/nav'
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends React.Component {


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
              
              <Task/>
            </div>
            <div className="col-sm-4">
              column 3
            </div>
          </div>

        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));