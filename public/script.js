const pokemonNome = document.querySelector('.nome-pokemon');
const pokemonNum = document.querySelector('.num-pokemon');
const pokemonImg = document.querySelector('.img-pokemon');

const buscaPokemon = document.querySelector('.busca');
const inputBusca = document.querySelector('.input-busca');

const botaoAntes = document.querySelector('.btn-antes');
const botaoDepois = document.querySelector('.btn-depois');
let idBusca = 1;

const botaoDark = document.querySelector('.botao-dark');
const background = document.body;
const textoDarkmode = document.querySelector('.text-dark');

const typeUm = document.querySelector('#typesUm');
const typeDois = document.querySelector('#typesDois');

const hpPokemon = document.querySelector('#hp');
const atkPokemon = document.querySelector('#atk');
const defPokemon = document.querySelector('#def');
const spatkPokemon = document.querySelector('#spatk');
const spdefPokemon = document.querySelector('#spdef');
const spdPokemon = document.querySelector('#spd');

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200){

        const dados = await APIResponse.json();
        return dados;    
}}

const renderizarPokemon = async (pokemon) => {

    pokemonNome.innerHTML = 'Procurando...';
    pokemonNum.innerHTML = '';
    
    const dados = await fetchPokemon(pokemon);

    if (dados){

        pokemonImg.style.display = 'block';
        pokemonNome.innerHTML = dados.name;
        pokemonNum.innerHTML = dados.id;
        pokemonImg.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        
        typeUm.name = dados.types[0].type.name;
        try {
            typeDois.name = dados.types[1].type.name;
            typeDois.src = `./images/sprites/${typeDois.name}.png`;
        } catch (error){
            typeDois.src = `./images/sprites/under.png`;
        }        
        console.log(typeUm);
        console.log(typeDois);
        typeUm.src = `./images/sprites/${typeUm.name}.png`;
        

        hpPokemon.innerHTML =    'Hp:' + ' ' + dados['stats']['0']['base_stat'];
        atkPokemon.innerHTML =   'Attack:' + ' ' + dados['stats']['1']['base_stat'];
        defPokemon.innerHTML =   'Defense:' + ' ' + dados['stats']['2']['base_stat'];
        spatkPokemon.innerHTML = 'Sp. Atk:' + ' ' + dados['stats']['3']['base_stat'];
        spdefPokemon.innerHTML = 'Sp. Def:' + ' ' + dados['stats']['4']['base_stat'];
        spdPokemon.innerHTML =   'Speed:' + ' ' + dados['stats']['5']['base_stat'];
        idBusca = dados.id;
    } else {

        pokemonImg.style.display = 'block';
        pokemonImg.src = './images/sprites/miss.gif';
        pokemonNome.innerHTML =  'MissingNo.';
        pokemonNum.innerHTML =   '???';
        hpPokemon.innerHTML =    '?????';
        atkPokemon.innerHTML =   '?????';
        defPokemon.innerHTML =   '?????';
        spatkPokemon.innerHTML = '?????';
        spdefPokemon.innerHTML = '?????';
        spdPokemon.innerHTML =   '?????';
        typesUm.src = './images/sprites/under2.png';
        typesDois.src = './images/sprites/under.png';
    }
    inputBusca.value = '';
}

buscaPokemon.addEventListener('submit', (event) => {
    
    event.preventDefault();

    renderizarPokemon(inputBusca.value.toLowerCase());
});

botaoAntes.addEventListener('click', () => {
    
    if (idBusca > 1){
        idBusca -= 1;
        renderizarPokemon(idBusca);    
    }
});
botaoDepois.addEventListener('click', () => {
    
    idBusca += 1;
    renderizarPokemon(idBusca);  
});

botaoDark.addEventListener('click', () => {
    darkMode();
});
function darkMode() {
    
    background.classList.toggle("darkMode");
    let baseP = document.querySelector('.basePokemon');

    if (textoDarkmode.innerText == "DarkMode: Off"){

        textoDarkmode.innerText = "DarkMode: On";
        document.getElementById('pokedex').src="./images/pokedex-dark.png";
        baseP.classList.add('text-darkMode');
    } else {
        textoDarkmode.innerText = "DarkMode: Off";
        document.getElementById('pokedex').src="./images/pokedex.png";
        baseP.classList.remove('text-darkMode');
}};

const btns = document.querySelectorAll('.btn');
const dropMenus = document.querySelectorAll('.drop-menu');

renderizarPokemon(idBusca);