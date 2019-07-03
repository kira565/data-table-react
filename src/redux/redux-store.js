import {createStore, combineReducers} from "redux";
import tableReducer from "./table-reducer";
import thunkMiddleware from 'redux-thunk';
import applyMiddleware from "redux/src/applyMiddleware";


let reducers = combineReducers({
    dataBaseTable: tableReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store