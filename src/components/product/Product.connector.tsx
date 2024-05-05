import React from 'react';
import { shallowEqual, useDispatch, useSelector} from 'react-redux';
import Product from './Product';
import { getProductByIdSelector } from '../../store/products.selectors';
import { updateProductAction } from '../../store/products.slice';

interface ProductConnectorProps {
    id: string;
}

const ProductConnector: React.FC<ProductConnectorProps> = ({ id }) => {
    console.log('COMPONENT: ProductConnector render', id);

    const product = useSelector((state) => {
        console.log('USE_SELECTOR: ProductConnector');
        // @ts-ignore
        return getProductByIdSelector(state, id)
    }, shallowEqual);

    const dispatch = useDispatch();
    // @ts-ignore
    const updatePrice = (productId: string, price: number) => dispatch(updateProductAction({ id: productId, price }));

    return <Product id={id} {...product} updatePrice={updatePrice} />;
};

export default ProductConnector
