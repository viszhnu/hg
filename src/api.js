import axios from "axios";

export function PostUserData(data){
    return axios.post(`https://6065cac7b8fbbd0017567651.mockapi.io/users`, data)
}
export function GetUserData(){
    return axios.get(`https://6065cac7b8fbbd0017567651.mockapi.io/users`);
}
export function UserData(id){
    return axios.get(`https://6065cac7b8fbbd0017567651.mockapi.io/users/${id}`);
}
export function PutUserData(id,data){
    return axios.put(`https://6065cac7b8fbbd0017567651.mockapi.io/users/${id}`,data);
}