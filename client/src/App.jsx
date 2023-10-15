import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {

  return (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Users/>} />
      <Route path="/create" element={<CreateUser/>} />
      <Route path="/update/:id" element={<UpdateUser/>} />
     </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
