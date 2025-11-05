import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype"


const initObj = {
    loading:true,
    userobj:{},
    userlist:[],
    error:''
}

export const Reducer = (state=initObj,action) => {
        switch(action.type){
            case MAKE_REQUEST: return {
                ...state,
                loading:true
            }
            case FAIL_REQUEST:return {
                 ...state,
                loading:false,
                error:action.payload
            }

            case GET_USER_LIST: return{
                loading:false,
                userlist:action.payload,
                userobj:{}
            }

            case DELETE_USER:return {
                ...state,
                loading:false
            }

            case ADD_USER : return {
                ...state,
                loading:false
            }

            case UPDATE_USER : return {
                ...state,
                loading:false
            }

            case GET_USER_OBJ : return {
                 ...state,
                loading:false,
                userobj:action.payload
            }
            default:return state
        }
}