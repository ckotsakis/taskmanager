import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Task from './components/task';
import Nav from './components/nav';
import SearchBar from './components/SearchBar';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


//Create the library
library.add(fab,fas);

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
              <SearchBar/>
              <br/>
              <Task/>
            </div>
            <div className="col-sm-4">
           
            </div>
          </div>

        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));