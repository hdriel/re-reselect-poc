import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import PRODUCTS from '../mocks/products.json'
import type {IProduct} from "../decs";

let totalMockProducts = 1;

interface ProductState {
    products: IProduct[];
    lastUpdated: number;
}

const initialState: ProductState = {
    products: PRODUCTS.slice(0, totalMockProducts) as IProduct[],
    lastUpdated: 0
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts(state) {
            state.products.push(PRODUCTS[totalMockProducts++])
            state.lastUpdated = Date.now()
        },

        updateProduct(state, action: PayloadAction<any>) {
            const product = action.payload
            const findProducts = state.products.find(p => p.id === product.id)

            if(findProducts){
                Object.assign(findProducts, product)
            }
        },
    },
})

export const { updateProduct: updateProductAction,hasChanged: hasChangedAction, addProducts: addProductsAction } = productSlice.actions
export default productSlice.reducer