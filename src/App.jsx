import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Test from './components/Test'

function App() {


  return (
    <Layout>
      <Routes>
        <Route to="home" element={<Home/>}/>
        <Route to="home" element={<Test/>}/>
      </Routes>
    </Layout>
  )
}

export default App
