import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import Home from './pages/Home';



const  App = () => {
  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
      <GlobalStyle />
    </>
  );
}

export default App;
