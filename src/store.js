import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './home/reducers'

const initialState = {};
if(localStorage.getItem('cartItems')){
    initialState.cart = { tshirts: JSON.parse(localStorage.getItem('cartItems'))}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk)));