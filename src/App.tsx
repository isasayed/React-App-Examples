import { useState, useEffect } from 'react';
import Header from './Site/Header'
import Nav from './Site/Nav'
import Home from './Site/Home'
import NewPost from './Post/NewPost'
import PostDetail from './Post/PostDetail'
import About from './Site/About'
import Missing from './Site/Missing'
import Footer from './Site/Footer'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Header
          title="React Blog App" />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
      </Router>     
    </div>
  );
}

export default App;
