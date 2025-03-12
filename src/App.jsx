import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'


function App() {


  return (
    <Layout>
      <Routes>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </Layout>
  )
}

export default App
