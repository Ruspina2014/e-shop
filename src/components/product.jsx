import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import Description from './Description';
import cart from '../assets/cart1.png';
import Data from './Data';
import { CartContext } from './CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(CartContext);

  const product = Data.find((item) => item.id === parseInt(id));

  // Set default size only if the category is not "Bracelet" or "Tote Bag"
  const [size, setSize] = useState(product.category === "Bracelet" || product.category === "Tote Bag" ? null : product.sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = () => {
    setLoading(true);
    const cartItem = {
      id: product.id,
      name: product.name,
      mainImage: product.images[0],
      size,
      price: product.price,
      quantity: 1,
    };

    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    let updatedCartItems;
    if (existingItemIndex >= 0) {
      // If it exists, update the quantity
      updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      // If it does not exist, add the new item
      updatedCartItems = [...cartItems, cartItem];
    }

    // Save updated cart items to both context and local storage
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    // Simulate a delay for the spinner
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="product-container">
        <div className="product-image-container">
          <div className="product-image1">
            <img src={product.images[currentImageIndex]} alt="Product" />
          </div>
          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageClick(index)}
                className={currentImageIndex === index ? 'active-thumbnail' : ''}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <p className="Product-name">
            {product.name} {product.description}
          </p>
          <div className="product-meta">
            <div className='flex'>
              <span><span className='meta-name'>Sku:</span> {product.sku}</span>
              <span className='meta-name'>Brand: {product.brand}</span>
            </div>
            <div className='flex'>
              <span><span className='meta-name'>Availability:</span><span className="availability"> {product.availability}</span></span>
              <span className='meta-name'>Category: {product.category}</span>
            </div>
          </div>
          <p className="price">{product.price} DT <span className="discount">{product.discountPrice}DT</span>{product.discount ? <span className="off">20% OFF</span> : null}</p>
          <hr style={{ borderColor: '#E4E7E9', borderWidth: '0.5px' }} />
          <div className='selectors'>
            {(product.category === "Bracelet" || product.category === "Tote Bag") ? null :
              <div className="size-selection">
                <p>Size</p>
                <select className='size' value={size} onChange={(e) => setSize(e.target.value)}>
                  {product.sizes.map((sizeOption) => (
                    <option key={sizeOption} value={sizeOption}>
                      {sizeOption}
                    </option>
                  ))}
                </select>
              </div>
            }
          </div>
          <button
            className={`add-to-cart`}
            onClick={handleAddToCart}
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : 'ADD TO CART'}
            {!loading && <img src={cart} alt="cart" style={{ width: "24px", marginLeft: "5px" }} />}
          </button>
          
          <h5 className='garantee'>100% Guarantee Safe Checkout</h5>
        </div>
      </div>
      <Description description={product.descriptionLong} />
    </div>
  );
}

export default ProductDetails;
