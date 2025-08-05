import React from 'react';
import "./App.css"
import Addemployee from './components/Addemployee.jsx';
import Editemployee from './components/Editemployee.jsx';
import Allemployees from './components/Allemployees.jsx';
import { Route, Routes, Link } from 'react-router-dom';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Employee Management System</h1>
      <nav className="flex align-baseline justify-center bg-white shadow mb-6 h-10">
      <Link className='mx-10 font-bold' to="/Allemployees">All Employees</Link>
      <Link className='mx-10 font-bold' to="/Addemployee">Add Employee</Link>
      </nav>
      <Routes className="min-h-screen bg-gray-100">
      <Route path='/' element={<Allemployees/>}/>
      <Route path='/Allemployees' element={<Allemployees/>}/>
      <Route path='/Editemployee/:id' element={<Editemployee/>}/>
      <Route path='/Addemployee' element={<Addemployee/>}/>
      </Routes>
      <p className="text-2xl font-bold text-center text-blue-600">© 2025 Employee Manager. All rights reserved.</p>
    </div>
  )
}

export default App
