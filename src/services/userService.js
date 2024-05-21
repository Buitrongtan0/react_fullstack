import axios from "../axios";

const HandleLoginApi = (email1 , password1) => {
    return axios.post("/api/login" , { email:email1  , password: password1});
}
const getAllUser = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`)
}
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (data) => {
    return axios.delete('/api/delete-user', {
        data: {
            id : data
        }
    })
}
const editUserSevice = (data) => {
    return axios.put("/api/edit-user",data)
}
export { HandleLoginApi,  getAllUser, createNewUserService, deleteUserService,editUserSevice};
