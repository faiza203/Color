import React from 'react';
import Home from './../pages/Home.js';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: () => <Home />
  }
];


export default routes;