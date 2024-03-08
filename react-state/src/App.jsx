import './App.css'
import { CounterComp } from './components/counterComp'
import { DisplayCounter } from './components/displayCount'
import { LocalStorage } from './components/localStorage'

function App() {
  return (
    <>
      {/* <LocalStorage /> */}
      <CounterComp />
      <DisplayCounter />
    </>
  )
}

export default App
