import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function manageData() {
    axios.post("http://localhost:5000/register", { name, email, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    
    <div className='register'>
      <h1>signup</h1>
      <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='button' onClick={manageData}>SignUp</button>
    </div>
  );
};

export default Signup;
