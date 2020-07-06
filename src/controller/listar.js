import api from '../api/api'
import {card} from '../component/card'

const arrPoke = []

export async function listarPokemons(){
    for(let i=1; i <= 151; i++){
        arrPoke.push(await api.get(`/${i}`)
        .then(response => response.data))
    }

    Promise.all(arrPoke).then((res) => {
        const pokemon = res.map((data) => ({
            name: data.name,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            abilities: data.abilities.map((hab)=> hab.ability.name).join(', '),
            id: data.id
        }))
        card(pokemon)
    })         
}    
