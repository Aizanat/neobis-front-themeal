import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MealDay from './components/MealDay'
import MealDetails from './components/MealDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MealDay />} />
        <Route path="/details/:id" element={<MealDetails />} />
      </Routes>
    </div>
  )
}

export default App
