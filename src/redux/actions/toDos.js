import {
    FETCH_ALL_TODOS,
    FETCH_TODO,
    CREATE_TODO,
    TOGGLE_TODO,
    DELETE_TODO
} from './types'

export const fetchAllToDos = (allToDos) => {
    return {
        type: FETCH_ALL_TODOS,
        payload: allToDos
    }
}

export const createToDo = (toDo) => {
    return {
        type: CREATE_TODO,
        payload: toDo
    }
}

export const toggleToDo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}