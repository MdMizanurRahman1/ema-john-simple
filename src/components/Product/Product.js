import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    //const { product, handleAddToCart } = props;
    const { name, seller, price, ratings, img } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>

    );
};

export default Product;