import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Routers } from '../routes';

import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';


function Base() {
  return (
    <>
      <Aside />
      <div id="right-panel" className="right-panel top">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Routers.map((route, index) => (
                        <Route path={route.path}
                            key={index}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default Base;
