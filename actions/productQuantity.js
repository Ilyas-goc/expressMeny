import { INCREASE_QUANTITY, DECREASE_QUANTITY} from './types'

export const productQuantity = (action, name) =>{
    return (dispatch) => {
        console.log("The action is ", action);
        console.log("The product name is ", name)
        dispatch({
            type: action == 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}