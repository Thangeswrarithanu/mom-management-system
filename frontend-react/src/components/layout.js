import React from 'react';
import Nav from './nav';
import { Outlet } from 'react-router-dom';
const layout = () => {
  return (
    <>
    <main>
        <Nav />
        <Outlet />
        
    </main>
    </>
  )
}

export default layout