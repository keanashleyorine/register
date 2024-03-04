const username = document.querySelector('username')
const password = document.querySelector('password')
const confirmPassword = document.querySelector('confirm-password')
const age = document.querySelector('age')

const button = document.querySelector('#age')
button.onclick = () => {
    console.log(`username: ${username.value}, password: ${password.value}, confirm:
    ${confirmPassword.value} age: ${age.value}`)
}