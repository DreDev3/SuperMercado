import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';
import Setores from '../pages/Secoes';
import Receitas from '../pages/Receitas';

export default function Routess() {
  return (
    <Routes>
      {/*         <Route exact path='/' Component={Home} /> */}
      <Route path='*' Component={Page404} />

      <Route element={<MyRoute /* isClosed */ />}>
        <Route path='/' element={<Home />} />
        <Route path='/setores' element={<Setores />} />
        <Route path='/receitas' element={<Receitas />} />
      </Route>
    </Routes>
  );
}
