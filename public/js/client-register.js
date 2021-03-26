






const userRegisterHere = document.querySelector('#user-register-form-container')
const userLoginHere = document.querySelector('#user-login-form-container')
const managerRegisterHere = document.querySelector('#manager-register-form-container')
const managerLoginHere = document.querySelector('#manager-login-form-container')
const userTextRegisterHere = document.querySelector('#user-register-form-container h3 span')
const userTextLoginHere = document.querySelector('#user-login-form-container h3 span')
const managerTextRegisterHere = document.querySelector('#manager-register-form-container h3 span')
const managerTextLoginHere = document.querySelector('#manager-login-form-container h3 span')
const userForm = document.getElementById('user-forms-container')
const managerForm = document.getElementById('manager-forms-container')

const text = document.querySelector('.user-manager')
const managerText = document.getElementById('manager')






userTextRegisterHere.addEventListener('click', () => {
        
    userLoginHere.style.display = 'flex'
    userRegisterHere.style.display = 'none'
    
})

userTextLoginHere.addEventListener('click', () => {
    userRegisterHere.style.display = 'flex'
    userLoginHere.style.display = 'none'
})

managerTextRegisterHere.addEventListener('click', () => {
        
    managerLoginHere.style.display = 'flex'
    managerRegisterHere.style.display = 'none'
    
})

managerTextLoginHere.addEventListener('click', () => {
    managerRegisterHere.style.display = 'flex'
    managerLoginHere.style.display = 'none'
})


text.addEventListener('click', (e) => {
    console.log(e.target.children)
    if(e.target === document.querySelector('h1#user')) {
        userForm.style.display = 'flex'
        managerForm.style.display = 'none'
    } else if(e.target === document.querySelector('h1#manager')){
        managerForm.style.display = 'flex'
        userForm.style.display = 'none'
    }
})

// manager.addEventListener('click', () => {
//     // userForm.style.display = 'none'
//     // managerForm.style.display = 'block'
//     console.log("Hello")
// })