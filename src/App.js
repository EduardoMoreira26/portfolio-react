import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';



const  App = () => {
  return (
    <>
      <Header/>
        <h1>Hello World</h1>
      <Footer/>
      <GlobalStyle />
    </>
  );
}

export default App;
