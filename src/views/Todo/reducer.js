const { ActionType } = require("./actions");

const initialState = {
    todos: [],
    loading: false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_TODOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionType.GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case ActionType.GET_TODOS_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        case ActionType.ADD_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionType.ADD_TODO_SUCCESS:
            const newTodos = [...state.todos];
            const newTodo = {
                id: action.payload.id,
                name: action.payload.name
            }
            newTodos.push(newTodo)
            return {
                ...state,
                todos: newTodos
            }
        case ActionType.ADD_TODO_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case ActionType.DELETE_TODO_FAIL:
            return {
                ...state
            }
        case ActionType.DELETE_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionType.DELETE_TODO_SUCCESS:
            const deletedTodos = state.todos.filter(todo => todo.id !== action.payload.id);
            return {
                ...state,
                todos: deletedTodos,
                loading: false
            }
        case ActionType.EDIT_TODO_REQUEST:
            return {
                ...state
            }

        default: return state;
    }
}

export default todoReducer;