const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelect')
const questionInput = document.getElementById('questionInput')
const askButton = document.getElementById('askButton')
const aiResponse = document.getElementById('aiResponse')
const form = document.getElementById('form')

const enviarFormulario = (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value 
    const game = gameSelect.value
    const question = questionInput.value


    console.log({apiKey, game, question})

    if(true) {

    }

}
form.addEventListener('submit', enviarFormulario)
