/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import './App.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Routers } from './routes';


const Login = React.lazy(() => import('./Views/Auth/Login'));
const Register = React.lazy(() => import('./Views/Auth/Register'));
const Dashboard = React.lazy(() => import('./Views/Dashboard'));
const BaseLayout = React.lazy(() => import('./Layout/Base'));

function App() {

  return (

    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/base" element={<BaseLayout />} />
          {Routers.map((route, index) => (
            <Route path={route.path}
              key={index}
              element={<route.component />}
            />
          ))}
        </Routes>
        <ToastContainer />
      </Suspense>
    </HashRouter>

  );
}

export default App;
