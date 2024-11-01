import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    axios.post("http://localhost:5000/login", {  email, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='login'>
      <h1>login</h1>
    
      <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='button' onClick={handleLogin}>logIn</button>
    </div>
  );
};

export default Login;
