export const taskReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[Task] Add Task':
            return [...initialState, action.payload];

        case '[Task] Delete Task':
            return initialState.filter( task => task.id !== action.payload);
            
        default:
            return initialState;
    }
}