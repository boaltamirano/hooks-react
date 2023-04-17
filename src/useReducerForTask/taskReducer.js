export const taskReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[Task] Add Task':
            return [...initialState, action.payload]
        default:
            return initialState;
    }
}