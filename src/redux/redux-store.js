import {createStore, combineReducers} from "redux";
import tableReducer from "./table-reducer";
import thunkMiddleware from 'redux-thunk';
import applyMiddleware from "redux/src/applyMiddleware";
import { reducer as formReducer } from 'redux-form'
import {DATA_SAVE_SUCCESS} from './table-reducer'

let reducers = combineReducers({
    dataBaseTable: tableReducer,
    form: formReducer.plugin({
        addForm: (state, action) => {
            switch (action.type){
                case DATA_SAVE_SUCCESS: {
                    return undefined;
                }
                default: return state
            }
        }
    })
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store