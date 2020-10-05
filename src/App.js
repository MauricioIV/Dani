import React from 'react';
import './App.css';
import {useUser} from 'reactfire';
import Auth from './Auth';
import BarraSuperior from './BarraSuperior';
import User from './User.js';

function App() {
  const user=useUser();


  return (
    <div className="App">
       <BarraSuperior></BarraSuperior>
       
       <Auth></Auth>

      
    </div>
  );
}

export default App;
