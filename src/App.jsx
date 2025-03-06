import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import HtmlPage from './components/HtmlPage'

function App() {


  return (
    <Layout>
      <Routes>
        <Route path="htmlpage" element={<HtmlPage/>} />
      </Routes>
    </Layout>
  )
}

export default App
