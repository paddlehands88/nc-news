import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Search from "./components/Search";
import ListArticles from './components/ListArticles';

import './App.css'

function App() {
  

  return (
    <>
      <h3>App component</h3>
      <Header />
      <Search />
      <Routes>
        <Route path="/articles" element={<ListArticles />}/>
        <Route path="/" element={<ListArticles />}/>
            
      </Routes>
        
    </>
  )
}

export default App;
