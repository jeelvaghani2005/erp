import axios from "axios"
import { BASE_URL, GET_SUBADMIN, POST_SUBADMIN } from "../../constant"

export const GetSubadmin=()=>{
    return axios.get(BASE_URL+GET_SUBADMIN).then((res)=>{
        const data=res.data.data
        const status=res.status

        console.log(data);
        return{
            data,status
        }
    }).catch((e)=>{
        console.log(e);
    })
}

export const PostSubadmin=(action)=>{
    return axios.post(BASE_URL+POST_SUBADMIN,action.payload).then((res)=>{
        console.log(res);
        const data=res.data.data
        const status=res.status
        return{
            data,status
        }
    }).catch((e)=>{
        console.log(e);
    })
}