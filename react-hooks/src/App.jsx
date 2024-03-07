import './App.css'
import { ComponentCallback } from './components/callback'
import { ComponentCounter } from './components/counter'
import { ComponentMemo } from './components/memo'
import { ComponentReducer } from './components/reducer'
import { ComponentRef } from './components/ref'
import { ComponenState } from './components/state'
import UserProvider from './context/user'

function App() {
  return (
    <>
      <UserProvider>
        {/* <ComponenState /> */}
        {/* <ComponentRef /> */}
        {/* <ComponentMemo /> */}
        {/* <ComponentReducer /> */}
        {/* <ComponentCallback /> */}
        <ComponentCounter />
      </UserProvider>
    </>
  )
}

export default App
