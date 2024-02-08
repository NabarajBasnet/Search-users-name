import './App.css'

import { Searchdata } from './components/Searchdata'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Searchdata/>}/>
    </Routes>
    </>
  )
}

export default App
