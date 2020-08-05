import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Upload from './Upload';
import Display from './Display';
import { Button} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Upload /> 
      <Display />
      
      <div>
        <div>
          <Button variant="contained" color="primary">Update</Button>
          <Button variant="contained" color="danger">Delete</Button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
