import React from 'react';
import Header from './Site/Header'
import Content from './Site/Content'
import Footer from './Site/Footer'
import './App.css';

function App() {

  return (
    <div className="App">
      <Header
        title="React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
