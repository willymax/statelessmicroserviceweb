import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import Login from './components/Auth/Login'
import Patch from './components/Home/Patch'
function App() {
  const [token, setToken] = useState()

  if (!token) {
    return <Login setToken={setToken} />
  } else {
    return <Patch token={token} />
  }
}

export default App
