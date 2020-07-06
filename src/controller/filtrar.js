const input = document.querySelector('.input');
const ul = document.querySelector('.cards');

export function filtrarPokemons(){
    input.addEventListener('input', event => {
        const inputValue = event.target.value.trim().toLowerCase();
        const arrayLis = Array.from(ul.children)

        arrayLis
            .filter(li => !li.textContent.toLowerCase().includes(inputValue))
            .forEach(style => {
                style.classList.add('hidden');
            })

        arrayLis
            .filter(li => li.textContent.toLowerCase().includes(inputValue))
            .forEach(style => {
                style.classList.remove('hidden');
                style.classList.add("card")
            })    
    })
}
    
