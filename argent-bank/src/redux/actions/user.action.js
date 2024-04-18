import axios from "axios";

export const POST_USER = "POST_USER";

export const postUser = () => {
    return ( dispatch ) => {
        return axios.post("http://localhost:3001/api-docs/#/User%20Module/post_user_login").then((res) =>{
        dispatch({type: POST_USER, payload :res.status});   
        })
    }
}