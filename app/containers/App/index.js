/* eslint-disable prettier/prettier */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';
import DieuhuongURL from '../../components/router/DieuhuongURL';


import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <DieuhuongURL/>
        <Footer/>
        <GlobalStyle />
      </Router>
      
    </div>
  );
}
