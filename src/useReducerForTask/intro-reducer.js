const initalState = [{
    id  : 1,
    toDo: 'Recolectar la piedra del Alma',
    done: false
}];

const toDoReducer = ( state = initalState, action = {} ) => {

    if(action.type === '[ToDo] add toDo') {
        return [...state, action.payload]
    }

    return state;
}

let toDos = toDoReducer();

const newToDo = {
    id  : 2,
    toDo: 'Recolectar la piedra del poder',
    done: false,
}

const addToDoAction = {
    type: '[ToDo] add toDo',
    payload: newToDo,
}

toDos = toDoReducer( toDos, addToDoAction);

console.log(toDos);