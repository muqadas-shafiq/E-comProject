import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, removeProduct } from '../redux/ProductReducer/ProductSlice'; // import the action
import axios from 'axios';

const Productlist = () => {
  // Use Redux hooks instead of useState
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Productlist.products); // Access products from Redux store

  useEffect(() => {
    getproduct();   
  }, []);

  // Fetch the list of products and dispatch them to Redux
  const getproduct = async () => {
    try {
      let result = await fetch("http://localhost:5000/product");
      result = await result.json();
      dispatch(setProduct(result)); // Dispatch the action to store the products in Redux
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Delete product functionality
  const productDelete = async (id) => {
    try {
      const deleteProduct = await axios.delete(`http://localhost:5000/product/${id}`);
      console.log(deleteProduct.data);
      dispatch(removeProduct(id)); // Dispatch the action to remove the product from Redux state
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='product'>
      <h1>ProductList</h1>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {
        product && product.length > 0 ? (
          <>
            {product.map((item, index) => (
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

export default Productlist;
