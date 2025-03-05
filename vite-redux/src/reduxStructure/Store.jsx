import { createStore } from "redux";
import { combine } from "./Reducer/ReducerCombine";


export let store=createStore(combine)
console.log(store,"store")