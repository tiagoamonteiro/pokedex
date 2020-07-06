import axios from 'axios';

const url = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default url;