const textAreaReference = document.getElementById('inputField')
const loadButtonReference = document.getElementById('load')
const resetButtonReference = document.getElementById('reset')
const saveButtonReference = document.getElementById('save')

const reset = function () {
  textAreaReference.value = ''
  console.log('Text area has been resetted')
}

const save = function () {
  const currentText = textAreaReference.value
  localStorage.setItem('textAreaValue', currentText)
  console.log('Text area value has been saved')
}

const load = function () {
  const loadedText = localStorage.getItem('textAreaValue')
  // loadedText può essere una stringa oppure null
  if (loadedText) {
    // se loadedText NON è null, lo utilizziamo come valore per la textarea
    textAreaReference.value = loadedText
  } else {
    // se invece è null, stampiamo solamente un messaggio in console
    console.log('ERRORE! non esiste al momento contenuto salvato')
  }
}

resetButtonReference.addEventListener('click', reset)
// metodo alternativo per impostare un comportamento all'onclick:
saveButtonReference.onclick = save
loadButtonReference.onclick = load
