import React from 'react';
import { connect } from 'react-redux';
import { addProductsAction } from '../store/products.slice';
import { getTotalProductsSelector } from '../store/products.selectors';

interface TitleProps {
    totalProducts: number;
    updateStore: () => void;
}

const Title: React.FC<TitleProps> = ({ totalProducts, updateStore }) => {
    console.log('Title render');

    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: '40px' }}>Product List ({totalProducts})</h1>
            <button
                onClick={() => updateStore()}
                style={{ height: 'max-content', backgroundColor: '#0d011f', color: 'white' }}
            >
                ADD
            </button>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    totalProducts: getTotalProductsSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    updateStore: () => {
        // @ts-ignore
        dispatch(addProductsAction());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
