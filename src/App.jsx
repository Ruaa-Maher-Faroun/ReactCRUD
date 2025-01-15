import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './components/users/Users'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UpdateUser from './components/updateUser/UpdateUser'
import CreateUser from './components/createUser/CreateUser'

export default function App() {
  return (
    <>
    <Navbar />
    <div className="container">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/details/:id" element={<UpdateUser />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
      <Footer />
    </div>
    </>
  )
}
