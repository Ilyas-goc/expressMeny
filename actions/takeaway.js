import { TAKE_AWAY} from './types'

export const takeaway = (button, name) =>{
    return (dispatch) => {
        console.log("The action is: ", button);
        console.log("Where: ", name)
        dispatch({
            type: TAKE_AWAY,
            payload: button
        })
    }
}