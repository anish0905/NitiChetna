import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './pages/About';
import PostDetail from './components/Blogs/PostDetail';
import Boardofadvisiory from './pages/Boardofadvisiory';
import Boardofdirectors from './pages/Boardofdirectors'
import ContactPag from './pages/ContactPag'
import Volunteer from './pages/Volunteer'
import BlogsPag from './pages/BlogsPag'
const router = createBrowserRouter([
  {
    path:"/", element:<App/>,
    children:[
      {
        path:"/", element:<Home/>
      },
      {
        path:"/about", element:<About />
      },
      {
        path:"/post/:id", element:<PostDetail />
      }
      ,{
        path:"/boardofdirection", element:<Boardofdirectors />

      }
      ,{
        path:"/boardofadvisiory", element:<Boardofadvisiory />
      }
      ,{
        path:"/contactpag", element:<ContactPag />
      }
      ,{
        path:"/volunteer", element:<Volunteer/>
      },
      ,{
        path:"/blogspag", element:<BlogsPag />
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
