import { Routes, Route } from 'react-router-dom'
import {  useState } from 'react'

import { Header } from './components/Header'
import { PersonalInformation } from './components/PersonalInformation'
import { AdrressInformation } from './components/AdrressInformation'
import { AccessInformation } from './components/AccessInformation'

export function Register(){
  const [user,setUser] = useState({})

  function updateUser(data: object){
    setUser((prevUser) => ({...prevUser, ...data}))
  }

  return(
    <div className="register-container">
      <Header />
      <div className='register-content'>
        <Routes>
          <Route path='/' element={<PersonalInformation user= {user} updateUser = {updateUser}/>}/>
        </Routes>
        <Routes>
          <Route path='/teste' element={<AdrressInformation user= {user} updateUser = {updateUser}/>}/> {/*Se der f5 os dados sõa perdidos*/}
        </Routes>
        <Routes>
          <Route path='/teste2' element={<AccessInformation user={user} updateUser={updateUser}/>}/>
        </Routes>
      </div>
    </div>
  )
}