import axios from 'axios';
import { loadProducts } from 'redux/actions';

async function getProducts(dispatch) {
  try {
    const response = await axios.get('http://localhost:8000/api/products');
    dispatch(loadProducts(response.data));
  } catch (error) {
    console.error(error);
  }
}

export default getProducts;
