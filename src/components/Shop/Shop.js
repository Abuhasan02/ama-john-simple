import React ,{useEffect,useState} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product.';
import './Shop.css';


const Shop = () => {
const [products,setProducts] = useState([]);
const [cart,setCart] = useState([]);
const handleAddProduct = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
}
useEffect(()=>{
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
    return (
      <div className="shop-container">
        <div className="product-container">
          
            <ul>
                {
                products.map(pd=> <Product 
                    handleAddProduct={handleAddProduct}
                    product={pd}
                    >
                    </Product>)
                }
            </ul>
        </div>
        <div className="cart-container">
            {/* <h1>This is cart</h1>
            <h3>Order Summary: {cart.length}</h3> */}
            <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Shop;