import React from 'react'
import NavBar from './components/layout/NavBar'
import Hero from './components/sections/Hero'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh'>
      <NavBar />
      <div>
        <Hero />
      </div>
    </div>
  )
}

export default App