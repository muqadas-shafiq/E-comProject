import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Addproduct = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [ID, setID] = useState(""); 

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const ID = userId?._id;
    setID(ID);
    console.log(ID);
  }, []);

  const addproduct = async () => {
    if (ID) {
      axios.post("http://localhost:5000/add", { name, price, ID, company })
        .then(res => {
          console.log(res.data);
          navigate('/productlist')
        })
        .catch(err => console.log(err));
    } else {
      console.log("something went wrong");
    }
  }

  return (
    <div className='register'>
   <div className="inputs">
   <h1 className='text'>Addproduct</h1>
   <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type='text' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type='text' placeholder='Enter company' value={company} onChange={(e) => setCompany(e.target.value)} />
      <button type='button' onClick={addproduct}>Addproduct</button>
   </div>
    </div>
  );
};

export default Addproduct;
