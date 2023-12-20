import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from '../pages/addUser'
import GetUser from '../pages/getUser'
export default function Index() {
  return (
    <Routes>
        <Route path='/' element={<GetUser/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
    </Routes>
  )
}
