import axios from "axios";

const API_URL = "http://localhost:8082/api/peliculas/"
const API_URL_DELETE = "http://localhost:8082/api/peliculas/delete/"
const API_URL_GENDER = "http://localhost:8082/api/generos/"
const API_URL_SAVE = "http://localhost:8082/api/peliculas/save"
const API_URL_GET_ID    = "http://localhost:8082/api/peliculas/get/"

const getMovies = async() => {
    try{
        const response = axios.get(API_URL)
        return response
    }catch(err){
        console.log(err)
    }
}

const getGender = async() => {
    try{
        const response = axios.get(API_URL_GENDER)
        return response
    }catch(err){
        console.log(err)
    }
}

const getMovie = async(id) => {
    try{
        const response = axios.get(API_URL_GET_ID + id)
        return response
    }catch(err){
        console.log(err)
    }
}

const saveMovie = async(movie) => {
    try{
        const response = axios.post(API_URL_SAVE, movie )
        return response
    }catch(err){
        console.log(err)
    }
}


const deleteMovie = async(id) => {
    try{
        const response = axios.delete(API_URL_DELETE + id)
        return response
    }catch(err){
        console.log(err)
    }

}



getMovies()

export default {
    getMovies,
    getMovie,
    deleteMovie,
    getGender,
    saveMovie
}