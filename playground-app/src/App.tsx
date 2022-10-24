import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
} from 'react-router-dom'
import './App.css';
import Context from './pages/Context';
import Page from './components/Page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page render={<h1>Test</h1>} />,
  },
  {
    path: "/context",
    element: <Page render={<Context/>} />,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
