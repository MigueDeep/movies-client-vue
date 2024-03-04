import axios from "axios";

const API_URL = "http://localhost:8082/api/movies/"
const API_URL_GENDER = "http://localhost:8082/api/genders/"


const getMovies = async() => {
    try{
        const response = axios.get(API_URL)
        return response
    }catch(err){
        console.log(err)
    }
}

const getMovie = async(id) => {
    try{
        const response = axios.get(API_URL + id)
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

const saveMovie = async(movie) => {
    try{
        const response = axios.post(API_URL, movie )
        return response
    }catch(err){
        console.log(err)
    }
}


const deleteMovie = async(id) => {
    try{
        const response = axios.delete(API_URL + id)
        return response
    }catch(err){
        console.log(err)
    }

}

const updateMovie = async(id, movie) => {
    try{
        const response = axios.put(API_URL + id, movie)
        return response
    }catch(err){
        console.log(err)
    }
}


export default {
    getMovies,
    getMovie,
    deleteMovie,
    getGender,
    saveMovie,
    updateMovie
}