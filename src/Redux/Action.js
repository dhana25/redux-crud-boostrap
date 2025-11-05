import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype"
import axios from 'axios';

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}


export const failRequest = (error) => {
    return {
        type: FAIL_REQUEST,
        payload: error
    }
}

export const getUserlist = (userdata) => {
    return {
        type: GET_USER_LIST,
        payload: userdata
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

export const updateuser = () => {
    return {
        type:UPDATE_USER
    }
}

export const getUserobj = (userobjdata) => {
    return {
        type:GET_USER_OBJ,
        payload:userobjdata
    }
}
export const fetchUserlist = () => {
    return (dispatch) => {
        dispatch(makeRequest())
        axios.get('http://localhost:8000/user').then((rep) => {
            const userlist = rep.data
            dispatch(getUserlist(userlist))
        }).catch((err) => {
            dispatch(failRequest(err.message))
        })
    }
}

export const removeUser = (id) => {
    return (dispatch) => {
        dispatch(makeRequest())
        axios.delete('http://localhost:8000/user/' + id).then((rep) => {
            dispatch(deleteUser())
        }).catch((err) => {
            dispatch(failRequest(err.message))
        })
    }
}

export const adduser = (udata) => {
    return (dispatch) => {
        dispatch(makeRequest())
        axios.post('http://localhost:8000/user', JSON.stringify(udata),
            { headers: { 'Content-Type': 'application/json' } }).then((rep) => {
                dispatch(addUser())
            }).catch((err) => {
                dispatch(failRequest(err.message))
            })
    }
}

export const edituser  = (udata,id) => {
    return (dispatch) => {
        dispatch(makeRequest())
        axios.put('http://localhost:8000/user/'+id,udata).then((rep) => {
            dispatch(updateuser())
        }).catch((err) => {
            dispatch(failRequest(err.message))
        })
    }
}

export const fetchgetuserobj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest())
        axios.get('http://localhost:8000/user/'+id).then((rep) => {
            const listdata = rep.data
            dispatch(getUserobj(listdata))
        }).catch((err) => {
            dispatch(failRequest(err.message))
        })
    }
}