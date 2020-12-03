import { GET_NUMBERS_BASKET } from './types'

export const getNumber = () =>{
    return (dispatch) => {
        console.log("gettink");
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    }
}