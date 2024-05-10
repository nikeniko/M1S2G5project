/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

for (let index = 0; index < pets.length; index++) {
  console.log(pets[index]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const order = pets.sort();

console.log("messi in ordine alfabetico:", order);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("messin in ordine alfabetico al contrario", order.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const scambio = pets.slice(1).concat(pets[0]);

console.log(scambio);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const plate = ["4LD0B", "G10V4", "G14C0"];

for (let index = 0; index < cars.length; index++) {
  cars[index].licensePlate = plate[index];
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Fiat",
  model: "Panda",
  licensePlate: "G1G1",
  color: "yellow",
  trims: ["Aldo", "Giacomo", "Gigi"],
};
cars.push(newCar);

console.log(cars);

for (let index = 0; index < cars.length; index++) {
  if (cars[index].trims && cars[index].trims.length > 0) {
    cars[index].trims = cars[index].trims.slice(
      0,
      cars[index].trims.length - 1
    );
  }
}

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let index = 0; index < cars.length; index++) {
  if (cars[index].trims && cars[index].trims.length > 0) {
    justTrims.push(cars[index].trims[0]);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let index = 0; index < cars.length; index++) {
  if (cars[index].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

index = 0;

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

while (index < numericArray.length && numericArray[index] !== 32) {
  // continuerà ad andare finche index è minore della lunghezza dell'array e il numero non è 32
  console.log(numericArray[index]);
  index++;
}
if (index < numericArray.length && numericArray[index] === 32) {
  //1ui include il 32 per poterlo stampare
  console.log(numericArray[index]);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const positionsArray = [];

for (let index = 0; index < charactersArray.length; index++) {
  const position = charactersArray[index].charCodeAt(0) - "a".charCodeAt(0) + 1; //charCodeAt sua il cosice ASCII quindi quello che succede è  ('a' è 97) quindi in caso di ("g" = 103 - 97 + 1 = 7)
  positionsArray.push(position);
}

console.log(positionsArray);

const charactersArray2 = ["g", "n", "u", "z", "d"];
const positionsArray2 = [];

for (let index = 0; index < charactersArray.length; index++) {
  let position = 0;
  switch (charactersArray[index]) {
    case "a":
      position = 1;
      break;
    case "b":
      position = 2;
      break;
    case "c":
      position = 3;
      break;
    case "d":
      position = 4;
      break;
    case "e":
      position = 5;
      break;
    case "f":
      position = 6;
      break;
    case "g":
      position = 7;
      break;
    case "h":
      position = 8;
      break;
    case "i":
      position = 9;
      break;
    case "j":
      position = 10;
      break;
    case "k":
      position = 11;
      break;
    case "l":
      position = 12;
      break;
    case "m":
      position = 13;
      break;
    case "n":
      position = 14;
      break;
    case "o":
      position = 15;
      break;
    case "p":
      position = 16;
      break;
    case "q":
      position = 17;
      break;
    case "r":
      position = 18;
      break;
    case "s":
      position = 19;
      break;
    case "t":
      position = 20;
      break;
    case "u":
      position = 21;
      break;
    case "v":
      position = 22;
      break;
    case "w":
      position = 23;
      break;
    case "x":
      position = 24;
      break;
    case "y":
      position = 25;
      break;
    case "z":
      position = 26;
      break;
    default:
      position = 0;
  }
  positionsArray2.push(position);
}

console.log(positionsArray2);
