
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonCards = document.querySelector(".cards");
const filterDropdown = document.querySelector('.filter--dropdown');
let imageAngle = 1;

function renderFilterDropdown() {
    filterDropdown.innerHTML = '';
  
    const label = document.createElement('label');
    label.for = 'images'
    label.innerText = 'Image angle:'
  
    const select = document.createElement('select');
    select.id = 'selectTEST'
    select.name = 'images'
  
    // OPTIONS
    const defaultOption = document.createElement('option');
    defaultOption.value = 1;
    defaultOption.innerText = 'Default'
    select.appendChild(defaultOption)

    const frontShiny = document.createElement('option');
    frontShiny.value = 2;
    frontShiny.innerText = 'Front shiny'
    select.appendChild(frontShiny)
  
    const back = document.createElement('option');
    back.value = 3;
    back.innerText = 'Back'
    select.appendChild(back)

    const backShiny = document.createElement('option');
    backShiny.value = 4;
    backShiny.innerText = 'Back shiny'
    select.appendChild(backShiny)
  
    const applyFilterButton = document.createElement('button');
    applyFilterButton.addEventListener('click', applyFilterOption);
    applyFilterButton.innerText = 'Apply'
  
    filterDropdown.appendChild(label);
    filterDropdown.appendChild(select);
    filterDropdown.appendChild(applyFilterButton);
  }

function applyFilterOption() {
    selectElement = document.querySelector('#selectTEST');
    imageAngle = selectElement.value;

    console.log(selectElement.value)
    console.log(imageAngle)

    renderPokemonCards();
}

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
        img.className = 'card--img';
        if (imageAngle == 1) img.src = pokemon.sprites.front_default;
        if (imageAngle == 2) img.src = pokemon.sprites.front_shiny;
        if (imageAngle == 3) img.src = pokemon.sprites.back_default;
        if (imageAngle == 4) img.src = pokemon.sprites.back_shiny;
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

renderFilterDropdown();
renderPokemonCards();