import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MyForm() {
  const [Message, setMessage] = useState('');
  // const navigate = useNavigate
  const { id } = useParams()
  // console.log(id)

  const userId = id

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Message,
      userId
    }
    // console.log(data)
    axios.post(`http://localhost:3000/mesgs/${id}`, data)
    .then(()=>{
      alert('message send successfully')
      setMessage('')
    })
    .catch((error)=>{
      console.log(error)
      alert('error occured')
    })
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center pt-52'>
      <label className='flex flex-col justify-center items-center'>
        <p className='text-4xl font-bold'>Send me an anonymous message</p>
        <textarea className='my-8 border-2 w-[500px] h-[150px] rounded-lg p-2' type="text" name="Message" value={Message} onChange={e => setMessage(e.target.value)}></textarea>
      </label>
      <button className='px-8 py-3 bg-red-400 rounded-lg font-semibold' type="submit">Submit</button>
    </form>
  );
}

export default MyForm;