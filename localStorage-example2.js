let nameReference = document.getElementById('appointmentName')
let dateReference = document.getElementById('appointmentDate')
let formReference = document.getElementById('appointmentForm')
let listReference = document.getElementById('appointmentList')

const renderList = function () {
  // svuotare la lista se già presente
  listReference.innerHTML = ''

  // prendo il valore di appointments, se presente, dal localStorage
  // sarà una stringa!
  let appointments = []
  let savedAppointments = localStorage.getItem('appointments')
  if (savedAppointments) {
    appointments = JSON.parse(savedAppointments)
  }
  // a questo punto, in un modo o nell'altro, appointments è un array da cui
  // posso creare i miei <li>
  appointments.forEach((app) => {
    let newLi = document.createElement('li')
    newLi.innerText = app.name + ' il ' + app.date
    listReference.appendChild(newLi)
  })
}

formReference.addEventListener('submit', (e) => {
  e.preventDefault() // evito il refresh della pagina
  console.log('form inviato!')
  // recuperiamo, se esiste, l'array con i precedenti appuntamenti dal localStorage
  let existingAppointments = localStorage.getItem('appointments')
    ? JSON.parse(localStorage.getItem('appointments'))
    : []
  // ora existingAppointments è un array
  existingAppointments.push({
    name: nameReference.value,
    date: dateReference.value,
  })
  localStorage.setItem('appointments', JSON.stringify(existingAppointments))
  // aggiorna la lista degli appuntamenti dopo OGNI aggiunta
  renderList()
})

// si occupa di creare la lista all'AVVIO!
renderList()
