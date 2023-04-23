import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter 
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/content",
//     element: <div>Hello world!</div>,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         {/* <RouterProvider router={router} /> */}
         <BrowserRouter>
          <App />
         </BrowserRouter>
   
  </React.StrictMode>
);