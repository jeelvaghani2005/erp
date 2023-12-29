import { GET_SUBADMIN_LIST_ERROR, GET_SUBADMIN_LIST_PROGRESS, GET_SUBADMIN_LIST_SUCCESS, POST_SUBADMIN_ERROR, POST_SUBADMIN_PROGRESS, POST_SUBADMIN_SUCCESS } from "../action/action"

const initialstate={
    subadmin:[],
    isError:null,
    isLoading:false,
}

const subadminReducer=(state=initialstate,action)=>{
    switch(action.type){
        // get subadmin
        case GET_SUBADMIN_LIST_PROGRESS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case GET_SUBADMIN_LIST_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                subadmin:action.data
            }
        }
        case GET_SUBADMIN_LIST_ERROR:{
            return{
                ...state,
                isError:true
            }
        }
        // post subadmin
        case POST_SUBADMIN_PROGRESS:{
            return{
                ...state,
                isLoading:true
            }
        }
        case POST_SUBADMIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                subadmin:state.subadmin.concat(action.data)
            }
        }
        case POST_SUBADMIN_ERROR:{
            return{
                ...state,
                isError:true
            }
        }

        default:{
            return{
                ...state
            }
        }
    }

}

export default subadminReducer