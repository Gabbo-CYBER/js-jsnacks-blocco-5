//SNACKS 1

//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine. 

// Definizione dell'array di zucchine
let zucchine = [
    { tipo: "Zucchina nera", peso: 150, lunghezza: 20 },
    { tipo: "Zucchina romanesca", peso: 120, lunghezza: 18 },
    { tipo: "Zucchina lunga", peso: 100, lunghezza: 25 },
    { tipo: "Zucchina tonda", peso: 130, lunghezza: 15 },
    { tipo: "Zucchina gialla", peso: 140, lunghezza: 22 },
    { tipo: "Zucchina bianca", peso: 110, lunghezza: 17 },
    { tipo: "Zucchina siciliana", peso: 160, lunghezza: 21 },
    { tipo: "Zucchina trombetta", peso: 170, lunghezza: 24 },
    { tipo: "Zucchina fiorentina", peso: 180, lunghezza: 23 }
];

// Funzione per calcolare il peso totale delle zucchine
function calcolaPesoTotale(zucchine) {
    let pesoTotale = 0;
    for (let i = 0; i < zucchine.length; i++) {
        pesoTotale += zucchine[i].peso;
    }
    return pesoTotale;
}

// Calcolo del peso totale delle zucchine
let pesoTotaleZucchine = calcolaPesoTotale(zucchine);
console.log("Il peso totale delle zucchine è: " + pesoTotaleZucchine + " grammi.");

//SNAK 2
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const oggettiZucchina = [
    { lunghezza: 12, peso: 0.2 },
    { lunghezza: 18, peso: 0.3 },
    { lunghezza: 14, peso: 0.25 },
    { lunghezza: 20, peso: 0.35 },
    { lunghezza: 16, peso: 0.28 },
    { lunghezza: 10, peso: 0.18 },
    { lunghezza: 22, peso: 0.4 },
    { lunghezza: 13, peso: 0.22 },
    { lunghezza: 17, peso: 0.29 },
    { lunghezza: 15, peso: 0.26 }
];

const zucchineMenoDi15Cm = [];
const zucchinePiuDi15Cm = [];

// Dividi le zucchine in due array in base alla lunghezza
for (const zucchina of oggettiZucchina) {
    if (zucchina.lunghezza < 15) {
        zucchineMenoDi15Cm.push(zucchina);
    } else {
        zucchinePiuDi15Cm.push(zucchina);
    }
}

// Calcola il peso totale di ciascun gruppo
let pesoTotaleMenoDi15Cm = 0;
for (const zucchina of zucchineMenoDi15Cm) {
    pesoTotaleMenoDi15Cm += zucchina.peso;
}

let pesoTotalePiuDi15Cm = 0;
for (const zucchina of zucchinePiuDi15Cm) {
    pesoTotalePiuDi15Cm += zucchina.peso;
}

// Stampare i pesi totali dei due gruppi di zucchine
console.log("Il peso totale delle zucchine lunghe meno di 15cm è:", pesoTotaleMenoDi15Cm, "kg");
console.log("Il peso totale delle zucchine lunghe più di 15cm è:", pesoTotalePiuDi15Cm, "kg");
