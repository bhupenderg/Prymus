const nlMsg = document.getElementById('newsLetter-msg')
document.getElementById('join-newsletter').addEventListener('submit', (e) => {
    e.preventDefault()
    axios.post('/join-newsletter', {email: document.querySelector('.nl').value}).then(() => {
        nlMsg.innerHTML = '💌 You have successfully subscribed to our newsletter.'
        nlMsg.style.display = 'block'
    }).catch(() => {
        console.log("Something went wrong")
    })
})







