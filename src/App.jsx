import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Search from "./components/Search";
import ListArticles from './components/ListArticles';
import ViewArticle from './components/ViewArticle';

import './App.css'

function App() {


  return (
    <>
    
      <Header />
      <Search />
      <Routes>
        <Route path="/articles" element={<ListArticles />}/>
        <Route path="/" element={<ListArticles />}/>
        <Route path="/articles/:article_id" element={<ViewArticle />} />
            
      </Routes>
        
    </>
  )
}

export default App;
