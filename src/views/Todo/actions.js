export const ActionType = {
    GET_TODOS_REQUEST: 'GET_TODOS_REQUEST',
    GET_TODOS_SUCCESS: 'GET_TODOS_SUCCESS',
    GET_TODOS_FAIL: 'GET_TODOS_FAIL',

    ADD_TODO_REQUEST: 'ADD_TODO_REQUEST',
    ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
    ADD_TODO_FAIL: 'ADD_TODO_FAIL',

    DELETE_TODO_REQUEST: 'DELETE_TODO_REQUEST',
    DELETE_TODO_SUCCESS: 'DELETE_TODO_SUCCESS',
    DELETE_TODO_FAIL: 'DELETE_TODO_FAIL',

    EDIT_TODO_REQUEST: 'EDIT_TODO_REQUEST',
    EDIT_TODO_SUCCESS: 'EDIT_TODO_SUCCESS',
    EDIT_TODO_FAIL: 'EDIT_TODO_FAIL'

}

export const getTodosRequest = () => {
    return {
        type: ActionType.GET_TODOS_REQUEST
    }
}

export const getTodosSuccess = (data) => {
    return {
        type: ActionType.GET_TODOS_SUCCESS,
        payload: data
    }
}
export const getTodosFail = (error) => {
    return {
        type: ActionType.GET_TODOS_FAIL,
        payload: error
    }
}

export const addTodoRequest = (newTodo) => {
    return {
        type: ActionType.ADD_TODO_REQUEST,
        payload: newTodo
    }
}

export const addTodoSuccess = (newTodo) => {
    return {
        type: ActionType.ADD_TODO_SUCCESS,
        payload: newTodo
    }
}

export const addTodoFail = (error) => {
    return {
        type: ActionType.ADD_TODO_FAIL,
        payload: error
    }
}

export const deleteTodoRequest = (id) => {
    return {
        type: ActionType.DELETE_TODO_REQUEST,
        payload: id
    }
}

export const deleteTodoSuccess = (id) => {
    return {
        type: ActionType.DELETE_TODO_SUCCESS,
        payload: id
    }
}

export const deleteTodoFail = (error) => {
    return {
        type: ActionType.DELETE_TODO_FAIL,
        payload: error
    }
}

export const editTodoRequest = (editTodo) => {
    return {
        type: ActionType.EDIT_TODO_REQUEST,
        payload: editTodo
    }
}

export const editTodoSuccess = (editTodo) => {
    return {
        type: ActionType.EDIT_TODO_SUCCESS,
        payload: editTodo
    }
}

export const editTodoFail = (error) => {
    return {
        type: ActionType.EDIT_TODO_FAIL,
        payload: error
    }
}


