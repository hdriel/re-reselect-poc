import React from 'react';
import './product.css';

interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    updatePrice: (id: string, price: number) => void;
}

const Product: React.FC<ProductProps> = ({ id, image, name, price, updatePrice }) => {
    return (
        <div className="product">
            <div className="details">
                <div className="image-wrapper">
                    <img src={image} width={150} height={150} className="image" alt="product-image" />
                </div>
                <div className="data-wrapper">
                    <span className="id">ID: {id}</span>
                    <span className="name">Name: {name}</span>
                    <span className="price">Price: {price}</span>
                </div>
            </div>
            <button className="action" onClick={() => updatePrice(id, price + 1)}>
                Update Price
            </button>
        </div>
    );
};

export default Product;
