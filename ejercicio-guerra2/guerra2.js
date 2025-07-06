// Variables globales configurables
let configSubmarino = { vida: 2500, ataque: 500 };
let factoresNumerador = [2, 3, 4, 7, 8, 10];
let factoresDenominador = [12, 12, 12, 12, 12, 12];
 
let ejercito1 = [];
let ejercito2 = [];
 
const tipos = [
  "Soldado Regular",
  "Soldado Profesional",
  "Soldado Elite",
  "Carro Tanque",
  "Helicóptero",
  "Avion de Combate",
  "Submarino"
];
 
function crearEjercito() {
  ejercito1 = generarEjercito();
  ejercito2 = generarEjercito();
  mostrarEjercitos();
  habilitarBoton("btnFight", true);
}
 
function generarEjercito() {
  const ejercito = [];
  ejercito.push(crearUnidad(500, 1000, factoresNumerador[0], factoresDenominador[0], 1));
  ejercito.push(crearUnidad(500, 1000, factoresNumerador[1], factoresDenominador[1], 2));
  ejercito.push(crearUnidad(200, 300, factoresNumerador[2], factoresDenominador[2], 3));
  ejercito.push(crearUnidad(50, 100, factoresNumerador[3], factoresDenominador[3], 4));
  ejercito.push(crearUnidad(30, 50, factoresNumerador[4], factoresDenominador[4], 5));
  ejercito.push(crearUnidad(50, 75, factoresNumerador[5], factoresDenominador[5], 6));
  ejercito.push([Math.floor(Math.random() * 2) + 1, configSubmarino.vida, configSubmarino.ataque]);
  return ejercito;
}
 
function crearUnidad(min, max, num, den, ataqueMult) {
  const cantidad = Math.floor(Math.random() * (max - min + 1)) + min;
  const vida = parseInt(2500 * num / den);
  const ataque = parseInt(500 * ataqueMult / 14);
  return [cantidad, vida, ataque];
}
 
function expandirEjercito(ejercitoArray) {
  const lista = [];
  ejercitoArray.forEach((unidad, index) => {
    for (let i = 0; i < unidad[0]; i++) {
      lista.push({
        tipo: tipos[index],
        vida: unidad[1],
        maxVida: unidad[1],
        ataqueMax: unidad[2]
      });
    }
  });
  return lista;
}
 
function mostrarEjercitos() {
  const panel = document.getElementById("panelCentro");
  panel.innerHTML = "";
  [ejercito1, ejercito2].forEach((ejercito, i) => {
    panel.innerHTML += `<p><strong>Ejército ${i + 1}</strong></p>`;
    ejercito.forEach((unidad, index) => {
      panel.innerHTML += `<p>${tipos[index]}: ${unidad[0]} unidades (vida: ${unidad[1]}, ataque: ${unidad[2]})</p>`;
    });
  });
}
 
async function simular() {
  const e1 = expandirEjercito(ejercito1);
  const e2 = expandirEjercito(ejercito2);
 
  const stats = { criticos: 0, ataquesEfectivos: 0, eliminados: {} };
  let turno = 1;
  const log = document.getElementById("panelDerecha");
  log.innerHTML = "";
  const primero = Math.random() < 0.5 ? "e1" : "e2";
  log.innerHTML += `<p><strong>Inicio:</strong> ${primero === "e1" ? "Ejército 1" : "Ejército 2"}</p>`;
 
  while (e1.some(u => u.vida > 0) && e2.some(u => u.vida > 0)) {
    log.innerHTML += `<hr><p><strong>Turno ${turno}</strong></p>`;
    if (primero === "e1") {
      ataqueTurno(e1, e2, stats);
      ataqueTurno(e2, e1, stats);
    } else {
      ataqueTurno(e2, e1, stats);
      ataqueTurno(e1, e2, stats);
    }
    contarVivos(log, e1, 1);
    contarVivos(log, e2, 2);
    await delay(1500);
    turno++;
  }
  const ganador = e1.some(u => u.vida > 0) ? "Ejército 1" : "Ejército 2";
  log.innerHTML += `<h3>Ganador: ${ganador}</h3>`;
  mostrarEstadisticas(stats, [...e1, ...e2]);
  habilitarBoton("btnNuevaGuerra", true);
  habilitarBoton("btnFight", false);
}
 
function contarVivos(log, ejercito, numero) {
  const resumen = tipos.map(tipo => {
    const vivos = ejercito.filter(u => u.tipo === tipo && u.vida > 0).length;
    return `${tipo}: ${vivos}`;
  });
  log.innerHTML += `<p><strong>Ejército ${numero} vivos:</strong><br>${resumen.join("<br>")}</p>`;
}
 
function ataqueTurno(atacantes, defensores, stats) {
  atacantes.filter(u => u.vida > 0).forEach(unidad => {
    const enemigos = defensores.filter(d => d.vida > 0);
    if (!enemigos.length) return;
    const objetivo = enemigos[Math.floor(Math.random() * enemigos.length)];
    let fuerza = Math.floor(Math.random() * unidad.ataqueMax) + 1;
    if (fuerza === unidad.ataqueMax) stats.criticos++;
    const reduccion = 1 - Math.random() * 0.3;
    fuerza = Math.floor(fuerza * reduccion);
    if (fuerza > 0) stats.ataquesEfectivos++;
    objetivo.vida -= fuerza;
    if (objetivo.vida <= 0) {
      stats.eliminados[objetivo.tipo] = (stats.eliminados[objetivo.tipo] || 0) + 1;
    }
  });
}
 
function mostrarEstadisticas(stats, unidades) {
  const log = document.getElementById("panelDerecha");
  log.innerHTML += `<h4>Estadísticas:</h4>`;
  log.innerHTML += `<p>Críticos: ${stats.criticos}</p>`;
  log.innerHTML += `<p>Ataques efectivos: ${stats.ataquesEfectivos}</p>`;
  for (let tipo in stats.eliminados) {
    log.innerHTML += `<p>${tipo}: ${stats.eliminados[tipo]}</p>`;
  }
  const muertos = unidades.filter(u => u.vida <= 0).length;
  const ilesas = unidades.filter(u => u.vida === u.maxVida).length;
  const heridas = unidades.filter(u => u.vida > 0 && u.vida < u.maxVida * 0.3).length;
  log.innerHTML += `<p>Muertos: ${muertos}</p>`;
  log.innerHTML += `<p>Ilesas: ${ilesas}</p>`;
  log.innerHTML += `<p>Heridas (&lt;30% vida): ${heridas}</p>`;
}
 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 
function guardarSubmarino() {
  const vida = parseInt(document.getElementById("vidaSub").value);
  const poder = parseInt(document.getElementById("poderSub").value);
  if (!isNaN(vida) && !isNaN(poder)) {
    configSubmarino.vida = vida;
    configSubmarino.ataque = poder;
    alert("Parámetros del submarino guardados.");
  }
}
 
function guardarFactores() {
  for (let i = 0; i < 6; i++) {
    const num = parseFloat(document.getElementById(`num${i}`).value);
    const den = parseFloat(document.getElementById(`den${i}`).value);
    if (!isNaN(num)) factoresNumerador[i] = num;
    if (!isNaN(den)) factoresDenominador[i] = den;
  }
  alert("Factores de cálculo actualizados.");
}
 
function nuevaGuerra() {
  ejercito1 = [];
  ejercito2 = [];
  document.getElementById("panelCentro").innerHTML = "";
  document.getElementById("panelDerecha").innerHTML = "";
  habilitarBoton("btnNuevaGuerra", false);
  habilitarBoton("btnFight", false);
}
 
function habilitarBoton(id, estado) {
  document.getElementById(id).disabled = !estado;
}