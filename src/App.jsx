import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className="flex flex-col text-2xl md:flex gap-10 md:gap-6 p-4 md:p-5 bg-[#522546] min-h-screen text-white overflow-y-auto">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App