import todoReducer from "../../views/Todo/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer