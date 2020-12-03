import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, TAKE_AWAY } from "../actions/types";
import firebase from 'firebase'
import { takeaway } from "../actions/takeaway";
import { combineReducers } from "redux";

const firebaseConfig = {
    apiKey: "AIzaSyAPwEvCUsc6icKaQ201gYwH7TOhHSBIroI",
    authDomain: "android-sis.firebaseapp.com",
    databaseURL: "https://android-sis.firebaseio.com",
    projectId: "android-sis",
    storageBucket: "android-sis.appspot.com",
    messagingSenderId: "286934101745",
    appId: "1:286934101745:web:e284e3190c3b2088f5c350",
    measurementId: "G-0817GZTXFP"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var test = []
var testinkono = []

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    takeAway: false,
    categories: []
}
const myItem = firebase.database().ref("categories")
myItem.once("value", datasnap => {
    console.log(initialState)
    test = datasnap.val()
    initialState.categories = test
    console.log(test)
    console.log(initialState)
})


export default (state = initialState, action) => {
    var newcat = [];
    var categoryIndex;
    var dataIndex;
    console.log(state)
    initialState.categories.map((name, index) => {
        console.log("InitalState.categories.map name:", name.title)
        if (name.title == action.category) {
            categoryIndex = index
            name.data.map((_name, _index) => {
                if (_name.title == action.payload) {
                    dataIndex = _index
                    console.log(initialState.categories[categoryIndex].data[dataIndex])
                }
            })
        }
        console.log(categoryIndex)
        console.log(dataIndex)
    })


    console.log(initialState)

    let productSelected = ""
    var categoryCopy;
    var take;

    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            console.log(initialState)
            productSelected = { ...state.categories[categoryIndex].data[dataIndex] }
            categoryCopy = { ...state.categories }
            categoryCopy[categoryIndex].data[dataIndex].numbers += 1;
            categoryCopy[categoryIndex].data[dataIndex].inCart = true;
            productSelected.numbers += 1;
            productSelected.inCart = true;
            initialState.categories.map((name, index) => {
                name.data.map((_name, _index) => {
                    if (_name.inCart) {
                        newcat.push(_name)
                    }
                })
            })

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.categories[categoryIndex].data[dataIndex].price,
                categories: categoryCopy,
                newcat: newcat


            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:


            productSelected = { ...state.categories[productIndex] }
            productSelected.numbers += 1;
            if (productSelected.numbers == 0) {
                productSelected.inCart = false
            }
            return {
                ...state,
                cartCost: state.cartCost + state.categories[productIndex].price,
                basketNumbers: state.basketNumbers + 1,
                categories: {
                    ...state.categories,
                    [productIndex]: productSelected
                }
            }
        case DECREASE_QUANTITY:



            productSelected = { ...state.categories[productIndex] }
            productSelected.numbers -= 1;
            if (productSelected.numbers == 0) {
                productSelected.inCart = false
            }
            return {
                ...state,
                cartCost: state.cartCost - state.categories[productIndex].price,
                basketNumbers: state.basketNumbers - 1,
                categories: {
                    ...state.categories,
                    [productIndex]: productSelected
                }
            }
        case TAKE_AWAY:
            console.log(action.payload)
            take = action.payload
            return {
                ...state,
                takeAway: action.payload,
                categories: {
                    ...state.categories,
                }
            }
        default:
            return state;

    }

}