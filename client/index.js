 import React, { Component } from 'react';
 import { render } from 'react-dom'; 
 import styles from './index.css';


 class App extends Component { 
    render() {
        return(
            <div>
                hellosss world! 
            </div>
        )
    }
 }


 render(<App />, document.getElementById('root'))