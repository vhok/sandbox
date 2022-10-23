import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route 
} from 'react-router-dom'
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Test</h1>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
