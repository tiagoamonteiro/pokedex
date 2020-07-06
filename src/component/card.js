
const pokedex = document.getElementById('pokedex')

export const card = (pokemon) => {
     const componentPoke = pokemon.map((dado) =>
        `
            <li class="card" id="${dado.id}">
                <img class="card_image" src="${dado.image}" alt="">
                <div class="name">${dado.name}</div>
                <div>
                    <p>type: ${dado.type}</p>
                    <p>abilities: ${dado.abilities}</p>
                </div>
            </li>    
        `
        ).join('');

    pokedex.innerHTML = componentPoke;
}
