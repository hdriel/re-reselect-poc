import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {getProductByIdSelector} from "../../store/products.selectors";
import type {IProduct} from "../../decs";
import {updateProductAction} from "../../store/products.slice";

interface ProductConnectorProps {
    id: string
    product: IProduct
    updatePrice: (productId: string , price: number)=>void
}

const ProductConnector: React.FC<ProductConnectorProps> = ({ id, product, updatePrice }) => {
    console.log('ProductConnector render', id)
    return <Product id={id} {...product} updatePrice={updatePrice} />
}

const mapStateToProps = (state, props) => ({
    product: getProductByIdSelector(state, props.id)
})

const mapDispatchToProps = (dispatch) => ({
    updatePrice: (productId: string , price: number) => {
        // @ts-ignore
        dispatch(updateProductAction({id: productId, price}));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductConnector);
