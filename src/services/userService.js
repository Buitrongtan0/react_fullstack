import axios from "../axios";

const HandleLoginApi = (email1 , password1) => {
    return axios.post("/api/login" , { email:email1  , password: password1});
}
export { HandleLoginApi };
