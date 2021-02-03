import React from 'react';
import './App.css';
import { TextField } from './TextField';

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div>
      <TextField text='hello' obj={{p1: '5'}} User={{firstName: 'Joe', lastName: 'Smith'}} num={5}/>
      <h1>test</h1>
    </div>
  );
}
  
export default App;
