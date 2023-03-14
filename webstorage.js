// Le WEB Storage API nascono con la standardizzazione di HTML5 al fine di
// migliorare le tecnologie esistenti (cookie)
// due limitazioni principali dei cookies:
// 1) i cookie potevano memorizzare solamente 4KB di dati
// 2) i cookie non possono venire utilizzati per scopi di sessioni

// la soluzione è stata introdurre due nuove tecnologie per lo stoccaggio dei dati
// lato client (browser):
// - localStorage (che memorizza i dati fino al proprio svuotamento)
// - sessionStorage (che si autodistrugge alla chiusura del tab/browser)

// entrambe offrono molto più spazio, e memorizzano informazioni separatamente per
// ogni dominio

// i metodi per interagire con questi motori di storage sono gli stessi
// per localStorage e sessionStorage

// localStorage.clear() // svuota il localStorage
// sessionStorage.clear() // svuota il sessionStorage

localStorage.setItem('name', 'Stefano')
localStorage.setItem('name', 'Hansel') // questa istruzione sovrascrive il
// precedente valore di "name"

let myName = localStorage.getItem('name')
console.log(myName) // Hansel

// value può essere solamente una stringa... come salviamo una strutture dati
// più complessa?
let teacherProfile = {
  name: 'Stefano',
  class: 'FS0123B',
}

// non otteniamo il risultato sperato :(
// localStorage.setItem('profile', teacherProfile)

// stringhifizziamo l'oggetto in modo corretto:
localStorage.setItem('profile', JSON.stringify(teacherProfile))

// recuperando l'oggetto salvato come stringa però, ottengo nuovamente una stringa
let objectAsAString = localStorage.getItem('profile')
// non posso trattarlo come un oggetto...
console.log(objectAsAString.class) // undefined :(

// per poter riottenere l'oggetto iniziale, devo fare il procedimento inverso:
// da una stringa passare ad un oggetto

let initialObject = JSON.parse(objectAsAString)
console.log(initialObject)
// ora posso leggere la proprietà class
console.log(initialObject.class)

// funziona anche con gli array! (sono sempre oggetti per JS...)
let arrayOfPets = ['cat', 'dog', 'hamster']
localStorage.setItem('pets', JSON.stringify(arrayOfPets))
let petsAsAString = localStorage.getItem('pets')
// trasformiamo nuovamente petsAsAString in un array
let originalArray = JSON.parse(petsAsAString)
console.log(originalArray[2])

let obj1 = {
  name: 'Hansel',
}

// non è possibile utilizzare JSON.parse() su un oggetto!
// let objOfobj1 = JSON.parse(obj1)
// console.log(objOfobj1)

// localStorage.clear() // <-- pialla tutto

// leggiamo direttamente la proprietà "class" della chiave "profile" che
// era un oggetto in origine ma poi era stato convertito una stringa

let myClass = JSON.parse(localStorage.getItem('profile')).class
console.log(myClass)
