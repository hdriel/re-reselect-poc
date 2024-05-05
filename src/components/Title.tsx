import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {addProductsAction} from '../store/products.slice';
import {getProductIdsSelector} from '../store/products.selectors';

interface TitleProps {
}

const Title: React.FC<TitleProps> = ({}) => {
    console.log('COMPONENT: Title render');

    const dispatch = useDispatch()
    // @ts-ignore
    const updateStore = () => dispatch(addProductsAction());

    const totalProducts = useSelector((state) => {
        console.log('USE_SELECTOR: ProductList');
        return getProductIdsSelector(state)
    }, shallowEqual);


    return (
        <div style={{display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1 style={{fontSize: '40px'}}>Product List ({totalProducts})</h1>
            <button
                onClick={() => updateStore()}
                style={{height: 'max-content', backgroundColor: '#0d011f', color: 'white'}}
            >
                ADD
            </button>
        </div>
    );
};


export default Title
