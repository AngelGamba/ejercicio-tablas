//equipo 1
console.group("Unidades ejercito 1");
let soldadosRegulares = [
    cantidad = Math.floor(Math.random() * (500 - 1000 + 1)) + 1000,
    vida = parseInt(2500 * 2/12),
    ataque = parseInt(500 * 1/14),
];

console.group("SoldadosRegulares");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let soldadosProfesionales = [
    cantidad = Math.floor(Math.random() * (500 - 1000 + 1)) + 1000,
    vida = parseInt(2500 * 3/12),
    ataque = parseInt(500 * 2/14),
];

console.group("SoldadosProfesionales");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let soldadosElite = [
    cantidad = Math.floor(Math.random() * (200 - 300 + 1)) + 300,
    vida = parseInt(2500 * 4/12),
    ataque = parseInt(500 * 3/14),
];

console.group("SoldadosElite");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let carroTanque = [
    cantidad = Math.floor(Math.random() * (50 - 100 + 1)) + 100,
    vida = parseInt(2500 * 7/12),
    ataque = parseInt(500 * 4/14),
];

console.group("CarroTanques");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let helicoptero = [
    cantidad = Math.floor(Math.random() * (30 - 50 + 1)) + 50,
    vida = parseInt(2500 * 8/12),
    ataque = parseInt(500 * 5/14),
];

console.group("Helicopteros");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let avionCombate = [
    cantidad = Math.floor(Math.random() * (50 - 75 + 1)) + 75,
    vida = parseInt(2500 * 10/12),
    ataque = parseInt(500 * 6/14),
];

console.group("Aviones de combate");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let submarino = [
    cantidad = Math.floor(Math.random() * (2 - 1 + 1) + 1),
    vida = 2500,
    ataque = parseInt(500),
];

console.group("Submarinos")
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();
console.groupEnd();


//equipo 2
console.group("Unidades ejercito 2");
let soldadosRegulares2 = [
    cantidad = Math.floor(Math.random() * (500 - 1000 + 1)) + 1000,
    vida = parseInt(2500 * 2/12),
    ataque = parseInt(500 * 1/14),
];

console.group("SoldadosRegulares2");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let soldadosProfesionales2 = [
    cantidad = Math.floor(Math.random() * (500 - 1000 + 1)) + 1000,
    vida = parseInt(2500 * 3/12),
    ataque = parseInt(500 * 2/14),
];

console.group("SoldadosProfesionales2");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let soldadosElite2 = [
    cantidad = Math.floor(Math.random() * (200 - 300 + 1)) + 300,
    vida = parseInt(2500 * 4/12),
    ataque = parseInt(500 * 3/14),
];

console.group("SoldadosElite2");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let carroTanque2 = [
    cantidad = Math.floor(Math.random() * (50 - 100 + 1)) + 100,
    vida = parseInt(2500 * 7/12),
    ataque = parseInt(500 * 4/14),
];

console.group("CarroTanques2");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let helicoptero2 = [
    cantidad = Math.floor(Math.random() * (30 - 50 + 1)) + 50,
    vida = parseInt(2500 * 8/12),
    ataque = parseInt(500 * 5/14),
];

console.group("Helicopteros2");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let avionCombate2 = [
    cantidad = Math.floor(Math.random() * (50 - 75 + 1)) + 75,
    vida = parseInt(2500 * 10/12),
    ataque = parseInt(500 * 6/14),
];

console.group("Aviones de combate2");
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();

let submarino2 = [
    cantidad = Math.floor(Math.random() * (2 - 1 + 1) + 1),
    vida = 2500,
    ataque = parseInt(500),
];

console.group("Submarinos2")
console.log("cantidad", cantidad);
console.log("vida", vida);
console.log("ataque", ataque);

console.groupEnd();
console.groupEnd();

// Ejercitos 
const ejercito1 = [
  soldadosRegulares,
  soldadosProfesionales,
  soldadosElite,
  carroTanque,
  helicoptero,
  avionCombate,
  submarino
];

const ejercito2 = [
  soldadosRegulares2,
  soldadosProfesionales2,
  soldadosElite2,
  carroTanque2,
  helicoptero2,
  avionCombate2,
  submarino2
];

// Tipos de unidad
const tipos = [
  "Soldado Regular",
  "Soldado Profesional",
  "Soldado Elite",
  "Carro Tanque",
  "Helicóptero",
  "Avión de Combate",
  "Submarino"
];

//generar lista de unidades individuales
  function expandirEjercito(ejercitoArray) {
  const lista = [];
  ejercitoArray.forEach((unidad, index) => {
    const cantidad = unidad[0];
    const vida = unidad[1];
    const ataque = unidad[2];

    for (let i = 0; i < cantidad; i++) {
      lista.push({
        tipo: tipos[index],
        vida: vida,
        maxVida: vida,
        ataqueMax: ataque
      });
    }
  });
  return lista;
}

//combate
function ataqueTurno(atacantes, defensores, stats) {
  const vivosAtacantes = atacantes.filter(u => u.vida > 0);
  const vivosDefensores = defensores.filter(u => u.vida > 0);

  vivosAtacantes.forEach(unidad => {
    if (vivosDefensores.length === 0) return;
    const objetivo = vivosDefensores[Math.floor(Math.random() * vivosDefensores.length)];

    let fuerza = Math.floor(Math.random() * unidad.ataqueMax) + 1;
    if (fuerza === unidad.ataqueMax) stats.criticos++;

    const reduccionClima = 1 - Math.random() * 0.3;
    fuerza = Math.floor(fuerza * reduccionClima);

    if (fuerza > 0) stats.ataquesEfectivos++;
    objetivo.vida -= fuerza;

    if (objetivo.vida <= 0) {
      stats.eliminados[objetivo.tipo] = (stats.eliminados[objetivo.tipo] || 0) + 1;
    }
  });
}

//simulacion del combate
function simular() {
  const e1 = expandirEjercito(ejercito1);
  const e2 = expandirEjercito(ejercito2);

  const stats = {
    criticos: 0,
    ataquesEfectivos: 0,
    eliminados: {}
  };

  let turno = 1;
  const primero = Math.random() < 0.5 ? "e1" : "e2";

  console.log(`\n >>>> Comienza la guerra - Inicia ${primero === "e1" ? "Ejercito 1" : "Ejercito 2"} <<<<\n`);

  while (e1.some(u => u.vida > 0) && e2.some(u => u.vida > 0)) {
    console.group(`Turno ${turno}`);
    if (primero === "e1") {
      ataqueTurno(e1, e2, stats);
      ataqueTurno(e2, e1, stats);
    } else {
      ataqueTurno(e2, e1, stats);
      ataqueTurno(e1, e2, stats);
    }

    console.log(`Ejercito 1 vivo: ${e1.filter(u => u.vida > 0).length}`);
    console.log(`Ejercito 2 vivo: ${e2.filter(u => u.vida > 0).length}`);
    console.groupEnd();

    turno++;
  }

  const ganador = e1.some(u => u.vida > 0) ? "Ejercito 1" : "Ejercito 2";
  console.log(`Ganador: >>>> ${ganador} <<<<\n`);
  mostrarEstadisticas(stats, [...e1, ...e2]);
}

//estadisticas del combate
function mostrarEstadisticas(stats, unidades) {
  console.group("Estadisticas finales:");

  console.log(`Golpes criticos: ${stats.criticos}`);
  console.log(`Ataques efectivos: ${stats.ataquesEfectivos}`);
  console.log("Unidades eliminadas:");
  for (let tipo in stats.eliminados) {
    console.log(`  > ${tipo}: ${stats.eliminados[tipo]}`);
  }

  const perdidas = unidades.filter(u => u.vida <= 0).length;
  const ilesas = unidades.filter(u => u.vida === u.maxVida).length;
  const heridos = unidades.filter(u => u.vida > 0 && u.vida < u.maxVida * 0.3).length;

  console.log(`Unidades perdidas: ${perdidas}`);
  console.log(`Unidades Ilesas: ${ilesas}`);
  console.log(`Unidades Heridas (menos del 30% de vida): ${heridos}`);

  console.groupEnd();
}

//ejecutar la simulacion del combate
simular();

