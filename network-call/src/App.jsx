import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UserComponent } from './components/user'
import { RegisterComp } from './components/register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserComponent />} />
        <Route path='/register' element={<RegisterComp />} />
      </Routes>
    </>
  )
}

export default App
