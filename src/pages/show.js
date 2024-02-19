import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// const token = require('./login.js');
// import 'jsonwebtoken';
// import { JsonWebTokenError } from 'jsonwebtoken';
// import useNavigate from 'react-router-dom'


function logoutuser(){
    window.location.href='/'
}

// function shareurl(id){
//     alert(id)
// }

function Show() {
    const [msg, setmsg] = useState([]);
    const [loading, setloading] = useState(false);
    // const history = useHistory()
    
    const userId = useParams();
    
    useEffect(() => {
        // const navigate = useNavigate()
        let token = localStorage.getItem('token')
        // console.log(token)
        if(token){
            setloading(true);///mesgs
            // console.log(userId.id)
            axios.get(`http://localhost:3000/mesgs/${userId.id}`)
            .then((response)=>{
                // console.log(response)
                setmsg(response.data.data);
                setloading(false);
                token = localStorage.removeItem('token')
            })
            .catch((error)=>{
                console.log(error);
                setloading(false);
            })
            
        }else{
            window.location.href='/'
        }
    }, [userId])


  return (
    <div>
        <div className='flex justify-center items-center pt-10'>
        <input className='px-8 py-3 mr-2 bg-red-400 rounded-lg font-semibold' type='submit' onClick={logoutuser} value='logout'/>
        {/* <input className='px-8 py-3 ml-2 bg-red-400 rounded-lg font-semibold' type='submit' onClick={ shareurl(userId.id) } value='share url'/> */}
        {loading? (
            <h1>no data</h1>
        ):(
        <div>share your link to get messages :<br/>http://localhost:3001/msg/{userId.id}</div>
        )}
        </div>
        {loading? (
            <h1 className='flex justify-center items-center pt-80 z-10'>No data found</h1>
        ):(
        <div className='flex flex-row flex-wrap gap-10 items-center justify-center pt-20'>
            {msg.map((msg)=>(
                <div className='flex flex-col justify-center items-center bg-red-400 py-8 px-10 rounded-md'>
                    <div className='text-3xl font-bold'>
                        {msg.Message}
                    </div>
                    <div className='pt-3'>
                        {msg.createdAt}
                    </div>
                </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default Show