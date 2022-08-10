import axios from "axios";

export function Postlogin(data){
    return axios.post(`http://bookmyshownodej.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`http://bookmyshownodej.herokuapp.com/register`,data)
}

export function Postalogin(data){
    return axios.post(`http://bookmyshownodej.herokuapp.com/alogin`,data)
}

export function Postaregister(data){
    return axios.post(`http://bookmyshownodej.herokuapp.com/aregister`,data)
}

export function PostMovie(data){
    return axios.post(`http://bookmyshownodej.herokuapp.com/movies`,data)
}

export function PostTicket(data){
    return axios.post(`http://bookmyshownodej.herokuapp.com/ticket`,data)
}

export function UpdateSeats(id,data){
    return axios.put(`http://bookmyshownodej.herokuapp.com/movies/${id}`,data)
}

export function GetMovie(){
    return axios.get(`http://bookmyshownodej.herokuapp.com/movies`)
}

export function GetMovieById(id){
    return axios.get(`http://bookmyshownodej.herokuapp.com/movies/${id}`)
}

export function GetUserByEmail(email){
    return axios.get(`http://bookmyshownodej.herokuapp.com/users/${email}`)
}

export function GetTicketByName(username){
    return axios.get(`http://bookmyshownodej.herokuapp.com/ticket/${username}`)
}

export function GetTickets(){
    return axios.get(`http://bookmyshownodej.herokuapp.com/tickets`)
}

export function DeleteMovieById(id){
    return axios.delete(`http://bookmyshownodej.herokuapp.com/movies/${id}`)
}

