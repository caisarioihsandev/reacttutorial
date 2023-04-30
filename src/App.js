import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import './App.css';
// import logo from './logo.svg';
// import Home from './Component/Fungsional/Home';
// import Beranda from './Component/Class/Beranda';
// import BootstrapComp from "./Component/Class/BootstrapComp";
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
// import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <NavbarComp />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/about" Component={AboutComp} />
          <Route exact path="/mahasiswa" Component={ListComp} />
          <Route exact path="/mahasiswa/tambah" Component={TambahComp} />
          <Route exact path="/mahasiswa/edit" Component={EditComp} />
          {/* <Route exact path="/detail/:id" Component={DetailComp} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
