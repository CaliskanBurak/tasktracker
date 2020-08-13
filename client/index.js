 import React, { Component } from 'react';
 import { render } from 'react-dom'; 
 import styles from './index.css';
 import List from './List';



 class App extends Component { 
    render() {
        return(
            <div className="continer">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                    <h1 className="text-center">TODO List</h1>
                    <List />
                    </div>
                </div>
            </div>
        )
    }

//     componentDidMount = () => {
//         const todos = localStorage.getItem('todos')
//     }
}


 render(<App />, document.getElementById('root'))