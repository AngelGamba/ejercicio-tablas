let pagina = 1;
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

export async function cargarPokemones(soloFavoritos = false, cambioPagina = 0) {
  pagina += cambioPagina;
  if (pagina < 1) pagina = 1;

  const offset = (pagina - 1) * 10;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
  const data = await res.json();
  const lista = document.getElementById("pokemonList");
  lista.innerHTML = "";

  const pokemones = data.results;

  document.getElementById("paginaActual").textContent = `Página ${pagina}`;

  for (let poke of pokemones) {
    const resPoke = await fetch(poke.url);
    const dataPoke = await resPoke.json();

    if (soloFavoritos && !favoritos.includes(dataPoke.name)) continue;

    const div = document.createElement("div");
    div.className = "pokemon-card";
    div.innerHTML = `
      <img src="${dataPoke.sprites.front_default}" alt="${dataPoke.name}">
      <span>${dataPoke.name} (${dataPoke.types.map(t => t.type.name).join(', ')})</span>
      <button onclick="toggleFavorito('${dataPoke.name}')">${favoritos.includes(dataPoke.name) ? "⭐" : "⚪"}</button>
    `;
    div.onclick = () => mostrarDetalle(dataPoke);
    lista.appendChild(div);
  }
}

export function mostrarDetalle(pokemon) {
  const div = document.getElementById("pokemonDetail");
  div.innerHTML = `
    <h2>${pokemon.name}</h2>
    <div class="pokemon-images">
      <img src="${pokemon.sprites.front_default}" alt="Frente">
      <img src="${pokemon.sprites.back_default}" alt="Espalda">
      <img src="${pokemon.sprites.front_shiny}" alt="Shiny">
    </div>
    <table class="pokemon-table">
      <tr><td>Experiencia Base</td><td>${pokemon.base_experience}</td></tr>
      <tr><td>Altura</td><td>${pokemon.height}</td></tr>
      <tr><td>HP</td><td>${pokemon.stats[0].base_stat}</td></tr>
      <tr><td>Ataque</td><td>${pokemon.stats[1].base_stat}</td></tr>
      <tr><td>Defensa</td><td>${pokemon.stats[2].base_stat}</td></tr>
      <tr><td>Velocidad</td><td>${pokemon.stats[5].base_stat}</td></tr>
      <tr><td>Tipo</td><td>${pokemon.types.map(t => t.type.name).join(", ")}</td></tr>
    </table>
  `;
}

window.toggleFavorito = function(nombre) {
  if (favoritos.includes(nombre)) {
    favoritos = favoritos.filter(n => n !== nombre);
  } else {
    favoritos.push(nombre);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  cargarPokemones();
};
