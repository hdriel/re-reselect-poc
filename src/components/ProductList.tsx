import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import Product from './product/Product.connector';
import {getProductIdsSelector} from '../store/products.selectors';

interface ProductConnectorProps {
}

const ProductList: React.FC<ProductConnectorProps> = ({}) => {
    console.log('COMPONENT: ProductList[] render');

    const productIds = useSelector((state) => {
        console.log('USE_SELECTOR: ProductList[]');
        return getProductIdsSelector(state)
    }, shallowEqual);

    return (
        <div className="products-list">
            {productIds.map((productId) => (
                <Product key={productId} id={productId}/>
            ))}
        </div>
    );
};


export default ProductList
