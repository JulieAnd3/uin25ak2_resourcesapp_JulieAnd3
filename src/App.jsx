import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import PageTitle from './components/PageTitle'
import { resources } from './assets/Resources'




function App() {


  return (
    <Layout >
      <Routes>
        <Route path=":slug" element={<PageTitle resources={resources}/>}/>
      </Routes>
    </Layout>
  )
}

export default App
