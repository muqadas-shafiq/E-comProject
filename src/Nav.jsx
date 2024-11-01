import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth= localStorage.getItem("user");
  const navigate= useNavigate();
  const logout= ()=>{
    localStorage.removeItem('user');
    navigate('/login');
  }
  return (
    <div className='nav-li'>
      {auth?
       <ul className='nav-ul '>
           <li> <Link className='link' to={'/'}>Home</Link></li>
           <li> <Link className='link' to={'/Addproduct'}>Addproduct</Link></li>
           <li> <Link className='link' to={'/update'}>Update</Link></li>
          <li> <Link className='link' to={'/productlist'}>productlist</Link></li>
          <li> <Link className='link' to={'/adduser'}>Adduser</Link></li>
          <li><p className='link' onClick={logout}>logout</p></li>
           
       </ul>   
        :
       <ul className='nav-ul nav-right' >

           <li> <Link className='link' to={'/signup'} >SignUp</Link> </li>
           <li> <Link className='link' to={'/login'}>login</Link></li>
       </ul>
}

    </div>
  )
}

export default Nav