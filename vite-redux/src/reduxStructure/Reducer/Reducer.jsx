let intialState = 0
let todo = []

export const taskcounter = (state = intialState, action) => {
    switch (action.type) {
        case 'inc':
            return state + 1
            break;

        case 'dec':
            return state - 1
            break

            default:
                return state


    }
}

export let taskTodo = (state = todo, action) =>{
    switch (action) {
        case "AddTask":
            return []
            break;
        case "deleteTask":
            return []
            break;
    
        default:
            return state ;
    }
}