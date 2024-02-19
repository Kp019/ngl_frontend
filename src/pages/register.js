import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function Register() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    async function registerUser(e){
        e.preventDefault()
        const data = {
          Name,
          Email,
          Password,
        }
        axios.post('http://localhost:3000/register',data)
        .then(()=>{
          alert('registration successfully')
          setName('')
          setEmail('')
          setPassword('')
          window.location.href='/'
        })
        .catch((error)=>{
          console.log(error)
          alert('error occured')
        })
    }

  return (
    <div>
    <h1 className='flex justify-center text-center items-center font-semibold text-3xl py-10 pt-32'>Register</h1>
        <form className='flex flex-col justify-center align-middle content-center items-center gap-8' onSubmit={registerUser}>
            <input className='px-3 py-2 w-80 rounded-lg' type='text' value={Name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required/>
            <input className='px-3 py-2 w-80 rounded-lg' type='email' value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
            <input className='px-3 py-2 w-80 rounded-lg' type='password' value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required/>
            <button className='px-8 py-3 mr-2 bg-red-400 rounded-lg font-semibold' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register