import {
    FETCH_ALL_TODOS,
    FETCH_TODO,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO
} from './types'

const fetchAllToDos = (allToDos) => {
    return {
        type: FETCH_ALL_TODOS,
        payload: allToDos
    }
}

const createToDo = (toDo) => {
    return {
        type: CREATE_TODO,
        payload: toDo
    }
}

const editToDo = (toDo) => {
    return {
        type: CREATE_TODO,
        payload: toDo
    }
}

const deleteToDo = (toDo) => {
    return {
        type: CREATE_TODO,
        payload: toDo
    }
}