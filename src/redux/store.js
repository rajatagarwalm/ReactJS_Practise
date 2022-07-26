import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./reducer/addTodoReducer";
import thunk from "redux-thunk";

export const store = createStore(addTodo, applyMiddleware(thunk));