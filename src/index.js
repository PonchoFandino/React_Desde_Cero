import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard';

class App extends Component {
    render() {
         return (
              <Dashboard/>
         );
    }
 }
 
 ReactDOM.render( <App/>, document.getElementById('AEF'));
 
 
// const app = document.getElementById('app');
// ReactDOM.render(<Dashboard/>, app);
