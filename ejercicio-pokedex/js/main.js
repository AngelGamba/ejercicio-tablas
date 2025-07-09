import { cargarPokemones, mostrarDetalle } from './components/listado.js';

window.mostrarTodos = () => cargarPokemones();
window.mostrarFavoritos = () => cargarPokemones(true);
window.paginaAnterior = () => cargarPokemones(false, -1);
window.paginaSiguiente = () => cargarPokemones(false, 1);
window.mostrarDetalle = mostrarDetalle;

document.addEventListener('DOMContentLoaded', () => {
  cargarPokemones();
});
