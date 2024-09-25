const ProductTypeEnum = Object.freeze({
    DEFAULT: 'pokemon.sprites.front_default',
    // BACK: pokemon.sprites.back_default,
    // BACK_SHINY: pokemon.sprites.back_shiny,
});

console.log(ProductTypeEnum.DEFAULT)
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonCards = document.querySelector(".cards")
let pictureAngle

function renderPokemonCards() {
    /*
    <li class="card">
        <h2 class="card--title">Bulbasaur</h2>
        <img
            width="256"
            class="card--img"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        />
        <ul class="card--text">
            <li>HP: 45</li>
            <li>ATTACK: 49</li>
            <li>DEFENSE: 49</li>
            <li>SPECIAL-ATTACK: 65</li>
            <li>SPECIAL-DEFENSE: 65</li>
            <li>SPEED: 45</li>
        </ul>
        </li>
    */

    pokemonCards.innerHTML = '';

    data.forEach((pokemon) => {
        const li = document.createElement('li');
        li.className = 'card'

        const h2 = document.createElement('h2');
        h2.className = 'card--title';
        h2.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        li.appendChild(h2);

        const img = document.createElement('img');
        img.width = '256';
        img.className = 'card--img'
        img.src = pokemon.sprites.front_default;
        li.appendChild(img);

        const ul = document.createElement('ul');
        ul.className = 'card--text';
        pokemon.stats.forEach((stat) => {
            const statli = document.createElement('li');
            statli.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            ul.appendChild(statli);
        })
        li.appendChild(ul);

        pokemonCards.appendChild(li);
    });
}

renderPokemonCards();