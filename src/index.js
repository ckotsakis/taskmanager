import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  render() {
    return (
      <div>
          <h1>Hello Task Manager</h1>
      </div>)
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));