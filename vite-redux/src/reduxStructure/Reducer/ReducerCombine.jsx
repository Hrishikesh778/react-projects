import { combineReducers } from "redux";
import { taskcounter, taskTodo } from "./Reducer";


export let combine = combineReducers({taskTodo,taskcounter})