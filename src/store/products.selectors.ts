// https://github.com/reduxjs/reselect/tree/v4.0.0#sharing-selectors-with-props-across-multiple-component-instances
import {createSelector} from 'reselect';
// https://github.com/toomuchdesign/re-reselect
import {createCachedSelector, FifoObjectCache, LruObjectCache} from 're-reselect';

// without extra reselect
export const getTotalProductsSelector = (state) => {
    console.log('SELECTOR: getTotalProductsSelector called');
    return state.products.products.length;
}

// original
// export const getProductIdsSelector = (state) => {
//      console.log('SELECTOR: getProductIdsSelector called');
//      state.products.products.map((p) => p.id);
// }

// with reselect caching
export const getProductIdsSelector = createSelector(
    [state => state.products.products],
    products => {
        console.log('SELECTOR: getProductIdsSelector called');
        return products.map(p => p.id);
    }
);

// original
// export const getProductByIdSelector = (state, productId) => {
//     console.log('SELECTOR: getProductByIdSelector called', productId);
//     const product = state.products.products.find(p => p.id === productId);
//     return product;
// }

// with re-reselect caching
export const getProductByIdSelector = createSelector(
    [(state, productId) => state.products.products, (state, productId) => productId],
    (products, productId) => {
        console.log('SELECTOR: getProductByIdSelector createSelector called', productId);
        return products.find(p => p.id === productId)
    }
)

// with re-reselect caching
// export const getProductByIdSelector = createCachedSelector(
//     [(state, productId) => state.products.products, (state, productId) => productId],
//     (products, productId) => {
//         console.log('SELECTOR: getProductByIdSelector createCachedSelector called', productId);
//         return products.find((p) => p.id === productId);
//     }
// )((state, productId) => productId);
// )({
//     keySelector: (state, productId) => productId,
//     cacheObject: new FifoObjectCache({cacheSize: 5})
// })
