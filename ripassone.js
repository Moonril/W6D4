//variabili!!!

let num = 1
const ciao = 'ciao'

num = 2

// dati primitivi
// string
// number
// boolean
// undefined
// null

let myName = 'GIORGIO'
let partialName = myName.slice(0, 3)  // 'GIO'


//dati non primitivi

//array
const myArray = [1, 2, 4, 5, 7]
const myArray3 = [['s'], ['t']]

//inserire elementi
myArray.unshift(0)
myArray.push(12)
myArray.splice(5, 0, 6)
console.log(myArray) // 0, 1, 2, 4, 5, 6, 7, 12


myArray.length


// oggetti
//possono avere infinite coppie key: value

const myObject = {
    firstName: 'Ciccio',
    lastName: 'Pasticcio',
    teacher: true,
    age: 125,
    skills: ['Dropkick', 'suplex'],  //myObject.skills[1]
    area: {
        region: ['europe', 'asia'],  
    },
}


myObject.lastName

myObject['lastName']

delete myObject.area //rimuovere una proprietà

//cambiare dati rpimitivi
let a = 10
let b = a // b = 10
a = 20 // b rimane 10

//cambaire dati non primitivi

let objA = {
    a: 10
}

let objB = objA // objB è diventato un oggetto con a:10. sono lo stesso oggetto. solo JS riconosce DUE modi per chiamare lo stesso oggetto

let objC = {...objA} //crea una copia delle proprietà di un oggetto e ci permette di trasportarle altrove. spread operator

// condizionali

let total = 45

const freeShippingThreshold = 50

const fixedShippingCost = 5

if (total >= freeShippingThreshold) {
    alert('spedizione gratuita')
    
}else {
    alert('totale è' + total)
}

const ternaryTotal = total >= freeShippingThreshold ? total : total + fixedShippingCost

// valori falsy
//false
// 0
// -0
// NaN
// undefined
// null
// ''


//LOOPS (dwhile, do-while)

let rand = 0
let counter = 0

while(rand < 8){
    rand = Math.floor(Math.random() * 10)
    counter++
}


// loop prederminato (for)

const arr = ['ciao', 'bubu', 'hello']

for(let i = 0; i < 10; i++) {
    //bla bla
}


arr.forEach((element, i) => {
    //primo giro element è ciao, i conta
    //secondo giro element è bubu, i conta
    console.log('element', element, 'i', i)
})

//questa funzione freccia ha 'return' incluso, ritorna str1 tutto maiuscolo
const gigio= (str1) => str1.toUpperCase()