import { Routes, Route } from 'react-router-dom'
import {  useState } from 'react'

import { Header } from './components/Header'

export function Register(){
  const [user,setUser] = useState({})

  function updateUser(data: object){
    setUser((prevUser) => ({...prevUser, ...data}))
  }

  return(
    <div className="register-container">
      <Header />
      <div className='register-content'>
      </div>
    </div>
  )
}