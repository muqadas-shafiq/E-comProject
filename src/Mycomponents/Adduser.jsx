import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser , removeUser} from '../redux/userReducer/userSlice';
import axios from 'axios';

const AddUser = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.products); 

  useEffect(() => {
    getProducts();   
  }, []);

  
  const getProducts = async () => {
    try {
      let result = await fetch("http://localhost:5000/user");
      result = await result.json();
      dispatch(setUser(result)); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const productDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deleteUser/${id}`);
      dispatch(removeUser(id)); // Dispatch the action to remove the product from Redux state
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='product'>
      <h1>Add User</h1>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {
        products && products.length > 0 ? (
          <>
            {products.map((item, index) => (
              <ul key={item._id}>
                <li>{index + 1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>
                  <button onClick={() => productDelete(item._id)}>Delete</button>
                </li>
              </ul>
            ))}
          </>
        ) : (
          <div>Product not found</div>
        )
      }
    </div>
  );
};

export default AddUser;
