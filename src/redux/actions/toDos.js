import {
    FETCH_ALL_TODOS,
    FETCH_TODO,
    CREATE_TODO,
    EDIT_TODO,
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

export const editToDo = (toDo) => {
    return {
        type: CREATE_TODO,
        payload: toDo
    }
}

export const deleteToDo = (toDo) => {
    return {
        type: CREATE_TODO,
        payload: toDo
    }
}