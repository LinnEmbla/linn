/* eslint-disable */

// String: ""  |  ''   |   ``
// Array: []
// Object: {}


console.log('=-=--=-=- Program start! =-=-=-=--=-=');

// Oppg. 1: Lag et tall og lagre det i en variabel
const konstantVariabel = 11
// konstantVariabel = 12   // <---- IKKE LOV!
// let x
// x = 11

// Oppg. 2: Lag en string og lagre det i en variabel
let linn
linn = "cool"
linn = "Linn er " + linn

// Oppg. 2b: Logg verdien fra tidligere i konsollen
// console.log (linn)

// Oppg. 3: Lag en array og legg variablene fra tidligere oppgave i arrayen
let minArray = [linn, 11, "1337"]

// Oppg. 3b: logg arrayen
// console.log([linn, x])
// console.log(minArray)

// Oppg. 4: Loop over arrayen og logg verdiene en og en
// for (let i = 0; i < array.length; i = i + 1) {
//   array[i]
// }

let i = 0

while (i < minArray.length) {
    let value = minArray[i]
    // console.log(value);
    i = i + 1
}

// Oppg. 5: Logg tallene fra 1-15
let number = 1
while (number < 16 ) {
    // console.log (number)
    number = number + 1
}


// Oppg. 6: Logg alle partallene mellom 1 til 101
number = 2
while (number < 102){
    // console.log (number)
    number = number + 2
}

// Oppg. 6b: Logg alle oddetallene mellom 0 og 100... baklengs
number = 99
while (number > 0){
//    console.log (number)
    number = number - 2
}

// Oppg. 6c: Logg all tall mellom 1 og 100
number = 1
while (number < 101){
  // console.log (number)
  number = number + 1
}

// Oppg. 6d: Logg alle tall mellom 1 og 100 med en for-loop
for (var l = 0; l < 101 ; l++) {
  console.log (l)
}

// Oppg. 7: Sum alle tall mellom 1 og 100 (inklusivt 1 og 100)
number = 1
let sum = 0
while (number <= 100){
  sum = sum + number
  number = number + 1
}
// console.log(sum);

// Oppg. 7b: Logg en string med 38 stjerne tegn (*)
number = 0
let stjerner = ""
while (number < 38){
  stjerner = stjerner + "*"
  number = number + 1
}
// console.log(stjerner);
// console.log(stjerner.length);


// Oppg. 8: Logg en array med tall som vist under:
/*
38 | **************************************
30 | ******************************
10 | **********
... etc
*/
function repiter(tegn, antall) {
  let tegnene = ""
  for (let n = 0; n < antall; n = n + 1) {
    tegnene = tegnene + tegn
  }
  return tegnene
}

let arrayMedTall = [38, 30, 10, 25, 9]
i = 0
while (i < arrayMedTall.length){
  let value = arrayMedTall [i]
  i = i + 1
  // for (let n = 0; n < value; n = n + 1) {
  //   diamant = diamant + "*"
  // }
  let diamant = repiter("*", value)

  // console.log(value + " | " + diamant);
}


// const nyArray = arrayMedTall.map(function(tall) {
//   const minString = tall + " | " + repiter("*", tall)
//   return minString
// })
// i++
// i += 1
// i = i + 1
// for (i = 0; i < nyArray.length; i++) {
//   console.log(nyArray[i]);
// }


// Oppg. 9: FizzBuzz
// loop gjennom alle tall mellom 1 og 100
// logg alle tall, men erstatt tall delelig med 3 med "Fizz"
// og tall some er delelig på 5 med "Buzz"
// og tall som er delelig på 3 og 5 med "FizzBuzz"





console.log('-=-=-=-=- Program slutt! -=-=-=-=-=-=-');
