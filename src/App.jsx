import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Newsletter } from './Newsletter.jsx'

function App() {

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{color: 'white'}}>Vite + React</h1> */}
      <Newsletter />
    </>
  )
}

export default App
