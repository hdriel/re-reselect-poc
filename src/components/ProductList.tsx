import React from 'react';
import { connect } from 'react-redux';
import Product from './product/Product.connector';
import { getProductIdsSelector } from '../store/products.selectors';

interface ProductConnectorProps {
    productIds: string[];
}

const ProductList: React.FC<ProductConnectorProps> = ({ productIds }) => {
    console.log('ProductList render');

    return (
        <div className="products-list">
            {productIds.map((productId) => (
                <Product key={productId} id={productId} />
            ))}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    productIds: getProductIdsSelector(state),
});

export default connect(mapStateToProps)(ProductList);
