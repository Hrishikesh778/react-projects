import { useReducer } from "react";

function UseReducer(){

    function reducer(state,action){
        console.log("state =>",state)
        console.log("action =>",action)
        switch (action.type) {
            case 'inc':
                return state+1
                break;
            case 'dec':
                let data = state > 0 ? state-1 : 0
                return data
                break;
        
            default:
                return state
        }
    }


    let [state,dispatch]=useReducer(reducer,0)

    return(
        <>
       <div>useReducer</div>
       <button onClick={()=>{dispatch({type:"inc"})}}>Inc</button>
       {state}
       <button onClick={()=>{dispatch({type:"dec"})}}>Inc</button>
        </>
    )
}


export default UseReducer