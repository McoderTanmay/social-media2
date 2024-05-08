import React, { useState } from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/RegisterPage/Login'
import SignUp from './Pages/RegisterPage/SignUp'
import { baseUrl, postRequest } from './utils/services'


const App = () => {
  // const [friendProfile,setFriendsProfile] =useState([])
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [uid, setUid] = useState(null);
  //Sign UP
  const signupHandeler = async(data)=>{
    const cred = {
      user_name :data.username,
      email : data.email,
      password : data.password
    }
    const response = await postRequest(`${baseUrl}accounts/signUp`, cred);
    if (!response.ok) {
      setError(response);
    }
  }
  //Login
  const loginHandeler =async (data)=>{
    const response = await postRequest(`${baseUrl}accounts/login`, data);
    if (response.code!==200) {
      setError(response);
    }
    else{
      setIsLogin(true);
      setUid(response.user)
    }
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Home data={uid} /> } />

        <Route path='/' element={<Login onLogin={loginHandeler} isLogin={isLogin}/>} />

        <Route path='/signup' element={<SignUp onSignup={signupHandeler} />} />
        
      </Routes>
    </div>
  )
}

export default App
