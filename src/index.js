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
          <Nav/>
      </div>)
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));