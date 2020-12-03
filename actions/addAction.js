import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = (productName, category) => {
    return (dispatch) => {
        console.log("Product", productName);
        console.log("Category", category);
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName, category
        });
    }
}