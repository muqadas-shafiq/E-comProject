import React from 'react';

import AddProduct from './Mycomponents/Addproduct';
import Login from './Mycomponents/Login';
import Logout from './Mycomponents/Logout';
import Signup from './Mycomponents/Signup';
import Update from './Mycomponents/Update';
import Footer from './Mycomponents/Footer';
import PrivateComponent from './Mycomponents/Privatecomponent';
import Nav from './Nav';
import Productlist from './Mycomponents/Productlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Mycomponents/Home';
import Adduser from './Mycomponents/Adduser';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        
          
          <Route element={<PrivateComponent />}>
          
            <Route path='/' element={<Home />} />
            <Route path='/productlist' element={<Productlist/>}></Route>
            <Route path='/adduser' element={<Adduser></Adduser>}></Route>
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/update' element={<Update />} />
    
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
