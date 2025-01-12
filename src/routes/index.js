import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';
import Setores from '../pages/Secoes';
import NossasLojas from '../pages/NossasLojas';
import Contato from '../pages/Contato';

export default function Routess() {
  return (
    <Routes>
      {/*         <Route exact path='/' Component={Home} /> */}
      <Route path='*' Component={Page404} />

      <Route element={<MyRoute /* isClosed */ />}>
        <Route path='/' element={<Home />} />
        <Route path='/setores' element={<Setores />} />
        <Route path='/nossas-lojas' element={<NossasLojas />} />
        <Route path='/contato' element={<Contato />} />
      </Route>
    </Routes>
  );
}
