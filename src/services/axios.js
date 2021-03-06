import axios from "axios";
const baseURL = "https://pokeapi.co/api/v2";

export const getPokemons = () => axios ({
    method: "GET",
    baseURL,
    url: "/pokemon", 
});

export const getPokemonByName = (name) => axios ({
    method: "GET",
    baseURL,
    url: `/pokemon/${name}`, 
});

export const getUsers = () => axios({
    method: "GET",
    baseURL: "https://reqres.in",
    url: "/api/users?page=2",
});

export const serviceLogin = (data) => axios({
    method: "POST",
    baseURL: "https://reqres.in",
    url: "/api/login",
    data: data
});