import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function registeruse(){
  window.location.href='/register'
}

function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    async function loginuser(e){
        e.preventDefault();
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Email,
            Password,
          }),
        })

        const data = await response.json();
        // console.log(data)
        if(data.user){
          // Jwt.decode()
          const userss = jwtDecode(data.user, 'secret123')
          const id = userss.ID
          localStorage.setItem('token', data.user)
          // const token = data.user
          // module.exports = token
          alert('login successful')
          setEmail('')
          setPassword('')
          window.location.href=`/show/${id}`
        }else{
          alert('unsuccessful')
        }

    }

  return (
    <div>
      <h1 className='flex justify-center text-center items-center font-semibold text-3xl py-10 pt-32'>Login</h1>
        <form className='flex flex-col justify-center align-middle content-center items-center gap-8' onSubmit={loginuser}>
            <input className='px-3 py-2 w-80 rounded-lg' type='email' value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input className='px-3 py-2 w-80 rounded-lg' type='password' value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
            <div>
              <button className='px-8 py-3 mr-2 bg-red-400 rounded-lg font-semibold' type='submit'>Submit</button>
              <button className='px-8 py-3 mr-2 bg-red-400 rounded-lg font-semibold' onClick={registeruse} type='submit'>Get your link</button>
            </div>
        </form>
    </div>
  )
}

export default Login